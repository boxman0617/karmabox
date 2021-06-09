import { SDKUser } from "./user";

const env = {
  host: process.env["NEXT_PUBLIC_SDK_HOST"],
  port: process.env["NEXT_PUBLIC_SDK_PORT"],
};

export class SDK {
  constructor() {
    this.user = new SDKUser(this);
  }

  // template string
  baseUrl(strings) {
    return `${env.host}:${env.port}/api${strings.join("")}`;
  }
}
