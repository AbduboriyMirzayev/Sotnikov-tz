import { pxToRem } from "helpers/converters";
import { styled } from "styled-components";

export default styled.div`
  .posts__header {
    margin-bottom: ${pxToRem(20)};
  }

  .posts__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${pxToRem(20)};
    margin-bottom: ${pxToRem(20)};
  }
`;
