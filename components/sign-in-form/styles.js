import styled, { css } from "styled-components";
import { rem } from "polished";

export const SignInFormContainer = styled.div(
  ({ theme }) => css`
    width: 70%;
    a {
      color: ${theme.colors.signInLink};
    }
  `
);
export const SignInTitle = styled.div`
  text-align: center;
  font-size: ${rem(30)};
  padding-bottom: ${rem(30)};
`;
export const StyledSignInForm = styled.form(
  ({ theme }) => css`
    input[type="submit"] {
      width: 100%;
      margin: ${rem(30)} 0;
      padding: ${rem(16)} ${rem(10)};
      border: ${rem(1)} solid ${theme.colors.inputBorder};
      background-color: ${theme.colors.submitButtonBackground};
      border-radius: ${rem(4)};
    }
  `
);
export const FormElement = styled.div(
  ({ theme }) => css`
    label,
    input {
      display: block;
    }
    label {
      padding-bottom: ${rem(6)};
    }
    input[type="text"],
    input[type="password"] {
      width: 100%;
      padding: ${rem(16)} ${rem(10)};
      border: ${rem(1)} solid ${theme.colors.inputBorder};
      border-radius: ${rem(4)};
    }
    padding-bottom: ${rem(10)};
  `
);
export const FormRememberAndForgottenContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SignUpContainer = styled.div`
  text-align: center;
`;
