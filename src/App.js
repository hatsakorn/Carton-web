import Spinner from "./components/Spinner";
import useLoading from "./hooks/useLoading";
import Router from "./routes/Router";

function App() {
  const { loading } = useLoading();
  return (
    <>
      <div className="relative">
        {" "}
        {loading && <Spinner />}
        <Router />
      </div>
    </>
  );
}

export default App;
