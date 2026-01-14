/**
 * Unit tests for theme modules
 */

import { describe, it, expect } from 'vitest';
import {
    getTypographyTheme,
    getTypographyThemeNames,
    getTypographyThemeChoices,
    getCodeTheme,
    getCodeThemeNames,
    getCodeThemeChoices,
    typographyThemes,
    codeThemes,
} from '../../src/themes/index.js';

describe('Typography Themes', () => {
    it('should have at least 8 themes', () => {
        const names = getTypographyThemeNames();
        expect(names.length).toBeGreaterThanOrEqual(8);
    });

    it('should get theme by name', () => {
        const theme = getTypographyTheme('modern');
        expect(theme).toBeDefined();
        expect(theme?.name).toBe('Modern');
    });

    it('should return undefined for unknown theme', () => {
        const theme = getTypographyTheme('nonexistent');
        expect(theme).toBeUndefined();
    });

    it('should be case-insensitive', () => {
        const theme1 = getTypographyTheme('Modern');
        const theme2 = getTypographyTheme('MODERN');
        expect(theme1).toEqual(theme2);
    });

    it('should provide choices with name and value', () => {
        const choices = getTypographyThemeChoices();
        expect(choices.length).toBeGreaterThan(0);
        expect(choices[0]).toHaveProperty('name');
        expect(choices[0]).toHaveProperty('value');
        expect(choices[0]).toHaveProperty('description');
    });

    it('each theme should have required style properties', () => {
        for (const [, theme] of Object.entries(typographyThemes)) {
            expect(theme.styles).toHaveProperty('body');
            expect(theme.styles).toHaveProperty('h1');
            expect(theme.styles).toHaveProperty('h2');
            expect(theme.styles).toHaveProperty('h3');
            expect(theme.styles).toHaveProperty('p');
            expect(theme.styles).toHaveProperty('blockquote');
            expect(theme.styles).toHaveProperty('a');
        }
    });
});

describe('Code Themes', () => {
    it('should have at least 8 themes', () => {
        const names = getCodeThemeNames();
        expect(names.length).toBeGreaterThanOrEqual(8);
    });

    it('should get theme by name', () => {
        const theme = getCodeTheme('github-light');
        expect(theme).toBeDefined();
        expect(theme?.name).toBe('GitHub Light');
    });

    it('should return undefined for unknown theme', () => {
        const theme = getCodeTheme('nonexistent');
        expect(theme).toBeUndefined();
    });

    it('each theme should have required properties', () => {
        for (const [, theme] of Object.entries(codeThemes)) {
            expect(theme).toHaveProperty('name');
            expect(theme).toHaveProperty('background');
            expect(theme).toHaveProperty('foreground');
            expect(theme).toHaveProperty('shikiTheme');
        }
    });

    it('should provide choices for CLI', () => {
        const choices = getCodeThemeChoices();
        expect(choices.length).toBeGreaterThan(0);
        expect(choices[0]).toHaveProperty('name');
        expect(choices[0]).toHaveProperty('value');
    });
});
