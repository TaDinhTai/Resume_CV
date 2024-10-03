import Footer from "../Footer";
import Header from "../Header";
import Menu from "../Menu";
import '../../style/css/style.css';
import { Outlet } from "react-router-dom";


function LayoutDefault() {
  
  return (
    <>
      <Header />
      <div className="center">
        <Menu />
        <div className="content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LayoutDefault;