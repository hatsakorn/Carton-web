import Spinner from "./components/Spinner";
import useLoading from "./hooks/useLoading";
import Router from "./routes/Router";

function App() {
  const { loading } = useLoading();
  return (
    <>
      {loading && <Spinner />}
      <Router />
    </>
  );
}

export default App;
