import { style } from "styled-system";

export const maxScreen = style({
  // React prop name
  prop: "maxWidth",
  // The corresponding CSS property (defaults to prop argument)
  cssProperty: "maxWidth",
  // key for theme values
  key: "screens",
  // accessor function for transforming the value
  transformValue: n => `${n}px`
});
