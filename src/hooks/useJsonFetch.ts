import { useState, useEffect } from "react";

interface IStatus {
  status: string;
}

type JsonFetchResult = {
  data: IStatus | null;
  loading: boolean;
  error: Error | null;
};

export const useJsonFetch = (url: string, opts?: string): [JsonFetchResult] => {
  const [data, setData] = useState<IStatus | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const json: IStatus = await response.json();

        setData(json);

        setError(null);
      } catch (e) {
        if (e instanceof Error) setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, opts]);

  return [{ data, loading, error }];
};
