import { useJsonFetch } from "../hooks/useJsonFetch";

function Data() {
  const [{ data }] = useJsonFetch(
    import.meta.env.VITE_URL_DATA
  );

  return <div>Data: {JSON.stringify(data)}</div>;
}

export default Data;
