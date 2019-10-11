| Props        | type                                             | default    | description                   |
| ------------ | ------------------------------------------------ | ---------- | ----------------------------- |
| inputRef     | (ref: HTMLInputElement) => {}                    |            | input refs                    |
| appearance   | string                                           | "standard" |                               |
| type         | string                                           | "text"     | html input type               |
| name         | string                                           |            | field name                    |
| className    | string                                           |            | class name of input field     |
| autoComplete | string                                           | "off"      | control browser auto complete |
| size         | string: `sm`, `md`, `lg`                         | "md"       | size of input field           |
| tabIndex     | number                                           |            | tabindex order                |
| value        | string                                           |            | input value                   |
| defaultValue | string                                           |            |                               |
| isRequired   | boolean                                          | undefined  | required field                |
| isError      | boolean                                          | undefined  | error status of input value   |
| isValid      | boolean                                          | undefined  | input value validate          |
| isWarning    | boolean                                          | undefined  | warn status of input value    |
| isFocus      | boolean                                          | false      |                               |
| isDisabled   | boolean                                          | false      |                               |
| onChange     | (e: React.ChangeEvent<HTMLInputElement>) => void |            |                               |
| onBlur       | (e: React.SyntheticEvent<HTMLElement>) => void   |            |                               |
