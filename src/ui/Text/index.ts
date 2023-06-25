import { pxToRem } from "helpers/converters";
import styled from "styled-components";
import colors from "styles/colors";

export default styled.p`
  font-size: ${pxToRem(14)};
  margin: 0;
  color: ${colors.grey};
`;
