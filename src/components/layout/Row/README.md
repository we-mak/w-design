Wrapper Component around Columns

| Props          | type   | default | description                |
| -------------- | ------ | ------- | -------------------------- |
| flexWrap       | string | wrap    | flex-wrap definition       |
| flexDirection  | string | wrap    | flex-wrap definition       |
| alignItems     | string | wrap    | flex-wrap definition       |
| justifyContent | string | wrap    | flex-wrap definition       |
| noGap          | bool   | wrap    | flex-wrap definition       |
| oneline        | bool   | wrap    | Set grid columns to online |

### Default Grid

```js
<Provider>
  <Container>
    <Row>
      <Column width={1} bg="N2">
        width 1
      </Column>

      <Column width={1 / 2} bg="N3">
        width 1/2
      </Column>

      <Column width={1 / 4} bg="N4">
        width 1/4
      </Column>
      <Column width={1 / 3} bg="N2">
        width 1/3
      </Column>
    </Row>
  </Container>
</Provider>
```

### Gapless Grid

```js
<Provider>
  <Container>
    <Row gapless>
      <Column width={1} bg="N2">
        width 1
      </Column>

      <Column width={1 / 2} bg="N3">
        width 1/2
      </Column>

      <Column width={1 / 4} bg="N4">
        width 1/4
      </Column>
      <Column width={1 / 3} bg="N2">
        width 1/3
      </Column>
    </Row>
  </Container>
</Provider>
```

### Oneline Grid

Grid `oneline` prop make all child columns positioned in the same single row.

```js
<Provider>
  <Container>
    <Row oneline>
      <Column width={1} bg="N2">
        width 1
      </Column>

      <Column width={1 / 2} bg="N3">
        width 1/2
      </Column>

      <Column width={1 / 4} bg="N4">
        width 1/4
      </Column>
      <Column width={1 / 3} bg="N2">
        width 1/3
      </Column>
    </Row>
  </Container>
</Provider>
```

### Custom Grid

```js
<Provider>
  <Container>
    <Row justifyContent="space-between">
      <Column width={1} bg="N2">
        width 1
      </Column>

      <Column width={1 / 2} bg="N3" m="auto">
        width 1/2, m="auto"
      </Column>

      <Column width={1 / 4} bg="N4">
        width 1/4
      </Column>
      <Column width={1 / 3} bg="N2">
        width 1/3
      </Column>
    </Row>
  </Container>
</Provider>
```

### Responsive Column

The `width` prop will scale depend on breakpoints which have [24, 32, 48, 64, 80] in default theme

example

width={[
1, // 100% below the smallest breakpoint
1 / 2, // 50% from the next breakpoint and up
1 / 4 // 25% from the next breakpoint and up
]}

```js
<Provider>
  <Container>
    <Row>
      <Column width={[1, 1 / 2, 1 / 3, 1 / 4]} bg="N2">
        Column 1
      </Column>

      <Column width={[1, 1 / 2, 1 / 3, 1 / 4, 1]} bg="N3">
        Column 2
      </Column>
    </Row>
  </Container>
</Provider>
```

### Responsive Hidden

```js
<Provider>
  <Container>
    <Row>
      <Column width={1 / 2} bg="N2">
        Column 1
      </Column>
      <Column width={1 / 2} bg="N3">
        Column 1
      </Column>
    </Row>
  </Container>
</Provider>
```
