| Props      | type                                               | default   | description                           |
| ---------- | -------------------------------------------------- | --------- | ------------------------------------- |
| appearance | 'default', 'primary', 'warning', 'success', 'link' | 'default' | button appearance types               |
| size       | 'sm', 'md', 'lg'                                   | 'md'      | button size                           |
| fluid      | boolean                                            |           | fluid button fits container           |
| type       | 'button', 'submit', 'reset'                        | 'button'  | button type, applied for non link tag |
| buttonRef  | HTMLElement                                        |           | reference to button component         |

### Button appearances

```js
<Provider>
  <Button>Default button</Button>{" "}
  <Button appearance="primary">Primary button</Button>{" "}
  <Button appearance="danger">Danger button</Button>{" "}
  <Button appearance="warning">Warning button</Button>{" "}
  <Button appearance="success">Success button</Button>{" "}
  <Button href="#" appearance="link">
    Link button
  </Button>{" "}
</Provider>
```

### Button sizes

```js
<Provider>
  <Button btnSize="sm" appearance="primary">
    Small button
  </Button>{" "}
  <Button appearance="primary">Medium button</Button>{" "}
  <Button btnSize="lg" appearance="primary">
    Large button
  </Button>{" "}
</Provider>
```

### Fluid button

```js
<Provider>
  <Button appearance="primary" fluid>
    Fluid button
  </Button>
</Provider>
```

### Button disabled

```js
<Provider>
  <Button isDisabled>Default button</Button>{" "}
</Provider>
```

### Button icons

### Button loading
