/**
 * Compatibility report generator
 */

import type { CompatibilityReport, CompatibilityWarning } from '../themes/types.js';

/**
 * Create an empty compatibility report
 */
export function createEmptyReport(): CompatibilityReport {
    return {
        warnings: [],
        summary: {
            total: 0,
            degraded: 0,
            unsupported: 0,
            warnings: 0,
        },
    };
}

/**
 * Finalize report with summary counts
 */
export function finalizeReport(warnings: CompatibilityWarning[]): CompatibilityReport {
    const summary = {
        total: warnings.length,
        degraded: warnings.filter(w => w.type === 'degraded').length,
        unsupported: warnings.filter(w => w.type === 'unsupported').length,
        warnings: warnings.filter(w => w.type === 'warning').length,
    };

    return { warnings, summary };
}

/**
 * Format report as readable text
 */
export function formatReportText(report: CompatibilityReport): string {
    const lines: string[] = [
        '# Compatibility Report',
        '',
        `Total issues: ${report.summary.total}`,
        `- Degraded: ${report.summary.degraded}`,
        `- Unsupported: ${report.summary.unsupported}`,
        `- Warnings: ${report.summary.warnings}`,
        '',
    ];

    if (report.warnings.length === 0) {
        lines.push('✅ No compatibility issues found!');
    } else {
        lines.push('## Issues:');
        lines.push('');

        for (const warning of report.warnings) {
            const icon = warning.type === 'degraded' ? '⚠️' :
                warning.type === 'unsupported' ? '❌' : '💡';
            lines.push(`${icon} **${warning.feature}**`);
            lines.push(`   ${warning.message}`);
            if (warning.recommendation) {
                lines.push(`   → ${warning.recommendation}`);
            }
            lines.push('');
        }
    }

    return lines.join('\n');
}

/**
 * Format report as JSON
 */
export function formatReportJson(report: CompatibilityReport): string {
    return JSON.stringify(report, null, 2);
}
