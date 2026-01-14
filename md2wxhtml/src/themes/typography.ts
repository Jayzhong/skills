/**
 * Typography theme presets for WeChat-compatible HTML
 */

import type { TypographyTheme, CSSProperties } from './types.js';

// Font size scale by preset
export const fontSizeScales = {
    s: { body: 14, h1: 24, h2: 20, h3: 17, code: 13 },
    m: { body: 15, h1: 26, h2: 22, h3: 18, code: 14 },
    l: { body: 16, h1: 28, h2: 24, h3: 20, code: 15 },
} as const;

// Line height by preset
export const lineHeightScales = {
    compact: 1.6,
    standard: 1.8,
    relaxed: 2.0,
} as const;

// Border radius by preset
export const radiusScales = {
    off: '0',
    low: '4px',
    medium: '8px',
} as const;

// Content width by preset
export const widthScales = {
    standard: '100%',
    narrow: '92%',
} as const;

// Base styles shared across themes
const baseStyles = {
    img: {
        'max-width': '100%',
        height: 'auto',
        display: 'block',
        margin: '16px auto',
    },
    table: {
        'border-collapse': 'collapse',
        width: '100%',
        'margin-top': '16px',
        'margin-bottom': '16px',
    },
    th: {
        border: '1px solid #ddd',
        padding: '8px 12px',
        'text-align': 'left',
        'font-weight': 'bold',
        'background-color': '#f5f5f5',
    },
    td: {
        border: '1px solid #ddd',
        padding: '8px 12px',
        'text-align': 'left',
    },
    hr: {
        border: 'none',
        'border-top': '1px solid #ddd',
        'margin-top': '24px',
        'margin-bottom': '24px',
    },
};

