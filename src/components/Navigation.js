// Router
import { Link } from "react-router-dom";

// CSS Modules
import classes from "./Navigation.module.css";

import logo from "../res/DOYOGA-logo.png";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <img className={classes.logo} src={logo}></img>
      <nav>
        <ul>
          <li>
            <Link to="/">課程介紹</Link>
          </li>
          <li>
            <Link to="/">瑜伽空間</Link>
          </li>
          <li>
            <Link to="/">當月課表</Link>
          </li>
        </ul>
      </nav>
      <div className={classes.topRight}>
            <button className={classes.topContectBtn}>立即預約</button>
            <button className={classes.topContectBtn}>聯絡我們</button>
            <input className={classes.mobileMenuBtn} type="submit" name="" value=""/>
      </div>
    </header>
  );
}

export default MainNavigation;