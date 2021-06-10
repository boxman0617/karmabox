import styled, { css } from "styled-components";
import { rem } from "polished";

export const SignOutContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const UserLink = styled.a(
  ({ theme }) => css`
    display: block;
    margin-right: ${rem(10)};
    cursor: pointer;
    color: ${theme.colors.headerLinks};
    &:hover {
      color: ${theme.pallet.dark01};
    }
  `
);
export const SignOutLink = styled.a(
  ({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.headerSignOutLink};
    border: ${rem(1)} solid ${theme.colors.inputBorder};
    padding: ${rem(2)} ${rem(6)};
    text-decoration: none;
    background-color: ${theme.colors.bodyBackground};
  `
);
