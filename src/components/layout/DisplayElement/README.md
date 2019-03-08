Responsive Hidden based on default theme breakpoints

| Props | type    | default | description                                                       |
| ----- | ------- | ------- | ----------------------------------------------------------------- |
| xs    | boolean | false   | hide at @media screen and (max-width: 24em)                       |
| sm    | boolean | false   | hide at @media screen and (min-width: 24em) and (max-width: 32em) |
| md    | boolean | false   | hide at @media screen and (min-width: 32em) and (max-width: 48em) |
| lg    | boolean | false   | hide at @media screen and (min-width: 48em) and (max-width: 64em) |
| xl    | boolean | false   | hide at @media screen and (min-width: 64em) and (max-width: 80em) |
| xxl   | boolean | false   | hide at @media screen and (min-width: 80em)                       |

```js
<Container>
  <Flex>
    <Flex.Column width={1} bg="#eaeaea">
      <DisplayElement xs>Hide xs element</Hide>
      <DisplayElement lg>Hide lg element</Hide>
    </Flex.Column>
  </Flex>
</Container>
```
