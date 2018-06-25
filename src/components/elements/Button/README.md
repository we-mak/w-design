| Props        | type                                               | default   | description                           |
| ------------ | -------------------------------------------------- | --------- | ------------------------------------- |
| appearance   | 'default', 'primary', 'warning', 'success', 'link' | 'default' | button appearance types               |
| elementSize  | 'sm', 'md', 'lg'                                   | 'md'      | button size                           |
| fluid        | boolean                                            |           | fluid button fits container           |
| form         | string                                             |           | roperty of a linked form              |
| type         | 'button', 'submit', 'reset'                        | 'button'  | button type, applied for non link tag |
| buttonRef    | Function                                           |           | pass ref callback to button component |
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
| onBlur       | `(e: SyntheticEvent<HTMLElement>) => void`         |           | button blur event handler             |
| onFocus      | `(e: SyntheticEvent<HTMLElement>) => void`         |           | button focus event handler            |
| autoFocus    | boolean                                            |           | autofocus button on mount             |

### Button appearances

```js
<div>
  <Button>Default button</Button>{" "}
  <Button appearance="primary">Primary button</Button>{" "}
  <Button appearance="danger">Danger button</Button>{" "}
  <Button appearance="warning">Warning button</Button>{" "}
  <Button appearance="success">Success button</Button>{" "}
  <Button href="#" appearance="link">
    Link button
  </Button>{" "}
  <Button appearance="link">Fake link button</Button>{" "}
</div>
```

### Button sizes

```js
<div>
  <Button elementSize="sm" appearance="primary">
    Small button
  </Button>{" "}
  <Button appearance="primary">Medium button</Button>{" "}
  <Button elementSize="lg" appearance="primary">
    Large button
  </Button>{" "}
</div>
```

### Fluid button

```js
<div>
  <Button appearance="primary" fluid>
    Fluid button
  </Button>
</div>
```

### Button disabled

```js
<div>
  <Button isDisabled>Default button</Button>{" "}
  <Button isDisabled appearance="primary">
    Primary button
  </Button>{" "}
  <Button isDisabled appearance="link">
    Link button
  </Button>
</div>
```

### Button loading

```js
<div>
  <Button isLoading appearance="primary">
    Default button
  </Button>{" "}
  <Button isLoading appearance="link">
    Link button
  </Button>{" "}
  <Button isLoading>Default button</Button>
</div>
```

### Button selected

```js
<div>
  <Button isSelected>Default button</Button>{" "}
  <Button isSelected appearance="link">
    Link button
  </Button>{" "}
  <Button isSelected appearance="primary">
    Primary button
  </Button>{" "}
  <Button isSelected appearance="danger">
    Danger button
  </Button>{" "}
  <Button isSelected appearance="warning">
    Warn button
  </Button>
</div>
```

### Button icons

TODO

### Button event handling

`onClick`
Handle click function.

`onBlur`
Handle blur function.

`onFocus`
Handle focus function.

```js
<Button onClick={() => alert("you clicked me")}>Default button</Button>
```

### Ref

```js
<Button buttonRef={r => (this.ref = ref)} onClick={() => console.log(ref)}>
  Ref button
</Button>
```

### Button auto focus

```js
<Button autoFocus appearance="primary">
  Default button
</Button>
```
