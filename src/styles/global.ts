import { pxToRem } from "helpers/converters";
import styled from "styled-components";

export default styled.div`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: ${pxToRem(14)};
  }

  ul,
  ol,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;
