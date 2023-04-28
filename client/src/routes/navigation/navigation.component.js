import { Outlet, NavLink } from "react-router-dom";
import "./navigation.styles.scss";

import { ReactComponent as CrwnLogo } from "../../Assets/crown.svg";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <NavLink className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </NavLink>
        <div className="nav-links-container">
          <NavLink className="nav-link" to="/shop">
            SHOP
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
