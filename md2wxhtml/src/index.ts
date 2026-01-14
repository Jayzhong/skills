/**
 * MD2WxHTML - Markdown to WeChat HTML Converter
 * 
 * Main library export
 */

// Core conversion
export { convert, defaultConfig } from './converter/index.js';

// Theme system
export {
    // Types
    type TypographyTheme,
    type CodeTheme,
    type ThemeParams,
    type FeatureToggles,
    type ConversionConfig,
    type ConversionResult,
    type CompatibilityReport,
    type CompatibilityWarning,
    type ThemeConfigEcho,
    type AssetManifest,
    type AssetEntry,
    type FrontMatter,
    type FontSizePreset,
    type LineHeightPreset,
    type RadiusPreset,
    type WidthPreset,

    // Theme getters
    getTypographyTheme,
    getTypographyThemeNames,
    getTypographyThemeChoices,
    getCodeTheme,
    getCodeThemeNames,
    getCodeThemeChoices,

    // Theme data
    typographyThemes,
    codeThemes,
    fontSizeScales,
    lineHeightScales,
    radiusScales,
    widthScales,
} from './themes/index.js';

// Utilities
export { extractFrontMatter, frontMatterToHtml, getPreviewMarkdown } from './utils/index.js';

// Output formatters
export {
    wrapWithBodyStyles,
    formatHtml,
    formatReportText,
    formatReportJson,
    formatConfigText,
    formatConfigJson,
    formatManifestText,
    formatManifestJson,
} from './outputs/index.js';
