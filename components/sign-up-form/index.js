import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSDK } from "lib/sdk/context";
import {
  FormElement,
  SignInContainer,
  SignUpFormContainer,
  SignUpTitle,
  StyledSignOutForm,
} from "./styles";
import { UniqueLiveUsername } from "./unique-live-username";

export const SignUpForm = ({ onCheck, onUsernameChange }) => {
  const { user } = useSDK();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [hasErrors, setHasErrors] = useState(false);

  const isDisabled =
    hasErrors ||
    username.length === 0 ||
    email.length === 0 ||
    pass.length === 0;

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!isDisabled) {
      await user.create({
        username,
        email,
        password: pass,
      });
      await router.push("/auth/sign-in");
    }
  };

  return (
    <SignUpFormContainer>
      <SignUpTitle>Sign Up</SignUpTitle>
      <StyledSignOutForm action="javascript.void(0);" onSubmit={onSubmit}>
        <UniqueLiveUsername
          value={username}
          onChange={(e) => {
            onUsernameChange({ username: e.target.value });
            setUsername(e.target.value);
          }}
          onCheck={({ isAvailable, karma }) => {
            onCheck({ isAvailable, username, karma });
            setHasErrors(!isAvailable);
          }}
        />
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
        <input disabled={isDisabled} type="submit" value="Sign Up" />
      </StyledSignOutForm>
      <SignInContainer>
        Have an account?{" "}
        <Link href="/auth/sign-in">
          <a>Sign In</a>
        </Link>
      </SignInContainer>
    </SignUpFormContainer>
  );
};
