/**
 * Preview snippet generator
 */

const PREVIEW_MARKDOWN = `# 标题示例

这是一段正文内容，展示**粗体**和*斜体*样式，以及\`内联代码\`。

## 二级标题

> 这是一段引用文字，用于展示 blockquote 样式。

### 代码示例

\`\`\`typescript
function hello(name: string): string {
  return \`Hello, \${name}!\`;
}
\`\`\`

### 列表示例

- 无序列表项目一
- 无序列表项目二
  - 嵌套项目

1. 有序列表项目一
2. 有序列表项目二

### 表格示例

| 列一 | 列二 | 列三 |
|------|------|------|
| 内容 | 内容 | 内容 |

---

[链接示例](https://example.com)
`;

export function getPreviewMarkdown(): string {
    return PREVIEW_MARKDOWN;
}
