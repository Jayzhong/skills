/**
 * Unit tests for sanitization module
 */

import { describe, it, expect } from 'vitest';
import { sanitizeStyle, isAllowedTag, isForbiddenTag } from '../../src/converter/transforms/sanitize.js';

describe('sanitizeStyle', () => {
    it('should allow safe CSS properties', () => {
        const style = 'color: red; font-size: 16px; margin: 10px;';
        const result = sanitizeStyle(style);
        expect(result).toContain('color: red');
        expect(result).toContain('font-size: 16px');
        expect(result).toContain('margin: 10px');
    });

    it('should filter out disallowed properties', () => {
        const style = 'color: red; position: absolute; z-index: 999;';
        const result = sanitizeStyle(style);
        expect(result).toContain('color: red');
        expect(result).not.toContain('position');
        expect(result).not.toContain('z-index');
    });

    it('should handle empty style', () => {
        expect(sanitizeStyle('')).toBe('');
    });

    it('should handle malformed style strings', () => {
        const style = 'color; font-size: 16px';
        const result = sanitizeStyle(style);
        expect(result).toContain('font-size: 16px');
        expect(result).not.toContain('color;');
    });
});

describe('isAllowedTag', () => {
    it('should return true for allowed tags', () => {
        expect(isAllowedTag('p')).toBe(true);
        expect(isAllowedTag('h1')).toBe(true);
        expect(isAllowedTag('blockquote')).toBe(true);
        expect(isAllowedTag('pre')).toBe(true);
        expect(isAllowedTag('code')).toBe(true);
        expect(isAllowedTag('table')).toBe(true);
    });

    it('should return false for disallowed tags', () => {
        expect(isAllowedTag('script')).toBe(false);
        expect(isAllowedTag('iframe')).toBe(false);
        expect(isAllowedTag('custom-element')).toBe(false);
    });

    it('should be case-insensitive', () => {
        expect(isAllowedTag('P')).toBe(true);
        expect(isAllowedTag('BLOCKQUOTE')).toBe(true);
    });
});

describe('isForbiddenTag', () => {
    it('should return true for forbidden tags', () => {
        expect(isForbiddenTag('script')).toBe(true);
        expect(isForbiddenTag('iframe')).toBe(true);
        expect(isForbiddenTag('style')).toBe(true);
        expect(isForbiddenTag('form')).toBe(true);
    });

    it('should return false for allowed tags', () => {
        expect(isForbiddenTag('p')).toBe(false);
        expect(isForbiddenTag('div')).toBe(false);
    });
});
