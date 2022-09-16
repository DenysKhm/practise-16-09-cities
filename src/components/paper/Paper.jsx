import React from "react";
import s from "./Paper.module.css";
import PropTypes from "prop-types";
import cn from 'classnames';

const Paper = ({ children, className }) => {
  return <div className={cn(s.paperWrapper, className)}>{children}</div>;
};

Paper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paper;
