import styled, { css } from "styled-components";
import { rem } from "polished";

export const SignUpFormContainer = styled.div(
  ({ theme }) => css`
    width: 70%;
    a {
      color: ${theme.colors.signInLink};
    }
  `
);
export const SignUpTitle = styled.div`
  text-align: center;
  font-size: ${rem(30)};
  padding-bottom: ${rem(30)};
`;
export const StyledSignOutForm = styled.form(
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
const BaseInput = css(
  ({ theme }) => css`
    width: 100%;
    padding: ${rem(16)} ${rem(10)};
    border: ${rem(2)} solid ${theme.colors.inputBorder};
    border-radius: ${rem(4)};

    &:focus {
      outline: none;
      border: ${rem(2)} solid ${theme.colors.inputFocusBorder};
    }
  `
);
export const FormInput = styled.input(
  ({ theme, value, isAvailable }) => css`
    ${BaseInput};

    border: ${rem(2)} solid
      ${value.length === 0
        ? theme.colors.inputBorder
        : isAvailable
        ? theme.colors.inputBorderSuccess
        : theme.colors.inputBorderError} !important;
  `
);
export const FormElement = styled.div(
  ({ theme }) => css`
    position: relative;
    label,
    input {
      display: block;
    }
    label {
      padding-bottom: ${rem(6)};
    }
    input[type="text"],
    input[type="password"] {
      ${BaseInput};
    }
    padding-bottom: ${rem(10)};

    svg {
      position: absolute;
      top: 40%;
      left: ${rem(-40)};
      path,
      rect {
        fill: ${theme.colors.loadingSpinner};
      }
    }
  `
);
export const SignInContainer = styled.div`
  text-align: center;
`;
export const ErrorMessage = styled.div(
  ({ theme }) => css`
    padding: ${rem(10)} 0 ${rem(4)};
    color: ${theme.colors.inputBorderError};
  `
);
