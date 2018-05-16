| Props        | type                                               | default   | description                           |
| ------------ | -------------------------------------------------- | --------- | ------------------------------------- |
| appearance   | 'default', 'primary', 'warning', 'success', 'link' | 'default' | button appearance types               |
| elementSize  | 'sm', 'md', 'lg'                                   | 'md'      | button size                           |
| fluid        | boolean                                            |           | fluid button fits container           |
| form         | string                                             |           | roperty of a linked form              |
| type         | 'button', 'submit', 'reset'                        | 'button'  | button type, applied for non link tag |
| buttonRef    | HTMLElement                                        |           | reference to button component         |
| href         | string                                             |           | url of a tag button                   |
| target       | string                                             |           | passing target attribute              |
| className    | string                                             |           | custom className                      |
| id           | string                                             |           | set component id                      |
| ariaControls | string                                             |           | html aria-controls                    |
| ariaExpanded | boolean                                            |           | html aria-expanded                    |
| ariaHaspopup | boolean                                            |           | html aria-haspopup                    |
| ariaHaspopup | string                                             |           | html aria-label                       |
| isDisabled   | boolean                                            | false     | apply disabled button                 |
| isLoading    | boolean                                            | false     | apply loading state                   |
| isSelected   | boolean                                            | false     | seleted button                        |
| onClick      | `(e: SyntheticEvent<HTMLElement>) => void`         |           | button click event handler            |

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
  <Button appearance="link">Fake link button</Button>{" "}
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
  <Button isDisabled appearance="primary">
    Primary button
  </Button>{" "}
  <Button isDisabled appearance="link">
    Link button
  </Button>
</Provider>
```

### Button loading

```js
<Provider>
  <Button isLoading appearance="primary">
    Default button
  </Button>{" "}
  <Button isLoading appearance="link">
    Link button
  </Button>{" "}
  <Button isLoading>Default button</Button>
</Provider>
```

### Button icons