import { pageSSRUseAuth } from "lib/auth/ssr";
import { PageHeader } from "components/page-header";
// import { KarmaLiveFeed } from "components/karma-live-feed";

export const getServerSideProps = (ctx) => pageSSRUseAuth(ctx);

const Index = ({ user }) => (
  <div>
    <PageHeader user={user} />
    {/*<KarmaLiveFeed />*/}
  </div>
);

export default Index;
