import { pxToRem } from "helpers/converters";
import { styled } from "styled-components";
import colors from "styles/colors";

export default styled.header`
  position: sticky;
  top: 0;
  background: white;
  width: ${pxToRem(200)};
  border-right: ${pxToRem(1)} solid ${colors.borderColor};
  padding: ${pxToRem(50)} ${pxToRem(5)};
  height: 100vh;

  .header__list {
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(10)};
  }

  .header__link {
    display: flex;
    align-items: center;
    gap: ${pxToRem(10)};
    color: ${colors.grey};
    text-decoration: none;
    padding: ${pxToRem(8)};
    border-radius: ${pxToRem(4)};

    &:hover {
      background: ${colors.sidebarLinkHoverBg};
      color: ${colors.textColor};
    }
  }

  .header__link--active,
  .header__link--active:hover {
    background: ${colors.main};
    color: white;
  }

  @media (max-width: 600px) {
    & {
      min-width: ${pxToRem(100)};
      max-width: ${pxToRem(100)};
    }

    .header__link {
      flex-direction: column;
    }
  }
`;
