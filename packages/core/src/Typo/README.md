# Typo

Element to create html heading element

## Props

| Props      | type                                             | default                      | description      |
| ---------- | ------------------------------------------------ | ---------------------------- | ---------------- |
| tag        | enum?: "div", "h1", "h2", "h3", "h4", "h5", "h6" | appearance value             | tag variants     |
| appearance | enum: "h1", "h2", "h3", "h4", "h5", "h6"         | must be declare in component | based to style   |
| color      | hex, rgba color                                  | undefined                    | color of heading |

## Example

```jsx
<Typo appearance="h1" tag="div">
  Hello
</Typo>
// render a div tag with h1 style
```
