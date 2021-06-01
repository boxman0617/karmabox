import { SDKUser } from "./user";

export class SDK {
  constructor() {
    this.user = new SDKUser(this);
  }

  // template string
  baseUrl(strings) {
    return `http://localhost:3000/api${strings.join("")}`;
  }
}
