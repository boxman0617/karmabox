import Link from "next/link";
import { pageSSRUseAuth } from "lib/auth/ssr";
import { SignOut } from "components/sign-out";

export const getServerSideProps = (ctx) => pageSSRUseAuth(ctx);

const Index = ({ user }) => (
  <div>
    <div>
      {user ? (
        <SignOut username={user.username} />
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

export default Index;
