/**
 * Degradation handlers for unsupported Markdown features
 */

import type { Root, Element, RootContent, Text, ElementContent } from 'hast';
import type { ConversionContext } from '../types.js';

/**
 * Convert task list items to regular list items with markers
 */
function degradeTaskList(node: Element, context: ConversionContext): Element {
    const processListItem = (li: Element): Element => {
        const firstChild = li.children[0];

        // Check if first child is a checkbox input
        if (
            firstChild &&
            firstChild.type === 'element' &&
            firstChild.tagName === 'input' &&
            firstChild.properties?.type === 'checkbox'
        ) {
            const isChecked = firstChild.properties.checked === true;
            const marker = isChecked ? '✓ ' : '○ ';

            // Remove the checkbox and prepend marker
            const newChildren: ElementContent[] = [
                { type: 'text', value: marker },
                ...li.children.slice(1) as ElementContent[],
            ];

            context.warnings.push({
                type: 'degraded',
                feature: 'task list checkbox',
                message: 'Checkbox converted to Unicode marker',
                recommendation: 'Task lists displayed as ✓/○ markers.',
            });

            return { ...li, children: newChildren };
        }

        return li;
    };

    if (node.tagName === 'ul' || node.tagName === 'ol') {
        const children = node.children.map((child: Element['children'][number]) => {
            if (child.type === 'element' && child.tagName === 'li') {
                return processListItem(child);
            }
            return child;
        });
        return { ...node, children };
    }

    return node;
}

/**
 * Convert footnote references to superscript numbers
 */
function degradeFootnotes(tree: Root, context: ConversionContext): Root {
    const footnotes: Map<string, { content: RootContent[]; index: number }> = new Map();
    let footnoteIndex = 0;
    let hasFootnotes = false;

    const processNode = (node: RootContent): RootContent => {
        if (node.type !== 'element') return node;

        // Footnote reference [^1] becomes sup
        if (
            node.tagName === 'sup' &&
            node.properties?.className &&
            Array.isArray(node.properties.className) &&
            node.properties.className.includes('footnote-ref')
        ) {
            const anchor = node.children.find(
                (c): c is Element => c.type === 'element' && c.tagName === 'a'
            );

            if (anchor) {
                const href = anchor.properties?.href as string;
                const id = href?.replace('#', '') || '';

                if (!footnotes.has(id)) {
                    footnoteIndex++;
                    footnotes.set(id, { content: [], index: footnoteIndex });
                    hasFootnotes = true;
                }

                const idx = footnotes.get(id)!.index;

                return {
                    type: 'element',
                    tagName: 'sup',
                    properties: {
                        style: 'color: #0366d6; font-size: 0.85em;',
                    },
                    children: [{ type: 'text', value: `[${idx}]` }],
                };
            }
        }

        // Process children recursively
        const children = node.children.map((child: Element['children'][number]) => {
            if (child.type === 'element' || child.type === 'text') {
                return processNode(child as RootContent) as ElementContent;
            }
            return child;
        });

        return { ...node, children } as RootContent;
    };

    // First pass: process footnote references
    const processedChildren = tree.children.map(processNode);

    // Look for footnote definitions section and extract them
    const filteredChildren: RootContent[] = [];

    for (const child of processedChildren) {
        if (
            child.type === 'element' &&
            child.tagName === 'section' &&
            child.properties?.className &&
            Array.isArray(child.properties.className) &&
            child.properties.className.includes('footnotes')
        ) {
            // Extract footnote content but exclude the section
            // The content will be recreated at the end
            hasFootnotes = true;
            continue;
        }
        filteredChildren.push(child);
    }

    // Add footnotes section at the end if we have any
    if (hasFootnotes) {
        context.warnings.push({
            type: 'degraded',
            feature: 'footnotes',
            message: 'Footnotes converted to endnotes section',
            recommendation: 'Footnotes appear at article end with numbering.',
        });

        const footnotesSection: Element = {
            type: 'element',
            tagName: 'section',
            properties: {
                style: 'margin-top: 32px; padding-top: 16px; border-top: 1px solid #ddd;',
            },
            children: [
                {
                    type: 'element',
                    tagName: 'h3',
                    properties: { style: 'font-size: 16px; margin-bottom: 12px;' },
                    children: [{ type: 'text', value: '注释' }],
                },
                {
                    type: 'element',
                    tagName: 'ol',
                    properties: { style: 'font-size: 14px; color: #666; padding-left: 24px;' },
                    children: Array.from(footnotes.entries()).map(([, data]) => ({
                        type: 'element' as const,
                        tagName: 'li',
                        properties: { style: 'margin-bottom: 8px;' },
                        children: data.content.length > 0 ? data.content as ElementContent[] : [{ type: 'text' as const, value: '(footnote content)' }],
                    })) as ElementContent[],
                },
            ],
        };

        filteredChildren.push(footnotesSection);
    }

    return { type: 'root', children: filteredChildren };
}

