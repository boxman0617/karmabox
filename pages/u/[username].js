import { getUserByUsername } from "lib/api/service";
import { UsernameBox } from "components/username-box";
import styled from "styled-components";
import { pageSSRUseAuth } from "lib/auth/ssr";
import { PageHeader } from "components/page-header";

const UserPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const getServerSideProps = async (ctx) => {
  const {
    params: { username },
  } = ctx;
  const user = await getUserByUsername(username);

  if (!user) {
    return {
      notFound: true,
    };
  }

  const { props: authUserProps } = await pageSSRUseAuth(ctx);
  return {
    props: { user, currentUser: authUserProps.user || null },
  };
};

const UserPage = ({ user }) => (
  <>
    <PageHeader user={user} />
    <UserPageContainer>
      <UsernameBox user={user} />
    </UserPageContainer>
  </>
);
export default UserPage;
