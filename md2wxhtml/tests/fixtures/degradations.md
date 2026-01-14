# Degradation Test Fixture

## Task List (Should Degrade)

- [x] Completed task
- [ ] Incomplete task
- [x] Another completed task

## Wide Table (Should Warn)

| Col1 | Col2 | Col3 | Col4 | Col5 | Col6 | Col7 |
|------|------|------|------|------|------|------|
| A | B | C | D | E | F | G |
| H | I | J | K | L | M | N |

## Deep Heading (Should Degrade)

#### This is h4 (should become h3)

##### This is h5 (should become h3)

###### This is h6 (should become h3)

## External Links

Visit [Google](https://www.google.com) or [GitHub](https://github.com).

## Relative Images (Should Warn)

![Local Image](./images/local.png)

![External Image](https://example.com/image.png)
