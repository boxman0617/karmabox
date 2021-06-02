import { getUserByUsername } from "lib/api/service";
import { Avatar } from "components/avatar";

export const getServerSideProps = async ({ params: { username } }) => {
  const user = await getUserByUsername(username);

  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: { user },
  };
};

const UserPage = ({ user }) => (
  <div>
    <Avatar />
    <div>
      {user.username} -> {user.karma}
    </div>
  </div>
);
export default UserPage;
