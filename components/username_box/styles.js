import styled, { css } from "styled-components";
import { rem } from "polished";

const CircleShadow = css`
  box-shadow: ${rem(6)} ${rem(8)} ${rem(1)} rgba(0, 0, 0, 0.3);
`;

const sizes = {
  container: rem(260),
  circle: rem(200),
  innerCircle: rem(188),
  fontSize: rem(60),
};

export const UsernameCircleContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: ${rem(40)};

  width: ${sizes.container};
  height: ${sizes.container};
`;
export const UsernameOuterBox = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${sizes.circle};
    height: ${sizes.circle};

    border-radius: 5%;

    background-color: ${theme.colors.usernameBoxBackground};
    ${CircleShadow}
  `
);
export const UsernameInnerCircle = styled.div(
  ({ theme }) => css`
    width: ${sizes.innerCircle};
    height: ${sizes.innerCircle};

    border-radius: 5%;

    background-color: ${theme.colors.usernameInnerBoxBackground};
    ${CircleShadow}
  `
);
export const Username = styled.div(
  ({ theme }) => css`
    position: absolute;

    top: 50%;
    margin-top: ${rem(-30)};

    color: ${theme.colors.usernameBoxText};
    font-family: "Odibee Sans", cursive;
    font-size: ${sizes.fontSize};
    text-shadow: ${rem(3)} ${rem(3)} ${rem(4)} rgba(0, 0, 0, 0.5);
  `
);
export const Karma = styled.div(
  ({ theme }) => css`
    position: absolute;
    bottom: ${rem(66)};

    color: ${theme.colors.usernameBoxKarmaText};
    font-family: "Odibee Sans", cursive;
    font-size: ${rem(26)};
    text-shadow: ${rem(3)} ${rem(3)} ${rem(4)} rgba(0, 0, 0, 0.5);
  `
);