/**
 * Check table width and add warnings for wide tables
 */
function checkTableWidth(node: Element, context: ConversionContext): void {
    if (node.tagName !== 'table') return;

    // Count columns
    const thead = node.children.find(
        (c: Element['children'][number]): c is Element => c.type === 'element' && c.tagName === 'thead'
    );
    const tbody = node.children.find(
        (c: Element['children'][number]): c is Element => c.type === 'element' && c.tagName === 'tbody'
    );

    const firstRow = thead?.children.find(
        (c: Element['children'][number]): c is Element => c.type === 'element' && c.tagName === 'tr'
    ) || tbody?.children.find(
        (c: Element['children'][number]): c is Element => c.type === 'element' && c.tagName === 'tr'
    );

    if (firstRow) {
        const columnCount = firstRow.children.filter(
            (c: Element['children'][number]) => c.type === 'element' && (c.tagName === 'th' || c.tagName === 'td')
        ).length;

        if (columnCount > 5) {
            context.warnings.push({
                type: 'warning',
                feature: 'wide table',
                message: `Table has ${columnCount} columns which may not display well`,
                recommendation: 'Consider splitting into multiple tables or converting to an image.',
            });
        }
    }
}

/**
 * Collect images and links for asset manifest
 */
function collectAssets(tree: Root, context: ConversionContext): void {
    const processNode = (node: RootContent): void => {
        if (node.type !== 'element') return;

        if (node.tagName === 'img') {
            const src = node.properties?.src as string;
            if (src) {
                const isRelative = !src.startsWith('http://') && !src.startsWith('https://') && !src.startsWith('data:');
                context.images.push({
                    type: 'image',
                    originalPath: src,
                    notes: isRelative ? 'Relative path detected' : 'External URL',
                    recommendation: isRelative
                        ? 'Upload to WeChat image library and update src'
                        : 'Ensure URL is publicly accessible',
                });

                if (isRelative) {
                    context.warnings.push({
                        type: 'warning',
                        feature: 'relative image path',
                        message: `Image "${src}" uses a relative path`,
                        recommendation: 'Upload image to WeChat image library for reliable display.',
                    });
                }
            }
        }

        if (node.tagName === 'a') {
            const href = node.properties?.href as string;
            if (href && href.startsWith('http')) {
                try {
                    const url = new URL(href);
                    context.externalLinks.push({
                        type: 'link',
                        originalPath: href,
                        notes: `Domain: ${url.hostname}`,
                        recommendation: 'External links work in WeChat.',
                    });
                } catch {
                    // Invalid URL, skip
                }
            }
        }

        // Process children
        if ('children' in node) {
            for (const child of node.children) {
                if (child.type === 'element') {
                    processNode(child);
                }
            }
        }
    };

    for (const child of tree.children) {
        processNode(child);
    }
}

/**
 * Apply all degradation transformations
 */
export function applyDegradations(tree: Root, context: ConversionContext): Root {
    // First, collect assets
    collectAssets(tree, context);

    // Process nodes
    const processNode = (node: RootContent): RootContent => {
        if (node.type !== 'element') return node;

        // Check table width
        if (node.tagName === 'table') {
            checkTableWidth(node, context);
        }

        // Degrade task lists
        if (node.tagName === 'ul' || node.tagName === 'ol') {
            node = degradeTaskList(node, context);
        }

        // Process children
        const children = node.children.map((child: Element['children'][number]) => {
            if (child.type === 'element' || child.type === 'text') {
                return processNode(child as RootContent) as ElementContent;
            }
            return child;
        });

        return { ...node, children } as RootContent;
    };

    const processedTree: Root = {
        type: 'root',
        children: tree.children.map(processNode),
    };

    // Handle footnotes
    return degradeFootnotes(processedTree, context);
}
