import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";

import "./app.css";

export const App = () => {
  return (
    <div className="app-conteiner">
      <Navbar />
      <Outlet />
    </div>
  );
};