export const typographyThemes: Record<string, TypographyTheme> = {
    classic: {
        name: 'Classic',
        description: 'Traditional serif with generous spacing, elegant blockquote borders',
        styles: {
            body: {
                'font-family': 'Georgia, "Noto Serif SC", "Source Han Serif SC", serif',
                color: '#333',
                'line-height': 1.8,
            },
            h1: {
                'font-size': '26px',
                'font-weight': 'bold',
                color: '#1a1a1a',
                'margin-top': '32px',
                'margin-bottom': '16px',
                'border-bottom': '2px solid #333',
                'padding-bottom': '8px',
            },
            h2: {
                'font-size': '22px',
                'font-weight': 'bold',
                color: '#1a1a1a',
                'margin-top': '28px',
                'margin-bottom': '14px',
            },
            h3: {
                'font-size': '18px',
                'font-weight': 'bold',
                color: '#333',
                'margin-top': '24px',
                'margin-bottom': '12px',
            },
            p: {
                'margin-top': '0',
                'margin-bottom': '16px',
                'text-align': 'justify',
            },
            blockquote: {
                'border-left': '4px solid #8b7355',
                'padding-left': '16px',
                'margin-left': '0',
                'margin-right': '0',
                color: '#555',
                'font-style': 'italic',
                'background-color': '#faf8f5',
                padding: '12px 16px',
            },
            a: {
                color: '#8b4513',
                'text-decoration': 'underline',
            },
            ul: {
                'padding-left': '24px',
                'margin-bottom': '16px',
            },
            ol: {
                'padding-left': '24px',
                'margin-bottom': '16px',
            },
            li: {
                'margin-bottom': '8px',
            },
            strong: {
                'font-weight': 'bold',
                color: '#1a1a1a',
            },
            em: {
                'font-style': 'italic',
            },
            inlineCode: {
                'font-family': '"SF Mono", "Fira Code", Menlo, monospace',
                'background-color': '#f5f2eb',
                padding: '2px 6px',
                'border-radius': '3px',
                'font-size': '0.9em',
            },
            pre: {
                'background-color': '#f8f5f0',
                padding: '16px',
                'border-radius': '4px',
                overflow: 'auto',
                'margin-bottom': '16px',
            },
            ...baseStyles,
        },
    },

    modern: {
        name: 'Modern',
        description: 'Clean sans-serif with tight spacing, minimal decoration',
        styles: {
            body: {
                'font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Microsoft YaHei", sans-serif',
                color: '#24292e',
                'line-height': 1.7,
            },
            h1: {
                'font-size': '28px',
                'font-weight': '600',
                color: '#1b1f23',
                'margin-top': '28px',
                'margin-bottom': '14px',
            },
            h2: {
                'font-size': '22px',
                'font-weight': '600',
                color: '#1b1f23',
                'margin-top': '24px',
                'margin-bottom': '12px',
                'border-bottom': '1px solid #eaecef',
                'padding-bottom': '6px',
            },
            h3: {
                'font-size': '18px',
                'font-weight': '600',
                color: '#24292e',
                'margin-top': '20px',
                'margin-bottom': '10px',
            },
            p: {
                'margin-top': '0',
                'margin-bottom': '14px',
            },
            blockquote: {
                'border-left': '4px solid #dfe2e5',
                'padding-left': '16px',
                'margin-left': '0',
                'margin-right': '0',
                color: '#6a737d',
            },
            a: {
                color: '#0366d6',
                'text-decoration': 'none',
            },
            ul: {
                'padding-left': '24px',
                'margin-bottom': '14px',
            },
            ol: {
                'padding-left': '24px',
                'margin-bottom': '14px',
            },
            li: {
                'margin-bottom': '6px',
            },
            strong: {
                'font-weight': '600',
            },
            em: {
                'font-style': 'italic',
            },
            inlineCode: {
                'font-family': '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
                'background-color': '#f6f8fa',
                padding: '2px 6px',
                'border-radius': '3px',
                'font-size': '85%',
            },
            pre: {
                'background-color': '#f6f8fa',
                padding: '16px',
                'border-radius': '6px',
                overflow: 'auto',
                'margin-bottom': '16px',
            },
            ...baseStyles,
        },
    },

    minimal: {
        name: 'Minimal',
        description: 'Ultra-clean with maximum whitespace',
        styles: {
            body: {
                'font-family': 'system-ui, -apple-system, sans-serif',
                color: '#444',
                'line-height': 1.9,
            },
            h1: {
                'font-size': '24px',
                'font-weight': '300',
                color: '#222',
                'margin-top': '40px',
                'margin-bottom': '20px',
                'letter-spacing': '-0.5px',
            },
            h2: {
                'font-size': '20px',
                'font-weight': '400',
                color: '#333',
                'margin-top': '32px',
                'margin-bottom': '16px',
            },
            h3: {
                'font-size': '17px',
                'font-weight': '500',
                color: '#444',
                'margin-top': '24px',
                'margin-bottom': '12px',
            },
            p: {
                'margin-top': '0',
                'margin-bottom': '20px',
            },
            blockquote: {
                'border-left': '2px solid #ddd',
                'padding-left': '20px',
                'margin-left': '0',
                'margin-right': '0',
                color: '#666',
            },
            a: {
                color: '#0070f3',
                'text-decoration': 'none',
                'border-bottom': '1px solid #0070f3',
            },
            ul: {
                'padding-left': '20px',
                'margin-bottom': '20px',
                'list-style-type': 'disc',
            },
            ol: {
                'padding-left': '20px',
                'margin-bottom': '20px',
            },
            li: {
                'margin-bottom': '10px',
            },
            strong: {
                'font-weight': '600',
            },
            em: {
                'font-style': 'italic',
            },
            inlineCode: {
                'font-family': 'Menlo, Monaco, monospace',
                'background-color': '#fafafa',
                padding: '3px 6px',
                'border-radius': '2px',
                'font-size': '0.9em',
                border: '1px solid #eee',
            },
            pre: {
                'background-color': '#fafafa',
                padding: '20px',
                'border-radius': '2px',
                overflow: 'auto',
                'margin-bottom': '20px',
                border: '1px solid #eee',
            },
            ...baseStyles,
        },
    },

    warm: {
        name: 'Warm',
        description: 'Warm colors with soft cream backgrounds',
        styles: {
            body: {
                'font-family': 'Georgia, "Noto Serif SC", serif',
                color: '#5d4e37',
                'line-height': 1.8,
                'background-color': '#fefcf8',
            },
            h1: {
                'font-size': '26px',
                'font-weight': 'bold',
                color: '#3d3426',
                'margin-top': '32px',
                'margin-bottom': '16px',
            },
            h2: {
                'font-size': '22px',
                'font-weight': 'bold',
                color: '#4a3f2f',
                'margin-top': '28px',
                'margin-bottom': '14px',
                'border-bottom': '1px solid #e5d9c3',
                'padding-bottom': '8px',
            },
            h3: {
                'font-size': '18px',
                'font-weight': 'bold',
                color: '#5d4e37',
                'margin-top': '24px',
                'margin-bottom': '12px',
            },
            p: {
                'margin-top': '0',
                'margin-bottom': '16px',
            },
            blockquote: {
                'border-left': '4px solid #d4a574',
                'padding-left': '16px',
                'margin-left': '0',
                'margin-right': '0',
                color: '#7a6b55',
                'background-color': '#fff9f0',
                padding: '12px 16px',
            },
            a: {
                color: '#b8860b',
                'text-decoration': 'underline',
            },
            ul: {
                'padding-left': '24px',
                'margin-bottom': '16px',
            },
            ol: {
                'padding-left': '24px',
                'margin-bottom': '16px',
            },
            li: {
                'margin-bottom': '8px',
            },
            strong: {
                'font-weight': 'bold',
                color: '#3d3426',
            },
            em: {
                'font-style': 'italic',
            },
            inlineCode: {
                'font-family': 'Menlo, monospace',
                'background-color': '#f5efe6',
                padding: '2px 6px',
                'border-radius': '3px',
                'font-size': '0.9em',
                color: '#8b6914',
            },
            pre: {
                'background-color': '#faf6ef',
                padding: '16px',
                'border-radius': '4px',
                overflow: 'auto',
                'margin-bottom': '16px',
                border: '1px solid #e5d9c3',
            },
            ...baseStyles,
        },
    },

    serif: {
        name: 'Serif',
        description: 'Traditional book-like typography with serif fonts',
        styles: {
            body: {
                'font-family': '"Noto Serif SC", "Source Han Serif SC", Georgia, serif',
                color: '#2c2c2c',
                'line-height': 1.85,
            },
            h1: {
                'font-size': '28px',
                'font-weight': 'bold',
                color: '#1a1a1a',
                'margin-top': '36px',
                'margin-bottom': '18px',
                'text-align': 'center',
            },
            h2: {
                'font-size': '22px',
                'font-weight': 'bold',
                color: '#1a1a1a',
                'margin-top': '30px',
                'margin-bottom': '15px',
            },
            h3: {
                'font-size': '18px',
                'font-weight': 'bold',
                color: '#2c2c2c',
                'margin-top': '24px',
                'margin-bottom': '12px',
            },
            p: {
                'margin-top': '0',
                'margin-bottom': '18px',
                'text-indent': '2em',
            },
            blockquote: {
                'border-left': '3px solid #666',
                'padding-left': '20px',
                'margin-left': '0',
                'margin-right': '0',
                color: '#555',
                'font-style': 'italic',
            },
            a: {
                color: '#4a4a8a',
                'text-decoration': 'underline',
            },
            ul: {
                'padding-left': '28px',
                'margin-bottom': '18px',
            },
            ol: {
                'padding-left': '28px',
                'margin-bottom': '18px',
            },
            li: {
                'margin-bottom': '8px',
            },
            strong: {
                'font-weight': 'bold',
            },
            em: {
                'font-style': 'italic',
            },
            inlineCode: {
                'font-family': '"Courier New", Courier, monospace',
                'background-color': '#f0f0f0',
                padding: '2px 5px',
                'border-radius': '2px',
                'font-size': '0.88em',
            },
            pre: {
                'background-color': '#f5f5f5',
                padding: '18px',
                'border-radius': '3px',
                overflow: 'auto',
                'margin-bottom': '18px',
            },
            ...baseStyles,
        },
    },

    book: {
        name: 'Book',
        description: 'Chapter-style headings with literary aesthetic',
        styles: {
            body: {
                'font-family': 'Charter, "Bitstream Charter", Georgia, serif',
                color: '#333',
                'line-height': 1.9,
            },
            h1: {
                'font-size': '32px',
                'font-weight': 'normal',
                color: '#1a1a1a',
                'margin-top': '48px',
                'margin-bottom': '24px',
                'text-align': 'center',
                'font-variant': 'small-caps',
                'letter-spacing': '2px',
            },
            h2: {
                'font-size': '20px',
                'font-weight': 'bold',
                color: '#333',
                'margin-top': '36px',
                'margin-bottom': '18px',
                'border-bottom': '1px solid #ccc',
                'padding-bottom': '8px',
            },
            h3: {
                'font-size': '17px',
                'font-weight': 'bold',
                color: '#444',
                'margin-top': '28px',
                'margin-bottom': '14px',
            },
            p: {
                'margin-top': '0',
                'margin-bottom': '20px',
                'text-indent': '2em',
            },
            blockquote: {
                'margin-left': '40px',
                'margin-right': '40px',
                color: '#555',
                'font-style': 'italic',
                'border-left': 'none',
                'padding-left': '0',
            },
            a: {
                color: '#2f5496',
                'text-decoration': 'none',
                'border-bottom': '1px dotted #2f5496',
            },
            ul: {
                'padding-left': '32px',
                'margin-bottom': '20px',
            },
            ol: {
                'padding-left': '32px',
                'margin-bottom': '20px',
            },
            li: {
                'margin-bottom': '10px',
            },
            strong: {
                'font-weight': 'bold',
            },
            em: {
                'font-style': 'italic',
            },
            inlineCode: {
                'font-family': '"Courier Prime", Courier, monospace',
                'background-color': '#f8f8f8',
                padding: '2px 5px',
                'border-radius': '2px',
                'font-size': '0.85em',
            },
            pre: {
                'background-color': '#f8f8f8',
                padding: '20px',
                'border-radius': '0',
                overflow: 'auto',
                'margin-bottom': '20px',
                'border-left': '3px solid #ddd',
            },
            ...baseStyles,
        },
    },

    tech: {
        name: 'Tech',
        description: 'Monospace accents with code-like aesthetic',
        styles: {
            body: {
                'font-family': '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
                color: '#1a1a2e',
                'line-height': 1.7,
            },
            h1: {
                'font-size': '26px',
                'font-weight': '700',
                color: '#0f0f23',
                'margin-top': '28px',
                'margin-bottom': '14px',
                'font-family': '"SF Mono", "Fira Code", monospace',
            },
            h2: {
                'font-size': '22px',
                'font-weight': '600',
                color: '#16213e',
                'margin-top': '24px',
                'margin-bottom': '12px',
                'font-family': '"SF Mono", "Fira Code", monospace',
            },
            h3: {
                'font-size': '18px',
                'font-weight': '600',
                color: '#1a1a2e',
                'margin-top': '20px',
                'margin-bottom': '10px',
            },
            p: {
                'margin-top': '0',
                'margin-bottom': '14px',
            },
            blockquote: {
                'border-left': '4px solid #4a69bd',
                'padding-left': '16px',
                'margin-left': '0',
                'margin-right': '0',
                color: '#2c3e50',
                'background-color': '#f0f4ff',
                padding: '12px 16px',
            },
            a: {
                color: '#4a69bd',
                'text-decoration': 'none',
            },
            ul: {
                'padding-left': '24px',
                'margin-bottom': '14px',
            },
            ol: {
                'padding-left': '24px',
                'margin-bottom': '14px',
            },
            li: {
                'margin-bottom': '6px',
            },
            strong: {
                'font-weight': '600',
                color: '#0f0f23',
            },
            em: {
                'font-style': 'italic',
            },
            inlineCode: {
                'font-family': '"SF Mono", "Fira Code", Consolas, monospace',
                'background-color': '#e8f4f8',
                padding: '3px 7px',
                'border-radius': '4px',
                'font-size': '0.88em',
                color: '#2980b9',
            },
            pre: {
                'background-color': '#1e1e2e',
                padding: '16px',
                'border-radius': '8px',
                overflow: 'auto',
                'margin-bottom': '16px',
                color: '#cdd6f4',
            },
            ...baseStyles,
        },
    },

    dark: {
        name: 'Dark',
        description: 'Dark mode with light text on dark backgrounds',
        styles: {
            body: {
                'font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", sans-serif',
                color: '#e6e6e6',
                'background-color': '#1a1a1a',
                'line-height': 1.75,
            },
            h1: {
                'font-size': '28px',
                'font-weight': '600',
                color: '#ffffff',
                'margin-top': '28px',
                'margin-bottom': '14px',
            },
            h2: {
                'font-size': '22px',
                'font-weight': '600',
                color: '#f0f0f0',
                'margin-top': '24px',
                'margin-bottom': '12px',
                'border-bottom': '1px solid #333',
                'padding-bottom': '6px',
            },
            h3: {
                'font-size': '18px',
                'font-weight': '600',
                color: '#e6e6e6',
                'margin-top': '20px',
                'margin-bottom': '10px',
            },
            p: {
                'margin-top': '0',
                'margin-bottom': '14px',
            },
            blockquote: {
                'border-left': '4px solid #555',
                'padding-left': '16px',
                'margin-left': '0',
                'margin-right': '0',
                color: '#aaa',
                'background-color': '#252525',
                padding: '12px 16px',
            },
            a: {
                color: '#58a6ff',
                'text-decoration': 'none',
            },
            ul: {
                'padding-left': '24px',
                'margin-bottom': '14px',
            },
            ol: {
                'padding-left': '24px',
                'margin-bottom': '14px',
            },
            li: {
                'margin-bottom': '6px',
            },
            strong: {
                'font-weight': '600',
                color: '#ffffff',
            },
            em: {
                'font-style': 'italic',
            },
            inlineCode: {
                'font-family': '"SFMono-Regular", Consolas, monospace',
                'background-color': '#2d2d2d',
                padding: '2px 6px',
                'border-radius': '4px',
                'font-size': '85%',
                color: '#79c0ff',
            },
            pre: {
                'background-color': '#0d1117',
                padding: '16px',
                'border-radius': '6px',
                overflow: 'auto',
                'margin-bottom': '16px',
            },
            img: {
                'max-width': '100%',
                height: 'auto',
                display: 'block',
                margin: '16px auto',
            },
            table: {
                'border-collapse': 'collapse',
                width: '100%',
                'margin-top': '16px',
                'margin-bottom': '16px',
            },
            th: {
                border: '1px solid #444',
                padding: '8px 12px',
                'text-align': 'left',
                'font-weight': 'bold',
                'background-color': '#2d2d2d',
            },
            td: {
                border: '1px solid #444',
                padding: '8px 12px',
                'text-align': 'left',
            },
            hr: {
                border: 'none',
                'border-top': '1px solid #444',
                'margin-top': '24px',
                'margin-bottom': '24px',
            },
        },
    },
};

/**
 * Get a typography theme by name
 */
export function getTypographyTheme(name: string): TypographyTheme | undefined {
    return typographyThemes[name.toLowerCase()];
}

/**
 * Get all available typography theme names
 */
export function getTypographyThemeNames(): string[] {
    return Object.keys(typographyThemes);
}

/**
 * Get typography themes as choices for CLI
 */
export function getTypographyThemeChoices(): Array<{ name: string; value: string; description: string }> {
    return Object.entries(typographyThemes).map(([key, theme]) => ({
        name: `${theme.name} - ${theme.description}`,
        value: key,
        description: theme.description,
    }));
}
