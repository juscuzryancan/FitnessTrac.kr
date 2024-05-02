import { Navbar } from "../components";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
