/**
 * Asset manifest generator
 */

import type { AssetManifest, AssetEntry } from '../themes/types.js';

/**
 * Create empty asset manifest
 */
export function createEmptyManifest(): AssetManifest {
    return {
        images: [],
        externalLinks: [],
    };
}

/**
 * Create manifest from collected assets
 */
export function createManifest(
    images: AssetEntry[],
    externalLinks: AssetEntry[]
): AssetManifest {
    return {
        images: deduplicateAssets(images),
        externalLinks: deduplicateAssets(externalLinks),
    };
}

/**
 * Deduplicate assets by path
 */
function deduplicateAssets(assets: AssetEntry[]): AssetEntry[] {
    const seen = new Set<string>();
    return assets.filter(asset => {
        if (seen.has(asset.originalPath)) {
            return false;
        }
        seen.add(asset.originalPath);
        return true;
    });
}

/**
 * Format manifest as readable text
 */
export function formatManifestText(manifest: AssetManifest): string {
    const lines: string[] = [
        '# Asset Manifest',
        '',
    ];

    lines.push(`## Images (${manifest.images.length})`);
    if (manifest.images.length === 0) {
        lines.push('No images found.');
    } else {
        for (const img of manifest.images) {
            lines.push(`- ${img.originalPath}`);
            lines.push(`  Notes: ${img.notes}`);
            lines.push(`  Action: ${img.recommendation}`);
        }
    }
    lines.push('');

    lines.push(`## External Links (${manifest.externalLinks.length})`);
    if (manifest.externalLinks.length === 0) {
        lines.push('No external links found.');
    } else {
        for (const link of manifest.externalLinks) {
            lines.push(`- ${link.originalPath}`);
            lines.push(`  ${link.notes}`);
        }
    }

    return lines.join('\n');
}

/**
 * Format manifest as JSON
 */
export function formatManifestJson(manifest: AssetManifest): string {
    return JSON.stringify(manifest, null, 2);
}
