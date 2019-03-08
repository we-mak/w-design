Container contains Grid component

The responsive layout also provides fixed-width containers.

| Props   | type   | default     | description                                                |
| ------- | ------ | ----------- | ---------------------------------------------------------- |
| fixSize | string | 100%        | fixed size at xl(1280), lg(960), md(840), sm(600), xs(480) |
| bg      | string |             | change background style                                    |
| color   | string | theme color | change color style                                         |

e.g: `fixSize = "xlarge";`

```js
<Container>
  <div style={{ padding: "1em" }}>Full width </div>
</Container>

<Container fixSize="xl">
  <div style={{ padding: "1em" }}>xlarge </div>
</Container>

<Container fixSize="lg">
  <div style={{ padding: "1em" }}>large </div>
</Container>

<Container fixSize="md">
  <div style={{ padding: "1em" }}>medium </div>
</Container>

<Container fixSize="sm">
  <div style={{ padding: "1em" }}>small </div>
</Container>

<Container fixSize="xs">
  <div style={{ padding: "1em" }}>xsmall </div>
</Container>
```
