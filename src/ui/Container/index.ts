import { pxToRem } from "helpers/converters";
import styled from "styled-components";

export default styled.div`
  width: 100%;
  max-width: ${pxToRem(1220)};
  padding: 0 ${pxToRem(15)};
  margin: 0 auto;
`;
