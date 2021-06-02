import { useState } from "react";
import Head from "next/head";
import { firebaseClient } from "lib/auth/client";
import { ssrUseAuth } from "lib/auth/ssr";

export const getServerSideProps = async (ctx) => {
  try {
    console.log("gssp:1");
    await ssrUseAuth(ctx);
    console.log("gssp:2");

    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: {},
    };
  } catch (e) {
    console.log("No auth session found, continue normally to sign in page");

    return {
      props: {},
    };
  }
};

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div>
      <Head>
        <title>KarmaBox - Sign In</title>
      </Head>
      <form action={"javascript.void(0);"}>
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
        <button
          type="button"
          onClick={async () => {
            await firebaseClient.auth().signInWithEmailAndPassword(email, pass);
            window.location.href = "/";
          }}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};
export default SignIn;
