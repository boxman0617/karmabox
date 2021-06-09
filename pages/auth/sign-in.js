import Head from "next/head";
import { pageSSRUseAuthAndRedirectToUser } from "lib/auth/ssr";
import { SignInForm } from "components/sign-in-form";
import styled, { css } from "styled-components";
import media from "styled-media-query";

const LeftSide = styled.div``;
const RightSide = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${theme.colors.signInRightBackground};
    color: ${theme.colors.signInFontColor};
  `
);
const PageContainer = styled.div`
  ${media.lessThan("small")`${css`
    display: grid;
    grid-template-columns: 1fr;

    ${LeftSide} {
      display: none;
    }
  `}`}
  ${media.between("small", "large")`${css`
    grid-template-columns: 50% 1fr;
  `}`}
  display: grid;
  grid-template-columns: 60% 1fr;
  height: 100%;

  font-family: Helvetica;
`;

export const getServerSideProps = async (ctx) =>
  pageSSRUseAuthAndRedirectToUser(ctx);

const SignIn = () => (
  <>
    <Head>
      <title>KarmaBox - Sign In</title>
    </Head>
    <PageContainer>
      <LeftSide />
      <RightSide>
        <SignInForm />
      </RightSide>
    </PageContainer>
  </>
);
export default SignIn;
