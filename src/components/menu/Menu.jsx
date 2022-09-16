import React from "react";
import { menuConfig } from "./../../data/menuConfig";
import s from "./Menu.module.css";
import PropTypes from "prop-types";

const MenuItem = ({ img, name, to }) => {
  return (
    <li>
      <a href={to} className={s.wrap}>
        <img src={img} alt={name} />
        <p className={s.text}>{name}</p>
      </a>
    </li>
  );
};

const Menu = () => {
  return (
    <nav>
      <ul>
        {menuConfig.map((data) => {
          const { id, img, name, to } = data;
          return <MenuItem key={id} img={img} name={name} to={to} />;
        })}
      </ul>
    </nav>
  );
};

export default Menu;

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.any.isRequired,
  to: PropTypes.string.isRequired,
};
