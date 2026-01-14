/**
 * Code block syntax highlighting with Shiki
 */

import { createHighlighter, type Highlighter, type BundledTheme } from 'shiki';
import type { Root, Element, Text, RootContent, ElementContent } from 'hast';
import type { CodeTheme, FeatureToggles } from '../../themes/types.js';
import type { ConversionContext } from '../types.js';

let highlighterPromise: Promise<Highlighter> | null = null;

/**
 * Initialize or get the Shiki highlighter
 */
async function getHighlighter(): Promise<Highlighter> {
    if (!highlighterPromise) {
        highlighterPromise = createHighlighter({
            themes: [
                'github-light',
                'github-dark',
                'monokai',
                'dracula',
                'solarized-light',
                'solarized-dark',
                'nord',
                'one-dark-pro',
            ],
            langs: [
                'javascript', 'typescript', 'python', 'java', 'go', 'rust',
                'c', 'cpp', 'csharp', 'ruby', 'php', 'swift', 'kotlin',
                'html', 'css', 'json', 'yaml', 'markdown', 'sql',
                'bash', 'shell', 'powershell', 'dockerfile',
                'xml', 'graphql', 'jsx', 'tsx', 'vue', 'svelte',
            ],
        });
    }
    return highlighterPromise;
}

/**
 * Extract text content from a HAST node
 */
function getTextContent(node: Element | Text): string {
    if (node.type === 'text') {
        return node.value;
    }
    if (node.type === 'element') {
        return node.children.map((child: Element['children'][number]) => {
            if (child.type === 'text') return child.value;
            if (child.type === 'element') return getTextContent(child);
            return '';
        }).join('');
    }
    return '';
}

/**
 * Detect language from code block class
 */
function detectLanguage(node: Element): string | null {
    const className = node.properties?.className;
    if (Array.isArray(className)) {
        for (const cls of className) {
            if (typeof cls === 'string' && cls.startsWith('language-')) {
                return cls.replace('language-', '');
            }
        }
    }
    return null;
}

/**
 * Check if a language is a diagram/special language
 */
function isSpecialLanguage(lang: string): boolean {
    return ['mermaid', 'latex', 'math', 'katex'].includes(lang.toLowerCase());
}

/**
 * Create line numbers HTML
 */
function createLineNumbers(lineCount: number): string {
    const numbers = Array.from({ length: lineCount }, (_, i) => i + 1);
    return numbers
        .map(n => `<span style="display: block; color: #6e7681; text-align: right; user-select: none;">${n}</span>`)
        .join('');
}

/**
 * Highlight a code block element
 */
