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
    return fetch(this.sdk.baseUrl`/v1/users/` + uid, {
      method: "GET",
      ...headersContent,
    }).then((user) => user.json());
  }

  canClaimUsername(username) {
    return fetch(this.sdk.baseUrl`/v1/user/username/check/` + username, {
      method: "GET",
      ...headersContent,
    }).then((username) =>
      username.status === 404
        ? { isAvailable: true, karma: 0 }
        : username.json()
    );
  }
}
