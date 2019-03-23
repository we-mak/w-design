# Modal component

Useful for pop-up, message confirmation dialog

| Props       | type                                           | default | description                                |
| ----------- | ---------------------------------------------- | ------- | ------------------------------------------ |
| onClose     | (e: React.SyntheticEvent<HTMLElement>) => void |         | on close modal event                       |
| modalTitle  | string                                         |         |                                            |
| modalBody   | ReactChild                                     |         | Main content of the modal                  |
| modalFooter | ReactChild                                     |         | Where we can put the actions or modal info |
| size        | string                                         | "md"    | Size of modal                              |
