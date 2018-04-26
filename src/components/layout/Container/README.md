Container contains Grid component

The responsive layout also provides fixed-width containers. Calls props API from Container wrapper component

xlarge(1280), large(960), medium(840), small(600), xsmall(480)

e.g: `fixSize = "xlarge";`

```js
<Provider>
  <Container bg="N2">
    <div style={{ padding: "1em" }}>Full width </div>
  </Container>

  <br />

  <Container fixSize="xlarge" bg="N2">
    <div style={{ padding: "1em" }}>xlarge </div>
  </Container>

  <br />

  <Container fixSize="large" bg="N2">
    <div style={{ padding: "1em" }}>large </div>
  </Container>

  <br />

  <Container fixSize="medium" bg="N2">
    <div style={{ padding: "1em" }}>medium </div>
  </Container>

  <br />

  <Container fixSize="small" bg="N2">
    <div style={{ padding: "1em" }}>small </div>
  </Container>

  <br />

  <Container fixSize="xsmall" bg="N2">
    <div style={{ padding: "1em" }}>xsmall </div>
  </Container>
</Provider>
```
