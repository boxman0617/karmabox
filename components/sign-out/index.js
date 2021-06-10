import { useRouter } from "next/router";
import { firebaseClient } from "lib/auth/client";
import Link from "next/link";
import { SignOutContainer, SignOutLink, UserLink } from "./styles";

export const SignOut = ({ username }) => {
  const router = useRouter();

  const signOut = (e) => {
    e.preventDefault();

    return firebaseClient
      .auth()
      .signOut()
      .then(() => router.push("/"));
  };

  return (
    <SignOutContainer>
      <Link href={`/u/${username}`}>
        <UserLink>{username}</UserLink>
      </Link>
      <SignOutLink href="javascript.void(0);" onClick={signOut}>
        Sign Out
      </SignOutLink>
    </SignOutContainer>
  );
};
