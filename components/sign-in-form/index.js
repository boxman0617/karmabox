import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { firebaseClient } from "lib/auth/client";
import { useSDK } from "lib/sdk/context";
import {
  FormElement,
  FormRememberAndForgottenContainer,
  SignInFormContainer,
  SignInTitle,
  SignUpContainer,
  StyledSignInForm,
} from "./styles";

export const SignInForm = () => {
  const router = useRouter();
  const sdk = useSDK();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const fbAuthUser = await firebaseClient
      .auth()
      .signInWithEmailAndPassword(email, pass);
    const user = await sdk.user.getByUid(fbAuthUser.user.uid);

    await router.push(`/u/${user.username}`);
  };

  return (
    <SignInFormContainer>
      <SignInTitle>Sign In</SignInTitle>
      <StyledSignInForm action="javascript.void(0);" onSubmit={onSubmit}>
        <FormElement>
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            autoComplete="email"
          />
        </FormElement>
        <FormElement>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Password"
            autoComplete="current-password"
          />
        </FormElement>
        <FormRememberAndForgottenContainer>
          <div>
            <input type="checkbox" /> Remember Me
          </div>
          <div>
            <Link href="/forgot/password">
              <a>Forgot Password</a>
            </Link>
          </div>
        </FormRememberAndForgottenContainer>
        <input type="submit" value="Sign In" />
      </StyledSignInForm>
      <SignUpContainer>
        Don't have an account?{" "}
        <Link href="/auth/sign-up">
          <a>Sign Up</a>
        </Link>
      </SignUpContainer>
    </SignInFormContainer>
  );
};
