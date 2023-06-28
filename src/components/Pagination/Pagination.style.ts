import { pxToRem } from "helpers/converters";
import { styled } from "styled-components";

export default styled.div`
  display: flex;
  align-items: center;
  gap: ${pxToRem(10)};

  #mui-select {
    padding-top: ${pxToRem(10)};
    padding-bottom: ${pxToRem(10)};
  }
`;
