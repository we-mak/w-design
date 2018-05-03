Responsive Hidden base on Grid size

```js
<Provider>
  <Container>
    <Grid>
      <Grid.Column width={1 / 2} bg="N2">
        <Hide xs>Hide xs element</Hide>
        Show
      </Grid.Column>

      <Grid.Column width={1 / 2} bg="N3">
        <Hide lg>Hide lg element</Hide>
        Show
      </Grid.Column>
    </Grid>
  </Container>
</Provider>
```
