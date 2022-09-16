import React from "react";
import s from "./Card.module.css";
import Paper from "../paper/Paper";
import busket from "../../assets/img/busket.svg";
import edit from "../../assets/img/edit.svg";
import school from "../../assets/img/school.png";

const Card = () => {
  return (
    <Paper className={s.paperWrapper}>
      <div className={s.wrapper}>
        <img className={s.imgSchool} src={school} alt="school" width="80" />
        <p className={s.title}>Университет</p>
        <h3 className={s.schoolName}>MIT</h3>
        <div className={s.iconWrapper}>
          <img className={s.edit} src={edit} alt="edit" />
          <img className={s.busket} src={busket} alt="busket" />
        </div>
      </div>
    </Paper>
  );
};

export default Card;