async function highlightCodeBlock(
    preNode: Element,
    codeTheme: CodeTheme,
    toggles: FeatureToggles,
    context: ConversionContext
): Promise<Element> {
    const codeNode = preNode.children.find(
        (child): child is Element => child.type === 'element' && child.tagName === 'code'
    );

    if (!codeNode) {
        return preNode;
    }

    const code = getTextContent(codeNode);
    const lang = detectLanguage(codeNode);

    // Handle special languages (mermaid, latex, etc.)
    if (lang && isSpecialLanguage(lang)) {
        context.warnings.push({
            type: 'degraded',
            feature: `${lang} diagram/formula`,
            message: `${lang} block kept as code - convert to image manually`,
            recommendation: `Use a ${lang} renderer to generate an image, then embed it in the article.`,
        });

        // Return as plain code block with warning comment
        return {
            type: 'element',
            tagName: 'pre',
            properties: {
                style: `background-color: ${codeTheme.background}; color: ${codeTheme.foreground}; padding: 16px; border-radius: 6px; overflow: auto; font-family: "SF Mono", Consolas, monospace; font-size: 14px;`,
            },
            children: [
                {
                    type: 'element',
                    tagName: 'code',
                    properties: {},
                    children: [{ type: 'text', value: code }],
                },
            ],
        };
    }

    try {
        const highlighter = await getHighlighter();
        const validLang = lang && highlighter.getLoadedLanguages().includes(lang) ? lang : 'text';

        // Generate highlighted HTML
        const highlighted = highlighter.codeToHtml(code, {
            lang: validLang,
            theme: codeTheme.shikiTheme as BundledTheme,
        });

        // Parse the highlighted HTML to extract the content
        // Shiki returns <pre><code>...</code></pre>, we need to extract inline styles
        const bgMatch = highlighted.match(/background-color:\s*([^;"]+)/);
        const background = bgMatch ? bgMatch[1] : codeTheme.background;

        // Build the styled pre element
        const lineCount = code.split('\n').length;
        const baseStyle = `background-color: ${background}; padding: 16px; border-radius: 6px; overflow: auto; margin: 16px 0;`;
        const wrapStyle = toggles.softWrapCode ? 'white-space: pre-wrap; word-break: break-word;' : 'white-space: pre;';

        const children: ElementContent[] = [];

        // Add language label if enabled
        if (toggles.showLanguageLabel && lang) {
            children.push({
                type: 'element',
                tagName: 'div',
                properties: {
                    style: 'color: #8b949e; font-size: 12px; margin-bottom: 8px; font-family: sans-serif;',
                },
                children: [{ type: 'text', value: lang }],
            });
        }

        // For line numbers, we need a table layout
        if (toggles.showLineNumbers) {
            children.push({
                type: 'element',
                tagName: 'div',
                properties: {
                    style: 'display: flex;',
                },
                children: [
                    {
                        type: 'element',
                        tagName: 'div',
                        properties: {
                            style: 'padding-right: 16px; border-right: 1px solid #444; margin-right: 16px; font-family: "SF Mono", Consolas, monospace; font-size: 14px; line-height: 1.5;',
                        },
                        children: [{ type: 'raw', value: createLineNumbers(lineCount) } as ElementContent],
                    },
                    {
                        type: 'element',
                        tagName: 'code',
                        properties: {
                            style: `font-family: "SF Mono", Consolas, monospace; font-size: 14px; line-height: 1.5; ${wrapStyle}`,
                        },
                        children: [{ type: 'raw', value: highlighted.replace(/<\/?pre[^>]*>/g, '').replace(/<\/?code[^>]*>/g, '') } as ElementContent],
                    },
                ],
            });
        } else {
            // Simple code block without line numbers
            children.push({
                type: 'element',
                tagName: 'code',
                properties: {
                    style: `font-family: "SF Mono", Consolas, monospace; font-size: 14px; line-height: 1.5; ${wrapStyle} display: block;`,
                },
                children: [{ type: 'raw', value: highlighted.replace(/<\/?pre[^>]*>/g, '').replace(/<\/?code[^>]*>/g, '') } as ElementContent],
            });
        }

        return {
            type: 'element',
            tagName: 'pre',
            properties: {
                style: baseStyle,
            },
            children,
        };
    } catch (error) {
        // Fallback to plain code if highlighting fails
        context.warnings.push({
            type: 'warning',
            feature: 'code highlighting',
            message: `Failed to highlight ${lang || 'unknown'} code: ${error}`,
            recommendation: 'Code block rendered without syntax highlighting.',
        });

        return {
            type: 'element',
            tagName: 'pre',
            properties: {
                style: `background-color: ${codeTheme.background}; color: ${codeTheme.foreground}; padding: 16px; border-radius: 6px; overflow: auto; font-family: "SF Mono", Consolas, monospace; font-size: 14px;`,
            },
            children: [
                {
                    type: 'element',
                    tagName: 'code',
                    properties: {},
                    children: [{ type: 'text', value: code }],
                },
            ],
        };
    }
}

/**
 * Process all code blocks in the tree
 */
export async function processCodeBlocks(
    tree: Root,
    codeTheme: CodeTheme,
    toggles: FeatureToggles,
    context: ConversionContext
): Promise<Root> {
    const processNode = async (node: RootContent): Promise<RootContent> => {
        if (node.type !== 'element') return node;

        // Handle pre > code blocks
        if (node.tagName === 'pre') {
            return await highlightCodeBlock(node, codeTheme, toggles, context);
        }

        // Recursively process children
        const children: ElementContent[] = [];
        for (const child of node.children as ElementContent[]) {
            if (child.type === 'element' || child.type === 'text') {
                children.push(await processNode(child as RootContent) as ElementContent);
            } else {
                children.push(child);
            }
        }

        return { ...node, children } as RootContent;
    };

    const children: RootContent[] = [];
    for (const child of tree.children) {
        children.push(await processNode(child));
    }

    return { type: 'root', children };
}
