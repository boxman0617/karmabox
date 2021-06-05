import { useRouter } from "next/router";
import { firebaseClient } from "lib/auth/client";

export const SignOut = ({ username }) => {
  const router = useRouter();

  const signOut = () =>
    firebaseClient
      .auth()
      .signOut()
      .then(() => router.push("/"));

  return (
    <div>
      <div>{username}</div>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
};
