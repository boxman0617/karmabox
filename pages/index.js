import { pageSSRUseAuth } from "lib/auth/ssr";
import { HomePageHeader } from "components/home_page_header";
import { KarmaLiveFeed } from "../components/karma_live_feed";

export const getServerSideProps = (ctx) => pageSSRUseAuth(ctx);

const Index = ({ user }) => (
  <div>
    <HomePageHeader user={user} />
    <KarmaLiveFeed />
  </div>
);

export default Index;
