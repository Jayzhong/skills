/**
 * HTML output generator
 */

import type { TypographyTheme, ThemeParams } from '../themes/types.js';

/**
 * Wrap HTML content with body styles
 */
export function wrapWithBodyStyles(
    html: string,
    theme: TypographyTheme,
    params: ThemeParams
): string {
    const bodyStyles = theme.styles.body;
    const styleEntries = Object.entries(bodyStyles)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([key, value]) => `${key}: ${value}`)
        .join('; ');

    // WeChat strips <html>, <head>, <body> so we wrap in a section
    return `<section style="${styleEntries}">\n${html}\n</section>`;
}

/**
 * Format HTML for readability (optional)
 */
export function formatHtml(html: string): string {
    // Basic formatting - add newlines after block elements
    return html
        .replace(/(<\/?(h[1-6]|p|div|section|blockquote|ul|ol|li|pre|table|tr|hr)[^>]*>)/gi, '\n$1')
        .replace(/\n\n+/g, '\n')
        .trim();
}
