/**
 * Converter type definitions
 */

import type { Element, Text, Root, RootContent } from 'hast';

export interface ConversionContext {
    warnings: import('../themes/types.js').CompatibilityWarning[];
    images: import('../themes/types.js').AssetEntry[];
    externalLinks: import('../themes/types.js').AssetEntry[];
}

export type HastNode = Element | Text | Root | RootContent;
