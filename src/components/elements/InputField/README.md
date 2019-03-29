| Props        | type                                             | default    | description                   |
| ------------ | ------------------------------------------------ | ---------- | ----------------------------- |
| inputRef     | React.MutableRefObject                           |            | input refs                    |
| appearance   | string                                           | "standard" |                               |
| type         | string                                           | "text"     | type of input                 |
| name         | string                                           |            | field name                    |
| className    | string                                           |            | class name of input field     |
| autoComplete | string                                           | "off"      | control browser auto complete |
| size         | string                                           |            |                               |
| tabIndex     | number                                           |            | tabindex order                |
| value        | string                                           |            |                               |
| defaultValue | string                                           |            |                               |
| isRequired   | boolean                                          |            |                               |
| isError      | boolean                                          |            |                               |
| isValid      | boolean                                          |            |                               |
| isWarning    | boolean                                          |            |                               |
| isFocus      | boolean                                          | false      |                               |
| isDisabled   | boolean                                          | false      |                               |
| onChange     | (e: React.ChangeEvent<HTMLInputElement>) => void |            |                               |
| onBlur       | (e: React.SyntheticEvent<HTMLElement>) => void   |            |                               |
