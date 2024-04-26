export enum ClientStatus {
  DISABLED = "disabled",
  ACTIVE = "active",
}

// export type ClientAccunt = "master" | "owner" | "basic";

export enum ClientAccount {
  MASTER = "master",
  OWNER = "owner",
  BASIC = "basic",
}

export type Client = {
  accountType: ClientAccount;
  contacts: string[];
  description: string;
  id: string;
  name: string;
  status: ClientStatus;
};
