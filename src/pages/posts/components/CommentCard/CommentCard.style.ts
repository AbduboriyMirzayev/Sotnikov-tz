import { pxToRem } from "helpers/converters";
import { styled } from "styled-components";
import colors from "styles/colors";

export default styled.div`
  .comments__title {
    font-size: ${pxToRem(14)};
    margin: 0;
    text-transform: capitalize;
  }

  .comments__email {
    color: ${colors.textColor};
    font-size: ${pxToRem(12)};
  }
`;
