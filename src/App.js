import Spinner from "./components/Spinner";
import useLoading from "./hooks/useLoading";
import Router from "./routes/Router";
import { ToastContainer } from "react-toastify";

function App() {
  const { loading } = useLoading();
  return (
    <>
      <div className="relative">
        {" "}
        {loading && <Spinner />}
        <Router />
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
}

export default App;
