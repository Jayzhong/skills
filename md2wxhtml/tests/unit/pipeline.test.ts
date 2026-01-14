/**
 * Integration tests for the conversion pipeline
 */

import { describe, it, expect } from 'vitest';
import { readFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { convert } from '../../src/converter/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const fixturesDir = resolve(__dirname, '../fixtures');

describe('convert', () => {
    it('should convert basic markdown to HTML', async () => {
        const markdown = await readFile(resolve(fixturesDir, 'basic.md'), 'utf-8');
        const result = await convert(markdown);

        expect(result.html).toContain('<h1');
        expect(result.html).toContain('<h2');
        expect(result.html).toContain('<strong');
        expect(result.html).toContain('<em');
        expect(result.html).toContain('<code');
        expect(result.html).toContain('<blockquote');
        expect(result.html).toContain('<ul');
        expect(result.html).toContain('<ol');
        expect(result.html).toContain('<table');
        expect(result.html).toContain('<a');
    });

    it('should apply inline styles', async () => {
        const markdown = '# Hello World';
        const result = await convert(markdown);

        expect(result.html).toContain('style="');
    });

    it('should detect code language and apply highlighting', async () => {
        const markdown = '```javascript\nconst x = 1;\n```';
        const result = await convert(markdown, {
            toggles: { showLanguageLabel: true, showLineNumbers: false, softWrapCode: false, appendLinkDomain: false }
        });

        expect(result.html).toContain('<pre');
        // Should have some styling applied
        expect(result.html).toContain('background-color');
    });

    it('should report degraded features', async () => {
        const markdown = await readFile(resolve(fixturesDir, 'degradations.md'), 'utf-8');
        const result = await convert(markdown);

        // Should have warnings for task lists, h4-h6, relative images
        expect(result.compatibilityReport.warnings.length).toBeGreaterThan(0);
        expect(result.compatibilityReport.summary.total).toBeGreaterThan(0);
    });

    it('should collect images in asset manifest', async () => {
        const markdown = '![Test](./image.png)';
        const result = await convert(markdown);

        expect(result.assetManifest.images.length).toBe(1);
        expect(result.assetManifest.images[0].originalPath).toBe('./image.png');
    });

    it('should collect external links', async () => {
        const markdown = '[Link](https://example.com)';
        const result = await convert(markdown);

        expect(result.assetManifest.externalLinks.length).toBe(1);
        expect(result.assetManifest.externalLinks[0].originalPath).toBe('https://example.com');
    });

    it('should echo theme configuration', async () => {
        const result = await convert('# Test', {
            typographyTheme: 'modern',
            codeTheme: 'github-dark',
            params: { fontSizePreset: 'l', lineHeightPreset: 'relaxed', radiusPreset: 'medium', widthPreset: 'narrow' }
        });

        expect(result.themeConfigEcho.typographyTheme).toBe('modern');
        expect(result.themeConfigEcho.codeTheme).toBe('github-dark');
        expect(result.themeConfigEcho.fontSizePreset).toBe('l');
        expect(result.themeConfigEcho.lineHeightPreset).toBe('relaxed');
    });

    it('should produce deterministic output', async () => {
        const markdown = '# Hello\n\nWorld **bold**';

        const result1 = await convert(markdown, { typographyTheme: 'modern' });
        const result2 = await convert(markdown, { typographyTheme: 'modern' });

        expect(result1.html).toBe(result2.html);
    });
});

describe('front matter handling', () => {
    it('should ignore front matter by default', async () => {
        const markdown = await readFile(resolve(fixturesDir, 'frontmatter.md'), 'utf-8');
        const result = await convert(markdown);

        // Should not contain the title as extracted metadata
        expect(result.html).not.toContain('作者:');
    });

    it('should extract front matter when configured', async () => {
        const markdown = await readFile(resolve(fixturesDir, 'frontmatter.md'), 'utf-8');
        const result = await convert(markdown, { frontMatterHandling: 'metadata' });

        expect(result.html).toContain('Front Matter Test Article');
        expect(result.html).toContain('Test Author');
    });
});
