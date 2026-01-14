/**
 * Theme config echo generator
 */

import type { ThemeConfigEcho, ConversionConfig } from '../themes/types.js';

/**
 * Create theme config echo from conversion config
 */
export function createThemeConfigEcho(config: ConversionConfig): ThemeConfigEcho {
    return {
        typographyTheme: config.typographyTheme,
        codeTheme: config.codeTheme,
        fontSizePreset: config.params.fontSizePreset,
        lineHeightPreset: config.params.lineHeightPreset,
        radiusPreset: config.params.radiusPreset,
        widthPreset: config.params.widthPreset,
        featureToggles: config.toggles,
    };
}

/**
 * Format config echo as readable text
 */
export function formatConfigText(echo: ThemeConfigEcho): string {
    return [
        '# Theme Configuration',
        '',
        `Typography Theme: ${echo.typographyTheme}`,
        `Code Theme: ${echo.codeTheme}`,
        '',
        '## Parameters',
        `- Font Size: ${echo.fontSizePreset.toUpperCase()}`,
        `- Line Height: ${echo.lineHeightPreset}`,
        `- Border Radius: ${echo.radiusPreset}`,
        `- Content Width: ${echo.widthPreset}`,
        '',
        '## Feature Toggles',
        `- Show Language Label: ${echo.featureToggles.showLanguageLabel ? 'On' : 'Off'}`,
        `- Show Line Numbers: ${echo.featureToggles.showLineNumbers ? 'On' : 'Off'}`,
        `- Soft Wrap Code: ${echo.featureToggles.softWrapCode ? 'On' : 'Off'}`,
        `- Append Link Domain: ${echo.featureToggles.appendLinkDomain ? 'On' : 'Off'}`,
    ].join('\n');
}

/**
 * Format config echo as JSON
 */
export function formatConfigJson(echo: ThemeConfigEcho): string {
    return JSON.stringify(echo, null, 2);
}
