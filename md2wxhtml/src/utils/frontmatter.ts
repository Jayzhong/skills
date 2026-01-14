/**
 * Front matter parsing utilities
 */

import YAML from 'yaml';
import type { FrontMatter } from '../themes/types.js';

/**
 * Extract front matter from Markdown content
 */
export function extractFrontMatter(markdown: string): {
    frontMatter: FrontMatter | null;
    content: string;
} {
    const fmRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
    const match = markdown.match(fmRegex);

    if (!match) {
        return { frontMatter: null, content: markdown };
    }

    try {
        const frontMatter = YAML.parse(match[1]) as FrontMatter;
        const content = markdown.slice(match[0].length);
        return { frontMatter, content };
    } catch {
        // Invalid YAML, treat as no front matter
        return { frontMatter: null, content: markdown };
    }
}

/**
 * Generate metadata section HTML from front matter
 */
export function frontMatterToHtml(frontMatter: FrontMatter): string {
    const parts: string[] = [];

    if (frontMatter.title) {
        parts.push(`<h1 style="margin-bottom: 16px;">${escapeHtml(frontMatter.title)}</h1>`);
    }

    const meta: string[] = [];
    if (frontMatter.author) {
        meta.push(`作者: ${escapeHtml(frontMatter.author)}`);
    }
    if (frontMatter.date) {
        meta.push(`日期: ${escapeHtml(String(frontMatter.date))}`);
    }

    if (meta.length > 0) {
        parts.push(`<p style="color: #666; font-size: 14px; margin-bottom: 20px;">${meta.join(' | ')}</p>`);
    }

    if (frontMatter.summary) {
        parts.push(`<blockquote style="border-left: 4px solid #ddd; padding-left: 16px; color: #555; font-style: italic; margin-bottom: 24px;">${escapeHtml(frontMatter.summary)}</blockquote>`);
    }

    return parts.join('\n');
}

/**
 * Escape HTML special characters
 */
function escapeHtml(text: string): string {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}
