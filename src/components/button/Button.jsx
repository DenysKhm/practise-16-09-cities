import React from "react";
import s from "./Button.module.css";
import cn from "classnames";

const Button = ({ title, img, callback, className, ...props }) => {
  return (
    <button className={cn(s.buttonWrapper, className)} onClick={callback} {...props}>
      {img && <img src={img} alt="" />}
      {title}
    </button>
  );
};

export default Button;
