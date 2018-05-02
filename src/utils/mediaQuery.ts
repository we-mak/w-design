import { css } from "./styled";

// Add mediaQ in styled component.
// e.g:
// const FakeInput = styled.div`
// position: absolute;
// left: 8em;
// top: 4.5em;
// ${mediaMaxWidth["xl"]`width: 50%`};
// `

const screens = {
  xl: 1280,
  lg: 960,
  md: 840,
  sm: 600,
  xs: 480
};

const mediaMaxWidth = Object.keys(screens).reduce((acc, key) => {
  acc[key] = ([...params]) => css`
    @media (max-width: ${screens[key] / 16}em) {
      ${css([...params] as any)};
    }
  `;
  return acc;
}, {});

export default mediaMaxWidth;
