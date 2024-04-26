import { ClientStatus, ClientAccount } from "@/models";

export const CLIENT_STATUS_LABELS: { [key in ClientStatus]: string } = {
  [ClientStatus.ACTIVE]: "Active",
  [ClientStatus.DISABLED]: "Disabled",
};

export const CLIENT_ACCOUNT_LABELS: { [key in ClientAccount]: string } = {
  [ClientAccount.BASIC]: "Basic ",
  [ClientAccount.MASTER]: "Master",
  [ClientAccount.OWNER]: "Owner",
};
