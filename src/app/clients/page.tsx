"use client";

import { useApiCall } from "@/hooks";
import { Client } from "@/models";

export default function ClientsPage() {
  const { data, loading, error } = useApiCall<Client[]>(
    process.env.NEXT_PUBLIC_BASE_URL
  );

  if (loading) {
    return <main>Loading...</main>;
  }

  if (error) {
    return <main>Error</main>;
  }

  return (
    <main>
      <ul>
        {data?.map((client) => (
          <li key={client.id}>{client.name}</li>
        ))}
      </ul>
    </main>
  );
}
