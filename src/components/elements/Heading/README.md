| Props           | type            | default                                 | description                   |
| --------------- | --------------- | --------------------------------------- | ----------------------------- |
| customComponent | string          | div                                     | change html tag definition    |
| fontWeight      | string / number | 500 (default theme: font-weight strong) | change font-weight style      |
| color           | string          | theme color                             | change color style from theme |

Example `customComponent="span"` to change tag to `span`

```js
<Provider>
  <Heading.H1> H1 Heading</Heading.H1>
  <Heading.H1 customComponent="span">H1 Heading as span tag</Heading.H1>

  <Heading.H2> H2 Heading</Heading.H2>
  <Heading.H3> H3 Heading</Heading.H3>
  <Heading.H4> H4 Heading</Heading.H4>
  <Heading.H5> H5 Heading</Heading.H5>
  <Heading.H6>H6 Heading</Heading.H6>
</Provider>
```

Default font-weight is `500`, it's could be changed by using `fontWeight` prop

```js
<Provider>
  <Heading.H1 fontWeight={600}> H1 font-weight 600 </Heading.H1>
</Provider>
```

## Custom color

Color could be change easily using default or custom theme colors

**Example base on default theme color**

```js static
const theme = {
  colors: {
    // Primary
    B70: "#004660",
    B60: "#007099",
    B50: "#008CC0", // Primary Color
    B40: "#009AD3",
    B30: "#00A7E4",
    B20: "#00B7FA",
    B10: "#3ECBFF",
    B7: "#7CDCFF",
    B5: "#B1EAFF"
  }
};
```

```js
<Provider>
  <Heading.H1 color="B50"> H1 Heading</Heading.H1>
</Provider>
```
