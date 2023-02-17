import { useState } from "react";
import Modal from "./components/Modal";
import LoginPage from "./page/LoginPage";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <button onClick={() => setOpen(true)} className="bg-blue-500">
          Modal
        </button>
        <Modal open={open} onClose={() => setOpen(false)} title={"Modal"}>
          <LoginPage />
        </Modal>
      </div>
    </>
  );
}

export default App;
