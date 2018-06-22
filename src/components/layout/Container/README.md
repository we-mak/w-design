Container contains Grid component

The responsive layout also provides fixed-width containers.

| Props   | type   | default     | description                                                |
| ------- | ------ | ----------- | ---------------------------------------------------------- |
| fixSize | string | 100%        | fixed size at xl(1280), lg(960), md(840), sm(600), xs(480) |
| bg      | string |             | change background style                                    |
| color   | string | theme color | change color style                                         |

e.g: `fixSize = "xlarge";`

```js
<Provider>
  <Container bg="N2">
    <div style={{ padding: "1em" }}>Full width </div>
  </Container>

  <br />

  <Container fixSize="xl" bg="N2">
    <div style={{ padding: "1em" }}>xlarge </div>
  </Container>

  <br />

  <Container fixSize="lg" bg="N2">
    <div style={{ padding: "1em" }}>large </div>
  </Container>

  <br />

  <Container fixSize="md" bg="N2">
    <div style={{ padding: "1em" }}>medium </div>
  </Container>

  <br />

  <Container fixSize="sm" bg="N2">
    <div style={{ padding: "1em" }}>small </div>
  </Container>

  <br />

  <Container fixSize="xs" bg="N2">
    <div style={{ padding: "1em" }}>xsmall </div>
  </Container>
</Provider>
```
