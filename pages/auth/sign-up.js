import { useState } from "react";
import Head from "next/head";
import { ssrUseAuth } from "lib/auth/ssr";
import { useSDK } from "lib/sdk/context";

export const getServerSideProps = async (ctx) => {
  try {
    await ssrUseAuth(ctx);

    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: {},
    };
  } catch (e) {
    console.log("No auth session found, continue normally to sign up page");

    return {
      props: {},
    };
  }
};

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const { user } = useSDK();

  const doSubmit = async () => {
    await user.create({
      username,
      email,
      password: pass,
    });

    window.location.href = "/auth/sign-in";
  };
  return (
    <div>
      <Head>
        <title>KarmaBox - Sign Up</title>
      </Head>
      <form action={"javascript.void(0);"}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          autoComplete="username"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          autoComplete="email"
        />
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Password"
          autoComplete="current-password"
        />
        <button type="button" onClick={doSubmit}>
          Sign Up
        </button>
      </form>
    </div>
  );
};
export default SignUp;
