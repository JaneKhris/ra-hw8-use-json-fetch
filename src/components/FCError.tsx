import { useJsonFetch } from "../hooks/useJsonFetch";

function FCError() {
  const [{ error }] = useJsonFetch(
    import.meta.env.VITE_URL_ERROR
  );

  return <div>FCError: {error?.message}</div>;
}

export default FCError;
