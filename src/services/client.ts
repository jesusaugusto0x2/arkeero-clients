import { Client } from "@/models";

export async function getClients(): Promise<Client[]> {
  const resp = await fetch(`${process.env.BASE_URL}`, {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  });

  if (!resp.ok) {
    throw new Error(`Request failed with status ${resp.status}`);
  }

  return resp.json();
}
