import * as React from "react";
import { Typo, Container, AnchorScroll } from "w-design";
import { CodeBlock } from "../components/CodeBlock";

const Example = () => {
  return (
    <Container>
      <AnchorScroll destination="target">
        <span role="img">🚀</span>To target
      </AnchorScroll>
    </Container>
  );
};

const AnchorScrollPage: React.FunctionComponent<any> = () => (
  <>
    <Typo appearance="h1">AnchorScroll</Typo>
    Smooth scrolling when click to an anchor link in the page
    <Example />
    <br />
    <p>
      AnchorScroll intially only use liner animation but you can pick one of below to set whatever
      kind you want
    </p>
    <CodeBlock
      exampleCode={`
...
easeInQuad: (t: number) => t * t,
easeOutQuad(t: number) {
  return t * (2 - t);
}
easeInOutQuad(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
easeInCubic(t: number) {
  return t * t * t;
}
easeOutCubic(t: number) {
  return --t * t * t + 1;
}
easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}
easeInQuart(t: number) {
  return t * t * t * t;
}
easeOutQuart(t: number) {
  return 1 - --t * t * t * t;
}
easeInOutQuart(t: number) {
  return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
}
easeInQuint(t: number) {
  return t * t * t * t * t;
}
easeOutQuint(t: number) {
  return 1 + --t * t * t * t * t;
}
easeInOutQuint(t: number) {
  return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
}
...
    `}
    />
    <div id="target">
      <span role="img">💰</span>Target
    </div>
  </>
);

export default AnchorScrollPage;
