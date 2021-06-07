import { SignOut } from "components/sign_out";
import Link from "next/link";

export const HomePageHeader = ({ user }) => (
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
);
