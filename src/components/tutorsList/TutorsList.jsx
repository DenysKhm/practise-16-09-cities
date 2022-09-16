import React from "react";
import s from "./TutorsList.module.css";
import Paper from "../paper/Paper";
import PropTypes from "prop-types";
import phoneSvg from "../../assets/img/phone.svg";
import envelopeSvg from "../../assets/img/envelope.svg";
import locationSvg from "../../assets/img/location.svg";

const Tutor = ({
  firstName,
  lastName,
  patronymic,
  phone,
  email,
  city,
  options,
}) => {
  return (
    <Paper>
      <div className={s.tutorWrapper}>
        <div className={s.container}>
          <span>{firstName}</span>
          <span className={s.icon}>{lastName}</span>
          <span className={s.icon}>{patronymic}</span>
        </div>
        <div className={s.container}>
          <span>
            <img className={s.icon} src={phoneSvg} alt="phone" width="13px" />
            {phone}
          </span>
          <span>
            <img
              className={s.icon}
              src={envelopeSvg}
              alt="envelope"
              width="13px"
            />
            {email}
          </span>
          <span>
            <img
              className={s.icon}
              src={locationSvg}
              alt="location"
              width="12px"
            />
            {city}
          </span>
        </div>
        <div className={s.container}>
          <p> {options}</p>
        </div>
      </div>
    </Paper>
  );
};

const TutorsList = ({ tutors }) => {
  return (
    <div>
      {tutors.map(
        ({ firstName, lastName, patronymic, phone, email, city, options }) => {
          return (
            <Tutor
              key={email}
              firstName={firstName}
              lastName={lastName}
              patronymic={patronymic}
              phone={phone}
              email={email}
              city={city}
              options={options}
            />
          );
        }
      )}
    </div>
  );
};

export default TutorsList;

Tutor.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  patronymic: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  options: PropTypes.string,
};
