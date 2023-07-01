import { pxToRem } from "helpers/converters";
import { styled } from "styled-components";

export default styled.section`
  max-width: ${pxToRem(400)};
  margin: 0 auto;
  padding: ${pxToRem(8)};

  .home__wrapper {
    display: grid;
    grid-template-columns: 1fr 0.3fr;
  }

  .home__input input {
    text-align: right;
  }

  .home__input--disabled input {
    padding-right: ${pxToRem(14)};
    border-right: ${pxToRem(1)} solid #00000042;
    color: #000;
    margin-right: ${pxToRem(14)};
    -webkit-text-fill-color: #000;
    font-weight: bold;
  }

  .home__input-without-right-radius .MuiOutlinedInput-notchedOutline {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .home__select .MuiOutlinedInput-notchedOutline {
    border-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .home__icon {
    margin: 0 auto;
    display: block;
    color: #00000082;
  }

  .home__alert-text {
    margin: 0;
    max-width: ${pxToRem(300)};
  }
`;
