---
name: md2wxhtml
description: Convert Markdown to WeChat Official Accounts-compatible HTML with customizable typography and code themes. Use when converting Markdown documents for publishing to WeChat (微信公众号), when needing syntax-highlighted code blocks with inline styles, or when preparing articles that must preserve styling after paste into WeChat's rich-text editor.
---

# MD2WxHTML: Markdown → WeChat HTML Converter

Convert Markdown to WeChat Official Accounts-ready HTML with theme selection and paste-safe styling.

## Quick Start

### As CLI

```bash
# Interactive mode - prompts for theme selection
wechat-md input.md

# Non-interactive with flags
wechat-md input.md \
  --typography-theme modern \
  --code-theme github-dark \
  --font-size m
```

### As Agent Skill

When user provides Markdown:

1. **Detect Front Matter** → Ask: Ignore or map to article metadata?
2. **Enter Theme Picker** (do NOT convert yet):
   - Typography theme: Classic | Modern | Minimal | Warm | Serif | Book | Tech | Dark
   - Code theme: GitHub Light | GitHub Dark | Monokai | Dracula | Solarized Light | Solarized Dark | Nord | One Dark
   - Font size: S (14px) | M (15px) | L (16px)
   - Line height: Compact (1.6) | Standard (1.8) | Relaxed (2.0)
   - Radius/shadow: Off | Low | Medium
   - Content width: Standard | Narrow
3. **Show preview snippet** → User confirms or adjusts
4. **Convert** → Output all four artifacts

## Input Methods

- File path: `wechat-md ./article.md`
- Stdin: `cat article.md | wechat-md`
- Paste text (interactive mode)

## Outputs

| Output | Description |
|--------|-------------|
| **Full HTML** | Copy-paste ready; inline styles only |
| **Compatibility Report** | Degraded features + warnings |
| **Theme Config Echo** | Selected theme settings (JSON) |
| **Asset Manifest** | Images + external links list |

## WeChat Compatibility

### Safe HTML Tags
`p, br, h1-h3, strong, em, span, blockquote, ul, ol, li, pre, code, img, table, thead, tbody, tr, th, td, hr, a, section, div`

### Forbidden (stripped)
`script, iframe, style, link, form, video, audio, svg`

### Degraded Features

| Feature | Handling |
|---------|----------|
| Task lists `- [x]` | Unicode markers: ✓ / ○ |
| Mermaid diagrams | Keep as code block + warning |
| LaTeX math | Plain text + "convert to image" guidance |
| Footnotes | Endnotes section at article bottom |
| Tables >5 cols | Warning; suggest image/split |
| h4-h6 | Downgrade to h3 |

## Code Block Options

```bash
--show-language     # Display language label above block
--line-numbers      # Show line numbers
--soft-wrap         # Wrap long lines instead of horizontal scroll
```

## Theme Details

See [references/typography-themes.md](references/typography-themes.md) for full typography theme definitions.

See [references/code-themes.md](references/code-themes.md) for code highlight theme definitions.

## Scripts

- `scripts/convert.ts` - Programmatic conversion API
