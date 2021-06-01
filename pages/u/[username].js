import { getUserByUsername } from "lib/api/service";

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
    {user.username} -> {user.karma}
  </div>
);
export default UserPage;
