import { useState } from "react";
import Head from "next/head";
import { pageSSRUseAuthAndRedirectToUser } from "lib/auth/ssr";
import styled, { css } from "styled-components";
import { SignUpForm } from "components/sign-up-form";
import { SignUpUsernameAvailability } from "components/sign-up-username-availability";
import { UsernameBox } from "components/username-box";
import { rem } from "polished";
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
const LeftNote = styled.div(
  ({ theme }) => css`
    font-size: ${rem(20)};
    font-weight: bold;
    color: ${theme.colors.noteColor};
  `
);
const UsernameAvailability = styled.div(
  ({ theme, isAvailable }) => css`
    color: ${isAvailable
      ? theme.colors.usernameIsAvailable
      : theme.colors.usernameIsNotAvailable};
    font-size: ${rem(30)};
    font-weight: bold;
  `
);

export const getServerSideProps = async (ctx) =>
  pageSSRUseAuthAndRedirectToUser(ctx);

const SignUp = () => {
  const [user, setUser] = useState({
    username: "",
    karma: 0,
    isAvailable: true,
  });

  return (
    <>
      <Head>
        <title>KarmaBox - Sign Up</title>
      </Head>
      <PageContainer>
        <LeftSide>
          <SignUpUsernameAvailability>
            {user.username.length >= 3 ? (
              <>
                <UsernameBox user={user} />
                <UsernameAvailability isAvailable={user.isAvailable}>
                  {user.isAvailable ? "Available!" : "Taken!"}
                </UsernameAvailability>
              </>
            ) : (
              <LeftNote>Search for your Username!</LeftNote>
            )}
          </SignUpUsernameAvailability>
        </LeftSide>
        <RightSide>
          <SignUpForm
            onCheck={({ isAvailable, username, karma }) => {
              setUser({
                username,
                isAvailable,
                karma,
              });
            }}
            onUsernameChange={({ username }) => {
              setUser({
                ...user,
                username,
              });
            }}
          />
        </RightSide>
      </PageContainer>
    </>
  );
};
export default SignUp;
