import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__header">
          <img
            className="sidebar__header--image"
            src="https://th.bing.com/th?id=OIP.nJ1p10eqhU_ty886dt6uXQHaHY&w=250&h=249&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt="logo"
          />
          <div className="sidebar__header--title">Sales Manager</div>
        </div>
        <div className="sidebar__menu">
          <ul className="menu">
            <li className="active">
              <NavLink className="navlink" to="/">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink" to="/document">
                Document
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink" to="/">
                Support
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Menu;
