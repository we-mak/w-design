| Props      | type            | default     | description                |
| ---------- | --------------- | ----------- | -------------------------- |
| as         | string          | div         | change html tag definition |
| fontWeight | string / number | 500         | change font-weight style   |
| color      | string          | theme color | change color style         |

Example `as="span"` to change tag to `span`

```js
<Provider>
  <Heading.H1> H1 Heading</Heading.H1>
  <Heading.H1 as="span">H1 Heading as span tag</Heading.H1>

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

```js
<Provider>
  <Heading.H1 color="teal"> H1 Teal color </Heading.H1>
</Provider>
```
