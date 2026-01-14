#!/usr/bin/env node
/**
 * MD2WxHTML CLI
 * 
 * Convert Markdown to WeChat-compatible HTML with theme selection
 */

import { program } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

import {
    convert,
    getTypographyThemeChoices,
    getCodeThemeChoices,
    getPreviewMarkdown,
    formatReportText,
    formatConfigText,
    formatManifestText,
    type ConversionConfig,
    type ThemeParams,
    type FeatureToggles,
} from './index.js';

const VERSION = '1.0.0';

interface CLIOptions {
    output?: string;
    typographyTheme?: string;
    codeTheme?: string;
    fontSize?: 's' | 'm' | 'l';
    lineHeight?: 'compact' | 'standard' | 'relaxed';
    radius?: 'off' | 'low' | 'medium';
    width?: 'standard' | 'narrow';
    showLanguage?: boolean;
    lineNumbers?: boolean;
    softWrap?: boolean;
    frontMatter?: 'ignore' | 'metadata';
    report?: boolean;
    manifest?: boolean;
    config?: boolean;
    all?: boolean;
    preview?: boolean;
    interactive?: boolean;
}

/**
 * Interactive theme selection
 */
async function interactiveThemeSelection(): Promise<{
    typographyTheme: string;
    codeTheme: string;
    params: ThemeParams;
    toggles: Partial<FeatureToggles>;
}> {
    console.log(chalk.cyan('\n📝 Theme Selection\n'));

    const typographyChoices = getTypographyThemeChoices();
    const codeChoices = getCodeThemeChoices();

    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'typographyTheme',
            message: 'Select Typography Theme:',
            choices: typographyChoices,
            default: 'modern',
        },
        {
            type: 'list',
            name: 'codeTheme',
            message: 'Select Code Highlight Theme:',
            choices: codeChoices,
            default: 'github-light',
        },
        {
            type: 'list',
            name: 'fontSize',
            message: 'Font Size Preset:',
            choices: [
                { name: 'S (14px body)', value: 's' },
                { name: 'M (15px body)', value: 'm' },
                { name: 'L (16px body)', value: 'l' },
            ],
            default: 'm',
        },
        {
            type: 'list',
            name: 'lineHeight',
            message: 'Line Height Preset:',
            choices: [
                { name: 'Compact (1.6)', value: 'compact' },
                { name: 'Standard (1.8)', value: 'standard' },
                { name: 'Relaxed (2.0)', value: 'relaxed' },
            ],
            default: 'standard',
        },
        {
            type: 'list',
            name: 'radius',
            message: 'Border Radius & Shadow:',
            choices: [
                { name: 'Off', value: 'off' },
                { name: 'Low (4px)', value: 'low' },
                { name: 'Medium (8px)', value: 'medium' },
            ],
            default: 'low',
        },
        {
            type: 'list',
            name: 'width',
            message: 'Content Width:',
            choices: [
                { name: 'Standard (100%)', value: 'standard' },
                { name: 'Narrow (92% - mobile optimized)', value: 'narrow' },
            ],
            default: 'standard',
        },
        {
            type: 'confirm',
            name: 'showLanguage',
            message: 'Show language label on code blocks?',
            default: true,
        },
        {
            type: 'confirm',
            name: 'lineNumbers',
            message: 'Show line numbers in code blocks?',
            default: false,
        },
        {
            type: 'confirm',
            name: 'softWrap',
            message: 'Soft wrap long lines in code blocks?',
            default: false,
        },
    ]);

    return {
        typographyTheme: answers.typographyTheme,
        codeTheme: answers.codeTheme,
        params: {
            fontSizePreset: answers.fontSize,
            lineHeightPreset: answers.lineHeight,
            radiusPreset: answers.radius,
            widthPreset: answers.width,
        },
        toggles: {
            showLanguageLabel: answers.showLanguage,
            showLineNumbers: answers.lineNumbers,
            softWrapCode: answers.softWrap,
        },
    };
}

/**
 * Show preview and ask for confirmation
 */
async function showPreviewAndConfirm(config: Partial<ConversionConfig>): Promise<boolean> {
    console.log(chalk.cyan('\n🔍 Generating Preview...\n'));

    const previewMd = getPreviewMarkdown();
    const result = await convert(previewMd, config);

    console.log(chalk.dim('─'.repeat(60)));
    console.log(chalk.yellow('Preview HTML (first 1000 chars):'));
    console.log(chalk.dim('─'.repeat(60)));
    console.log(result.html.slice(0, 1000) + (result.html.length > 1000 ? '\n...' : ''));
    console.log(chalk.dim('─'.repeat(60)));

    const { confirm } = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirm',
            message: 'Proceed with these settings?',
            default: true,
        },
    ]);

    return confirm;
}

/**
 * Read markdown input from file or stdin
 */
