import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { pageSSRUseAuth } from "lib/auth/ssr";
import { firebaseClient } from "lib/auth/client";

export const getServerSideProps = (ctx) => pageSSRUseAuth(ctx);

const Index = ({ user }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div>
        {user ? (
          <div>
            <div>{user.email}</div>
            <button
              onClick={async () => {
                await firebaseClient
                  .auth()
                  .signOut()
                  .then(() => {
                    router.push("/");
                  });
              }}
            >
              Sign out
            </button>
          </div>
        ) : (
          <div>
            <Link href="/auth/sign-in">
              <a>Sign In</a>
            </Link>
            <Link href="/auth/sign-up">
              <a>Sign Up</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default Index;
