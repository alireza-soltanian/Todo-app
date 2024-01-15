import { Route, Routes } from "react-router-dom";
import "./assets/App.css";
import { TodoWrapper } from "./components/TodoWrapper";
import { LoginSignup } from "./components/LoginSignup/LoginSignup";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TodoWrapper />} />
        <Route path="/loginsignup" element={<LoginSignup />} />
      </Routes>
 <ToastContainer/>
    </>
  );
}

export default App;