async function readMarkdownInput(inputPath?: string): Promise<string> {
    if (inputPath) {
        const fullPath = resolve(inputPath);
        if (!existsSync(fullPath)) {
            throw new Error(`File not found: ${fullPath}`);
        }
        return readFile(fullPath, 'utf-8');
    }

    // Read from stdin
    const chunks: Buffer[] = [];
    for await (const chunk of process.stdin) {
        chunks.push(chunk);
    }
    return Buffer.concat(chunks).toString('utf-8');
}

/**
 * Main CLI handler
 */
async function main() {
    program
        .name('wechat-md')
        .description('Convert Markdown to WeChat-compatible HTML')
        .version(VERSION)
        .argument('[input]', 'Input Markdown file path (or read from stdin)')
        .option('-o, --output <file>', 'Output HTML file path')
        .option('--typography-theme <theme>', 'Typography theme name')
        .option('--code-theme <theme>', 'Code highlight theme name')
        .option('--font-size <size>', 'Font size preset: s, m, l')
        .option('--line-height <height>', 'Line height: compact, standard, relaxed')
        .option('--radius <radius>', 'Border radius: off, low, medium')
        .option('--width <width>', 'Content width: standard, narrow')
        .option('--show-language', 'Show language label on code blocks')
        .option('--line-numbers', 'Show line numbers in code blocks')
        .option('--soft-wrap', 'Soft wrap long lines in code blocks')
        .option('--front-matter <handling>', 'Front matter handling: ignore, metadata')
        .option('--report', 'Output compatibility report')
        .option('--manifest', 'Output asset manifest')
        .option('--config', 'Output theme config echo')
        .option('--all', 'Output all (report, manifest, config)')
        .option('-p, --preview', 'Show preview before converting')
        .option('-i, --interactive', 'Interactive theme selection')
        .action(async (input: string | undefined, options: CLIOptions) => {
            try {
                let config: Partial<ConversionConfig> = {};

                // Interactive mode
                if (options.interactive || (!options.typographyTheme && !options.codeTheme && process.stdin.isTTY)) {
                    const interactiveConfig = await interactiveThemeSelection();
                    config = {
                        typographyTheme: interactiveConfig.typographyTheme,
                        codeTheme: interactiveConfig.codeTheme,
                        params: interactiveConfig.params,
                        toggles: interactiveConfig.toggles as FeatureToggles,
                    };

                    // Show preview if requested or in interactive mode
                    if (options.preview !== false) {
                        const confirmed = await showPreviewAndConfirm(config);
                        if (!confirmed) {
                            console.log(chalk.yellow('Aborted. Run again to select different themes.'));
                            process.exit(0);
                        }
                    }
                } else {
                    // Non-interactive mode - use flags
                    if (options.typographyTheme) config.typographyTheme = options.typographyTheme;
                    if (options.codeTheme) config.codeTheme = options.codeTheme;

                    config.params = {
                        fontSizePreset: (options.fontSize as 's' | 'm' | 'l') || 'm',
                        lineHeightPreset: (options.lineHeight as 'compact' | 'standard' | 'relaxed') || 'standard',
                        radiusPreset: (options.radius as 'off' | 'low' | 'medium') || 'low',
                        widthPreset: (options.width as 'standard' | 'narrow') || 'standard',
                    };

                    config.toggles = {
                        showLanguageLabel: options.showLanguage ?? true,
                        showLineNumbers: options.lineNumbers ?? false,
                        softWrapCode: options.softWrap ?? false,
                        appendLinkDomain: false,
                    };
                }

                if (options.frontMatter) {
                    config.frontMatterHandling = options.frontMatter as 'ignore' | 'metadata';
                }

                // Read input
                console.log(chalk.cyan('📄 Reading Markdown...'));
                const markdown = await readMarkdownInput(input);

                // Convert
                console.log(chalk.cyan('⚙️  Converting...'));
                const result = await convert(markdown, config);

                // Output HTML
                if (options.output) {
                    await writeFile(options.output, result.html, 'utf-8');
                    console.log(chalk.green(`✅ HTML written to ${options.output}`));
                } else {
                    console.log(chalk.dim('\n─── HTML Output ───\n'));
                    console.log(result.html);
                }

                // Optional outputs
                const showAll = options.all;

                if (showAll || options.report) {
                    console.log(chalk.dim('\n─── Compatibility Report ───\n'));
                    console.log(formatReportText(result.compatibilityReport));
                }

                if (showAll || options.config) {
                    console.log(chalk.dim('\n─── Theme Configuration ───\n'));
                    console.log(formatConfigText(result.themeConfigEcho));
                }

                if (showAll || options.manifest) {
                    console.log(chalk.dim('\n─── Asset Manifest ───\n'));
                    console.log(formatManifestText(result.assetManifest));
                }

                console.log(chalk.green('\n✅ Conversion complete!'));

            } catch (error) {
                console.error(chalk.red('Error:'), error instanceof Error ? error.message : error);
                process.exit(1);
            }
        });

    program.parse();
}

main().catch(console.error);
