/**
 * Unit tests for inline styles module
 */

import { describe, it, expect } from 'vitest';
import { cssPropertiesToString, mergeStyles } from '../../src/converter/transforms/inline-styles.js';

describe('cssPropertiesToString', () => {
    it('should convert properties to style string', () => {
        const props = { color: 'red', 'font-size': '16px' };
        const result = cssPropertiesToString(props);
        expect(result).toContain('color: red');
        expect(result).toContain('font-size: 16px');
    });

    it('should sort properties alphabetically', () => {
        const props = { 'z-index': 1, color: 'red', 'background': 'blue' };
        const result = cssPropertiesToString(props);
        // Properties should be sorted: background, color, z-index
        const parts = result.split(';').map(s => s.trim());
        expect(parts[0]).toContain('background');
        expect(parts[1]).toContain('color');
        expect(parts[2]).toContain('z-index');
    });

    it('should handle empty properties', () => {
        expect(cssPropertiesToString({})).toBe('');
    });

    it('should filter out undefined/null values', () => {
        const props = { color: 'red', background: undefined as unknown as string };
        const result = cssPropertiesToString(props);
        expect(result).toContain('color: red');
        expect(result).not.toContain('background');
    });
});

describe('mergeStyles', () => {
    it('should merge new styles into existing', () => {
        const existing = 'color: red; font-size: 14px';
        const newStyles = { 'background-color': 'blue' };
        const result = mergeStyles(existing, newStyles);
        expect(result).toContain('color: red');
        expect(result).toContain('font-size: 14px');
        expect(result).toContain('background-color: blue');
    });

    it('should override existing properties', () => {
        const existing = 'color: red';
        const newStyles = { color: 'blue' };
        const result = mergeStyles(existing, newStyles);
        expect(result).toContain('color: blue');
        expect(result).not.toContain('color: red');
    });

    it('should handle undefined existing style', () => {
        const newStyles = { color: 'red' };
        const result = mergeStyles(undefined, newStyles);
        expect(result).toBe('color: red');
    });
});
