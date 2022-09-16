import React from "react";
import cn from "classnames";
import s from "./Section.module.css";

const Section = ({ children, title, className, img }) => {
  return (
    <div>
      {img ? (
        <div className={s.titleWrapper}>
          <img src={img} alt="" />
          <h2 className={cn(s.title, className)}>{title}</h2>
        </div>
      ) : (
        <h2 className={cn(s.title, className)}>{title}</h2>
      )}
      {children}
    </div>
  );
};

export default Section;
