import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  const cardData = useLoaderData();
  return (
    <div className="Layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
