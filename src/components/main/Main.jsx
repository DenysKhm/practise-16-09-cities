import React from "react";
import s from "./Main.module.css";
import PropTypes from "prop-types";

const Main = ({ children }) => {
  return <div className={s.mainWrapper}>{children}</div>;
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
