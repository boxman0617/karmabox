import nookies from "nookies";
import { getUserByUidSQL } from "lib/api/service";
import { firebaseAdmin } from "./admin";

export const ssrUseAuth = async (ctx) => {
  const cookies = nookies.get(ctx);
  const fbUser = await firebaseAdmin.auth().verifyIdToken(cookies.token);
  const user = await getUserByUidSQL(fbUser.uid);

  return {
    ...user,
    firebase: fbUser,
  };
};
export const pageSSRUseAuth = async (ctx) => {
  try {
    const user = await ssrUseAuth(ctx);

    return {
      props: { user },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};
export const pageSSRUseAuthAndRedirectToUser = async (ctx) => {
  try {
    const user = await ssrUseAuth(ctx);

    return {
      redirect: {
        permanent: false,
        destination: `/u/${user.username}`,
      },
      props: {},
    };
  } catch (e) {
    console.log("No auth session found...");

    return {
      props: {},
    };
  }
};
