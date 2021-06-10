import styled, { css } from "styled-components";
import { rem } from "polished";

export const HeaderContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding: ${rem(20)};

    box-shadow: ${rem(1)} ${rem(1)} ${rem(6)} rgba(0, 0, 0, 0.3);
    margin-bottom: ${rem(40)};

    background-color: ${theme.colors.pageHeaderBackground};
  `
);

export const Box = styled.div(
  ({ theme }) => css`
    background-color: ${theme.pallet.dark01};
    width: ${rem(18)};
    height: ${rem(18)};
    border: ${rem(2)} solid ${theme.pallet.light02};
    box-shadow: ${rem(1)} ${rem(1)} ${rem(1)} rgba(0, 0, 0, 0.5);
    margin-right: ${rem(6)};
  `
);
export const HeaderLogo = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;

    a {
      color: ${theme.colors.headerLogo};
      font-weight: bold;
      font-size: ${rem(20)};
      text-shadow: ${rem(1)} ${rem(1)} ${rem(1)} rgba(0, 0, 0, 0.5);
      text-decoration: none;
    }
  `
);
export const SignInUpLink = styled.a(
  ({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.headerSignOutLink};
    border: ${rem(1)} solid ${theme.colors.inputBorder};
    padding: ${rem(2)} ${rem(8)};
    text-decoration: none;
    background-color: ${theme.colors.bodyBackground};
  `
);
export const SignInUpContainer = styled.div`
  width: ${rem(146)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
