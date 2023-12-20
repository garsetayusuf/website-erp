import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/pages";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/pages/login/Login";

function App() {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  return (
    <div className="App">
      {!isLoginPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
