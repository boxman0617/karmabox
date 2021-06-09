import { SDKUser } from "./user";

export class SDK {
  constructor() {
    this.user = new SDKUser(this);
  }

  // template string
  baseUrl(strings) {
    return `${process.env["NEXT_PUBLIC_CLIENT_SDK_URL"]}/api${strings.join(
      ""
    )}`;
  }
}
