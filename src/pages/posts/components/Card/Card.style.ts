import { pxToRem } from "helpers/converters";
import { styled } from "styled-components";
import colors from "styles/colors";

export default styled.div`
  padding: ${pxToRem(15)};
  box-shadow: 0 ${pxToRem(1)} ${pxToRem(2)} rgb(111 111 111 / 16%),
    0 ${pxToRem(1)} ${pxToRem(6)} rgb(131 131 131 / 23%);
  border-radius: ${pxToRem(4)};
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(10)};

  .post__title {
    font-size: ${pxToRem(20)};
    text-transform: capitalize;
    margin: 0;
  }
  .post__subtitle {
    margin: 0;
    color: ${colors.grey};
  }

  .posts__button {
    border: none;
    display: flex;
    align-items: center;
    gap: ${pxToRem(5)};
    color: ${colors.grey};
    padding: ${pxToRem(5)};
    border-radius: ${pxToRem(2)};
    cursor: pointer;
    background: none;

    &:hover {
      background: ${colors.sidebarLinkHoverBg};
      color: ${colors.textColor};
    }
  }

  .posts__button--active,
  .posts__button--active:hover {
    background: ${colors.main};
    color: #fff;
  }

  .post__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .comments {
    height: ${pxToRem(120)};
    overflow: auto;
    margin-top: ${pxToRem(20)};
    padding: ${pxToRem(5)} 0;
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(15)};
  }
`;
