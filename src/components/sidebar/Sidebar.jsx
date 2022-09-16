import React from "react";
import Menu from "../menu/Menu";
import user from "../../assets/img/heroicons-solid_user-circle.svg";
import s from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={s.aside}>
      <div className={s.logoContainer}></div>
      <div className={s.menuWrap}>
        <Menu />
        <div className={s.userWrap}>
          <img src={user} alt="user" />
          <span className={s.user}>Бил Гейтс</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
