/**
 * Generic styles
 * Collection of style that can be shared over components to keep styling consistent
 */

import { css } from "styled-components";

// Style for list of inline items
export const InlineGroupItemStyle = css`
  flex: 1 0 auto;
  display: flex;
  & + &::before {
    content: "";
    display: inline-block;
    width: 0.2rem;
  }
`;
