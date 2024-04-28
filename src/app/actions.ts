"use server";

export async function handleClientData(data: any) {
  console.log({ clientData: data });
  return data;
}
