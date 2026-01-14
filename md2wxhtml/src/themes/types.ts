/**
 * Theme type definitions for MD2WxHTML
 */

export interface CSSProperties {
    [key: string]: string | number;
}

export interface TypographyTheme {
    name: string;
    description: string;
    styles: {
        body: CSSProperties;
        h1: CSSProperties;
        h2: CSSProperties;
        h3: CSSProperties;
        p: CSSProperties;
        blockquote: CSSProperties;
        hr: CSSProperties;
        a: CSSProperties;
        ul: CSSProperties;
        ol: CSSProperties;
        li: CSSProperties;
        table: CSSProperties;
        th: CSSProperties;
        td: CSSProperties;
        strong: CSSProperties;
        em: CSSProperties;
        inlineCode: CSSProperties;
        pre: CSSProperties;
        img: CSSProperties;
    };
}

export interface CodeTheme {
    name: string;
    description: string;
    background: string;
    foreground: string;
    shikiTheme: string;
}

export type FontSizePreset = 's' | 'm' | 'l';
export type LineHeightPreset = 'compact' | 'standard' | 'relaxed';
export type RadiusPreset = 'off' | 'low' | 'medium';
export type WidthPreset = 'standard' | 'narrow';

export interface ThemeParams {
    fontSizePreset: FontSizePreset;
    lineHeightPreset: LineHeightPreset;
    radiusPreset: RadiusPreset;
    widthPreset: WidthPreset;
}

export interface FeatureToggles {
    showLanguageLabel: boolean;
    showLineNumbers: boolean;
    softWrapCode: boolean;
    appendLinkDomain: boolean;
}

export interface ConversionConfig {
    typographyTheme: string;
    codeTheme: string;
    params: ThemeParams;
    toggles: FeatureToggles;
    frontMatterHandling: 'ignore' | 'metadata';
}

export interface ConversionResult {
    html: string;
    compatibilityReport: CompatibilityReport;
    themeConfigEcho: ThemeConfigEcho;
    assetManifest: AssetManifest;
}

export interface CompatibilityWarning {
    type: 'degraded' | 'unsupported' | 'warning';
    feature: string;
    message: string;
    recommendation?: string;
}

export interface CompatibilityReport {
    warnings: CompatibilityWarning[];
    summary: {
        total: number;
        degraded: number;
        unsupported: number;
        warnings: number;
    };
}

export interface ThemeConfigEcho {
    typographyTheme: string;
    codeTheme: string;
    fontSizePreset: FontSizePreset;
    lineHeightPreset: LineHeightPreset;
    radiusPreset: RadiusPreset;
    widthPreset: WidthPreset;
    featureToggles: FeatureToggles;
}

export interface AssetEntry {
    type: 'image' | 'link';
    originalPath: string;
    notes: string;
    recommendation: string;
}

export interface AssetManifest {
    images: AssetEntry[];
    externalLinks: AssetEntry[];
}

export interface FrontMatter {
    title?: string;
    author?: string;
    date?: string;
    summary?: string;
    [key: string]: unknown;
}
