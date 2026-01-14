/**
 * Main conversion pipeline
 */

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import type { Root } from 'hast';

import type {
    ConversionConfig,
    ConversionResult,
    TypographyTheme,
    CodeTheme,
    ThemeParams,
    FeatureToggles,
} from '../themes/types.js';
import { getTypographyTheme, getCodeTheme } from '../themes/index.js';
import { sanitize, applyInlineStyles, processCodeBlocks, applyDegradations } from './transforms/index.js';
import { extractFrontMatter, frontMatterToHtml } from '../utils/index.js';
import { wrapWithBodyStyles } from '../outputs/html.js';
import { finalizeReport } from '../outputs/report.js';
import { createThemeConfigEcho } from '../outputs/config-echo.js';
import { createManifest } from '../outputs/asset-manifest.js';
import type { ConversionContext } from './types.js';

/**
 * Default configuration
 */
export const defaultConfig: ConversionConfig = {
    typographyTheme: 'modern',
    codeTheme: 'github-light',
    params: {
        fontSizePreset: 'm',
        lineHeightPreset: 'standard',
        radiusPreset: 'low',
        widthPreset: 'standard',
    },
    toggles: {
        showLanguageLabel: true,
        showLineNumbers: false,
        softWrapCode: false,
        appendLinkDomain: false,
    },
    frontMatterHandling: 'ignore',
};

/**
 * Convert Markdown to WeChat-compatible HTML
 */
export async function convert(
    markdown: string,
    config: Partial<ConversionConfig> = {}
): Promise<ConversionResult> {
    const fullConfig: ConversionConfig = {
        ...defaultConfig,
        ...config,
        params: { ...defaultConfig.params, ...config.params },
        toggles: { ...defaultConfig.toggles, ...config.toggles },
    };

    // Get themes
    const typographyTheme = getTypographyTheme(fullConfig.typographyTheme);
    const codeTheme = getCodeTheme(fullConfig.codeTheme);

    if (!typographyTheme) {
        throw new Error(`Unknown typography theme: ${fullConfig.typographyTheme}`);
    }
    if (!codeTheme) {
        throw new Error(`Unknown code theme: ${fullConfig.codeTheme}`);
    }

    // Extract front matter
    const { frontMatter, content } = extractFrontMatter(markdown);
    let frontMatterHtml = '';

    if (frontMatter && fullConfig.frontMatterHandling === 'metadata') {
        frontMatterHtml = frontMatterToHtml(frontMatter);
    }

    // Create conversion context for collecting warnings and assets
    const context: ConversionContext = {
        warnings: [],
        images: [],
        externalLinks: [],
    };

    // Parse Markdown to MDAST, then convert to HAST
    const processor = unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkFrontmatter, ['yaml'])
        .use(remarkRehype, { allowDangerousHtml: false });

    const mdast = processor.parse(content);
    const hast = await processor.run(mdast) as Root;

    // Apply transformations
    let transformedHast = applyDegradations(hast, context);
    transformedHast = sanitize(transformedHast, context);
    transformedHast = applyInlineStyles(transformedHast, typographyTheme, fullConfig.params);
    transformedHast = await processCodeBlocks(transformedHast, codeTheme, fullConfig.toggles, context);

    // Stringify to HTML
    const stringifier = unified().use(rehypeStringify, { allowDangerousHtml: true });
    const htmlContent = stringifier.stringify(transformedHast);

    // Wrap with body styles and prepend front matter
    let finalHtml = wrapWithBodyStyles(
        String(htmlContent),
        typographyTheme,
        fullConfig.params
    );

    if (frontMatterHtml) {
        finalHtml = frontMatterHtml + '\n' + finalHtml;
    }

    // Create outputs
    const compatibilityReport = finalizeReport(context.warnings);
    const themeConfigEcho = createThemeConfigEcho(fullConfig);
    const assetManifest = createManifest(context.images, context.externalLinks);

    return {
        html: finalHtml,
        compatibilityReport,
        themeConfigEcho,
        assetManifest,
    };
}

/**
 * Export types and themes for external use
 */
export type { ConversionConfig, ConversionResult };
export { getTypographyTheme, getCodeTheme };
