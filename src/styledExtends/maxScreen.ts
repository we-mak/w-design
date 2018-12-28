import { style } from "styled-system";

const maxScreen = style({
  prop: "maxscreen",
  cssProperty: "maxWidth",
  key: "screens",
  transformValue: n => `${n}px`
});

export default maxScreen;
