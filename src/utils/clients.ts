import { Client, ClientInput, ClientStatus } from "@/models";

const parseClientToInput = (client: Client): ClientInput => ({
  name: client.name,
  description: client.description,
  status: client.status === ClientStatus.ACTIVE,
  accountType: client.accountType,
  contacts: client.contacts.join(","),
});

const parseInputValuesToClient = (input: ClientInput) => ({
  ...input,
  status: input.status ? ClientStatus.ACTIVE : ClientStatus.DISABLED,
  contacts: input.contacts?.split(",") || [],
});

export const ClientUtils = {
  parseClientToInput,
  parseInputValuesToClient,
};
