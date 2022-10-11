import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="Layout backdrop-blur-sm">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
