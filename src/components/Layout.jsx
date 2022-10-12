import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="Layout backdrop-blur-sm">
      <Header />
      <Outlet />
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default Layout;
