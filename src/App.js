import { Route, Routes } from "react-router-dom";
import "./assets/App.css";
import { TodoWrapper } from "./components/TodoWrapper";
import { LoginSignup } from "./components/LoginSignup/LoginSignup";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TodoWrapper />} />
        <Route path="/loginsignup" element={<LoginSignup />} />
      </Routes>
    </>
  );
}

export default App;
