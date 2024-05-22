import "./App.scss";
import Header from "./components/Header/Header";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>

      <div className="main-container"></div>
      <div className="sidenav-container"></div>
      <div className="app-content"></div>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
