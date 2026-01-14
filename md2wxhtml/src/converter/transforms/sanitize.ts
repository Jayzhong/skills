/**
 * WeChat HTML whitelist and sanitization
 */

import type { Root, Element, RootContent, ElementContent, Properties } from 'hast';
import type { ConversionContext } from '../types.js';

// Allowed HTML tags in WeChat
const ALLOWED_TAGS = new Set([
    'p', 'br', 'h1', 'h2', 'h3', 'strong', 'b', 'em', 'i', 'span',
    'blockquote', 'ul', 'ol', 'li', 'pre', 'code', 'img',
    'table', 'thead', 'tbody', 'tr', 'th', 'td', 'hr', 'a',
    'section', 'div', 'sup', 'sub',
]);

// Forbidden tags that must be stripped
const FORBIDDEN_TAGS = new Set([
    'script', 'iframe', 'link', 'style', 'object', 'embed',
    'form', 'input', 'button', 'video', 'audio', 'canvas', 'svg',
    'meta', 'head', 'html', 'body',
]);

// Allowed CSS properties (inline only)
const ALLOWED_CSS_PROPERTIES = new Set([
    'color', 'background-color', 'background', 'font-size', 'font-weight',
    'font-family', 'font-style', 'line-height', 'text-align', 'text-decoration',
    'text-indent', 'letter-spacing', 'word-break', 'white-space', 'overflow-wrap',
    'margin', 'margin-top', 'margin-bottom', 'margin-left', 'margin-right',
    'padding', 'padding-top', 'padding-bottom', 'padding-left', 'padding-right',
    'border', 'border-radius', 'border-left', 'border-top', 'border-bottom', 'border-right',
    'border-collapse', 'border-color', 'border-width', 'border-style',
    'width', 'max-width', 'height', 'min-height',
    'display', 'list-style-type', 'vertical-align',
    'box-sizing', 'overflow',
]);

/**
 * Sanitize a style string to only include allowed CSS properties
 */
export function sanitizeStyle(style: string): string {
    const declarations = style.split(';').filter(Boolean);
    const allowed: string[] = [];

    for (const decl of declarations) {
        const colonIndex = decl.indexOf(':');
        if (colonIndex === -1) continue;

        const property = decl.slice(0, colonIndex).trim().toLowerCase();
        const value = decl.slice(colonIndex + 1).trim();

        if (ALLOWED_CSS_PROPERTIES.has(property)) {
            allowed.push(`${property}: ${value}`);
        }
    }

    return allowed.join('; ');
}

/**
 * Check if a tag is allowed
 */
export function isAllowedTag(tagName: string): boolean {
    return ALLOWED_TAGS.has(tagName.toLowerCase());
}

/**
 * Check if a tag is forbidden
 */
export function isForbiddenTag(tagName: string): boolean {
    return FORBIDDEN_TAGS.has(tagName.toLowerCase());
}

/**
 * Sanitize an element node
 */
function sanitizeElement(node: Element, context: ConversionContext): Element | null {
    const tagName = node.tagName.toLowerCase();

    // Remove forbidden tags entirely
    if (isForbiddenTag(tagName)) {
        context.warnings.push({
            type: 'unsupported',
            feature: `<${tagName}> tag`,
            message: `Forbidden tag <${tagName}> was removed`,
            recommendation: 'This tag is not supported in WeChat and has been stripped.',
        });
        return null;
    }

    // Downgrade h4-h6 to h3
    let finalTagName = tagName;
    if (['h4', 'h5', 'h6'].includes(tagName)) {
        finalTagName = 'h3';
        context.warnings.push({
            type: 'degraded',
            feature: `<${tagName}> heading`,
            message: `<${tagName}> downgraded to <h3>`,
            recommendation: 'WeChat displays best with h1-h3 headings.',
        });
    }

    // For unknown tags, try to preserve content by using span
    if (!isAllowedTag(finalTagName)) {
        context.warnings.push({
            type: 'degraded',
            feature: `<${tagName}> tag`,
            message: `Unknown tag <${tagName}> converted to <span>`,
        });
        finalTagName = 'span';
    }

    // Sanitize attributes
    const properties: Properties = {};

    if (node.properties) {
        // Preserve safe attributes
        for (const [key, value] of Object.entries(node.properties)) {
            const lowerKey = key.toLowerCase();

            // Allow these specific attributes
            if (lowerKey === 'href' && finalTagName === 'a') {
                properties.href = value;
            } else if (lowerKey === 'src' && finalTagName === 'img') {
                properties.src = value;
            } else if (lowerKey === 'alt' && finalTagName === 'img') {
                properties.alt = value;
            } else if (lowerKey === 'style') {
                // Sanitize style
                const sanitized = sanitizeStyle(String(value));
                if (sanitized) {
                    properties.style = sanitized;
                }
            } else if (lowerKey === 'class' || lowerKey === 'classname') {
                // Strip classes - WeChat doesn't support external CSS
                continue;
            }
        }
    }

    // Recursively sanitize children
    const children: ElementContent[] = [];
    for (const child of node.children) {
        if (child.type === 'element') {
            const sanitized = sanitizeElement(child, context);
            if (sanitized) {
                children.push(sanitized);
            }
        } else if (child.type === 'text') {
            children.push(child);
        }
    }

    return {
        type: 'element',
        tagName: finalTagName,
        properties,
        children,
    };
}

/**
 * Sanitize the entire HAST tree for WeChat compatibility
 */
export function sanitize(tree: Root, context: ConversionContext): Root {
    const children: RootContent[] = [];

    for (const child of tree.children) {
        if (child.type === 'element') {
            const sanitized = sanitizeElement(child, context);
            if (sanitized) {
                children.push(sanitized);
            }
        } else if (child.type === 'text') {
            children.push(child);
        }
    }

    return {
        type: 'root',
        children,
    };
}
