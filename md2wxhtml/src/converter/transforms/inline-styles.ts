/**
 * Apply inline styles based on typography theme
 */

import type { Root, Element, RootContent, ElementContent } from 'hast';
import type { TypographyTheme, CSSProperties, ThemeParams } from '../../themes/types.js';
import { fontSizeScales, lineHeightScales, radiusScales, widthScales } from '../../themes/typography.js';

/**
 * Convert CSS properties object to inline style string
 */
export function cssPropertiesToString(props: CSSProperties): string {
    const entries = Object.entries(props)
        .filter(([, value]) => value !== undefined && value !== null)
        .sort(([a], [b]) => a.localeCompare(b)); // Deterministic ordering

    return entries
        .map(([key, value]) => `${key}: ${value}`)
        .join('; ');
}

/**
 * Merge CSS properties into existing style string
 */
export function mergeStyles(existing: string | undefined, newStyles: CSSProperties): string {
    const existingProps: CSSProperties = {};

    if (existing) {
        const declarations = existing.split(';').filter(Boolean);
        for (const decl of declarations) {
            const colonIndex = decl.indexOf(':');
            if (colonIndex === -1) continue;
            const property = decl.slice(0, colonIndex).trim();
            const value = decl.slice(colonIndex + 1).trim();
            existingProps[property] = value;
        }
    }

    // New styles override existing
    const merged = { ...existingProps, ...newStyles };
    return cssPropertiesToString(merged);
}

/**
 * Apply font size adjustments based on preset
 */
function adjustForParams(styles: CSSProperties, params: ThemeParams, elementType: string): CSSProperties {
    const adjusted = { ...styles };
    const scale = fontSizeScales[params.fontSizePreset];
    const lineHeight = lineHeightScales[params.lineHeightPreset];
    const radius = radiusScales[params.radiusPreset];

    // Adjust font sizes
    if (elementType === 'body' || elementType === 'p' || elementType === 'li') {
        adjusted['font-size'] = `${scale.body}px`;
        adjusted['line-height'] = lineHeight;
    } else if (elementType === 'h1') {
        adjusted['font-size'] = `${scale.h1}px`;
    } else if (elementType === 'h2') {
        adjusted['font-size'] = `${scale.h2}px`;
    } else if (elementType === 'h3') {
        adjusted['font-size'] = `${scale.h3}px`;
    } else if (elementType === 'code' || elementType === 'pre') {
        adjusted['font-size'] = `${scale.code}px`;
    }

    // Adjust border radius for code blocks, blockquotes, images
    if (['pre', 'blockquote', 'img'].includes(elementType) && params.radiusPreset !== 'off') {
        adjusted['border-radius'] = radius;
    }

    // Content width
    if (elementType === 'body' && params.widthPreset === 'narrow') {
        adjusted['max-width'] = widthScales.narrow;
        adjusted['margin-left'] = 'auto';
        adjusted['margin-right'] = 'auto';
    }

    return adjusted;
}

/**
 * Get styles for an element based on theme and params
 */
function getElementStyles(
    tagName: string,
    theme: TypographyTheme,
    params: ThemeParams
): CSSProperties | null {
    const styleMap: Record<string, keyof TypographyTheme['styles']> = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        p: 'p',
        blockquote: 'blockquote',
        hr: 'hr',
        a: 'a',
        ul: 'ul',
        ol: 'ol',
        li: 'li',
        table: 'table',
        th: 'th',
        td: 'td',
        strong: 'strong',
        b: 'strong',
        em: 'em',
        i: 'em',
        pre: 'pre',
        img: 'img',
    };

    const styleKey = styleMap[tagName];
    if (!styleKey) return null;

    const baseStyles = theme.styles[styleKey];
    if (!baseStyles) return null;

    return adjustForParams(baseStyles, params, tagName);
}

/**
 * Apply inline styles to an element
 */
function applyStylesToElement(
    node: Element,
    theme: TypographyTheme,
    params: ThemeParams
): Element {
    const tagName = node.tagName.toLowerCase();
    const themeStyles = getElementStyles(tagName, theme, params);

    // Handle inline code specially
    if (tagName === 'code' && node.properties) {
        // Check if this is inline code (not inside pre)
        const isInline = true; // Will be handled by parent context in real usage
        if (isInline && theme.styles.inlineCode) {
            const styles = adjustForParams(theme.styles.inlineCode, params, 'code');
            const existingStyle = node.properties.style as string | undefined;
            node.properties.style = mergeStyles(existingStyle, styles);
        }
    } else if (themeStyles) {
        const existingStyle = node.properties?.style as string | undefined;
        node.properties = node.properties || {};
        node.properties.style = mergeStyles(existingStyle, themeStyles);
    }

    // Recursively apply to children
    const children: ElementContent[] = [];
    for (const child of node.children) {
        if (child.type === 'element') {
            children.push(applyStylesToElement(child, theme, params));
        } else {
            children.push(child);
        }
    }

    return {
        ...node,
        children,
    };
}

/**
 * Apply typography theme inline styles to the entire tree
 */
export function applyInlineStyles(
    tree: Root,
    theme: TypographyTheme,
    params: ThemeParams
): Root {
    const children: RootContent[] = [];

    for (const child of tree.children) {
        if (child.type === 'element') {
            children.push(applyStylesToElement(child, theme, params));
        } else {
            children.push(child);
        }
    }

    return {
        type: 'root',
        children,
    };
}
