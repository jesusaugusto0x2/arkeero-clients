export enum ClientStatus {
  DISABLED = "disabled",
  ACTIVE = "active",
}

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

export type ClientInput = {
  name: string;
  description: string;
  accountType?: ClientAccount;
  status?: string | number | readonly string[] | undefined;
  contacts?: string;
};
