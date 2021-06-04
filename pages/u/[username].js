import { getUserByUsername } from "lib/api/service";
import { UsernameBox } from "components/username_box";
import styled from "styled-components";

const UserPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
  <UserPageContainer>
    <UsernameBox user={user} />
  </UserPageContainer>
);
export default UserPage;
