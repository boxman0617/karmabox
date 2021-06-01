const headersContent = {
  headers: {
    "Content-Type": "application/json",
  },
};

export class SDKUser {
  constructor(sdk) {
    this.sdk = sdk;
  }

  create({ username, email, password }) {
    return fetch(this.sdk.baseUrl`/v1/user`, {
      method: "POST",
      ...headersContent,
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    }).then((user) => user.json());
  }

  getByUid(uid) {
    return fetch(this.sdk.baseUrl`/v1/user/` + uid, {
      method: "GET",
      ...headersContent,
    }).then((user) => user.json());
  }
}
