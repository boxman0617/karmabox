import { SignOut } from "components/sign-out";
import Link from "next/link";
import {
  HeaderContainer,
  HeaderLogo,
  Box,
  SignInUpLink,
  SignInUpContainer,
} from "./styles";

export const PageHeader = ({ user }) => (
  <HeaderContainer>
    <HeaderLogo>
      <Box />
      <Link href="/">
        <a>KarmaBox</a>
      </Link>
    </HeaderLogo>
    {user ? (
      <SignOut username={user.username} />
    ) : (
      <SignInUpContainer>
        <Link href="/auth/sign-in">
          <SignInUpLink>Sign In</SignInUpLink>
        </Link>
        <Link href="/auth/sign-up">
          <SignInUpLink>Sign Up</SignInUpLink>
        </Link>
      </SignInUpContainer>
    )}
  </HeaderContainer>
);
