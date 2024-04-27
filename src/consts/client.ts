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

export const CLIENT_ACCOUNT_OPTIONS = [
  {
    label: "Active",
    value: ClientAccount.BASIC,
  },
  {
    label: "Master",
    value: ClientAccount.MASTER,
  },
  {
    label: "Owner",
    value: ClientAccount.OWNER,
  },
];
