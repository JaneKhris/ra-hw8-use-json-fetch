import { useJsonFetch } from "../hooks/useJsonFetch";

function Loading() {
  const [{ loading }] = useJsonFetch(
    import.meta.env.VITE_URL_LOADING
  );

  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && <div>Loaded</div>}
    </>
  );
}

export default Loading;
