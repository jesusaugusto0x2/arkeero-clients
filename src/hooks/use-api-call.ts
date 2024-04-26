import { useState, useEffect } from "react";

export const useApiCall = <T>(url?: string) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T>();
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!url) {
      return;
    }

    const getData = async () => {
      setLoading(true);

      try {
        const resp = await fetch(url, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
          },
        });

        if (!resp.ok) {
          throw new Error(`Request failed with status ${resp.status}`);
        }

        const jsonResp = await resp.json();
        setData(jsonResp);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [url]);

  return { data, loading, error };
};
