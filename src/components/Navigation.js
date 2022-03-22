// Router
import { Link } from "react-router-dom";

// CSS Modules
import classes from "./Navigation.module.css";

import logo from "../res/DOYOGA-logo.png";
import { useNavigate } from "react-router-dom";

function MainNavigation() {
  let navigate = useNavigate();

  function toReServePage(){
    navigate("/reserve");
  }

  function toCheckPage(){
    navigate("/search");
  }

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
            <button className={classes.topContectBtn} onClick={toReServePage}>立即預約</button>
            <button className={classes.topContectBtn} onClick={toCheckPage}>聯絡我們</button>
            <input className={classes.mobileMenuBtn} type="submit" name="" value=""/>
      </div>
    </header>
  );
}

export default MainNavigation;