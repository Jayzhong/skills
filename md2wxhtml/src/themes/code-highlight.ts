/**
 * Code highlight theme presets using Shiki themes
 */

import type { CodeTheme } from './types.js';

export const codeThemes: Record<string, CodeTheme> = {
    'github-light': {
        name: 'GitHub Light',
        description: 'GitHub default light theme',
        background: '#ffffff',
        foreground: '#24292e',
        shikiTheme: 'github-light',
    },
    'github-dark': {
        name: 'GitHub Dark',
        description: 'GitHub dark mode theme',
        background: '#0d1117',
        foreground: '#c9d1d9',
        shikiTheme: 'github-dark',
    },
    monokai: {
        name: 'Monokai',
        description: 'Classic Sublime Text dark theme',
        background: '#272822',
        foreground: '#f8f8f2',
        shikiTheme: 'monokai',
    },
    dracula: {
        name: 'Dracula',
        description: 'Popular dark theme with vibrant colors',
        background: '#282a36',
        foreground: '#f8f8f2',
        shikiTheme: 'dracula',
    },
    'solarized-light': {
        name: 'Solarized Light',
        description: 'Ethan Schoonover\'s precision light theme',
        background: '#fdf6e3',
        foreground: '#657b83',
        shikiTheme: 'solarized-light',
    },
    'solarized-dark': {
        name: 'Solarized Dark',
        description: 'Ethan Schoonover\'s precision dark theme',
        background: '#002b36',
        foreground: '#839496',
        shikiTheme: 'solarized-dark',
    },
    nord: {
        name: 'Nord',
        description: 'Arctic, north-bluish color palette',
        background: '#2e3440',
        foreground: '#d8dee9',
        shikiTheme: 'nord',
    },
    'one-dark': {
        name: 'One Dark',
        description: 'Atom editor\'s iconic dark theme',
        background: '#282c34',
        foreground: '#abb2bf',
        shikiTheme: 'one-dark-pro',
    },
};

/**
 * Get a code theme by name
 */
export function getCodeTheme(name: string): CodeTheme | undefined {
    return codeThemes[name.toLowerCase()];
}

/**
 * Get all available code theme names
 */
export function getCodeThemeNames(): string[] {
    return Object.keys(codeThemes);
}

/**
 * Get code themes as choices for CLI
 */
export function getCodeThemeChoices(): Array<{ name: string; value: string; description: string }> {
    return Object.entries(codeThemes).map(([key, theme]) => ({
        name: `${theme.name} - ${theme.description}`,
        value: key,
        description: theme.description,
    }));
}
