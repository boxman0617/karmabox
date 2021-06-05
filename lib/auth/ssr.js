import nookies from "nookies";
import { firebaseAdmin } from "./admin";

export const ssrUseAuth = (ctx) => {
  const cookies = nookies.get(ctx);
  return firebaseAdmin.auth().verifyIdToken(cookies.token);
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
