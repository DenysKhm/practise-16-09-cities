import React, { Component } from "react";
import Section from "../section/Section";
import s from "./Form.module.css";
import Button from "../button/Button";
import { nanoid } from 'nanoid'

// const INIT = {

// };

export class Form extends Component {
  state = {
    lastName: "",
    firstName: "",
    patronymic: "",
    phone: "",
    email: "",
    city: "",
  };

  static defaultProps = {
    callback: () => { },
  };

  handleFormTutorChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleFormTutorSubmit = (evt) => {
    evt.preventDefault();
    this.props.callback(this.state);
    this.setState({
      lastName: "",
      firstName: "",
      patronymic: "",
      phone: "",
      email: "",
      city: "",
    });
  };
  render() {
    const { lastName, firstName, patronymic, phone, email, city } = this.state;
    return (
      <div className={s.formWrapper}>
        <Section title="Добавление преподавателя">
          <form className={s.inputs} onSubmit={this.handleFormTutorSubmit}>
            <input
              name="lastName"
              value={lastName}
              type="text"
              placeholder="Фамилия"
              className={s.inputWrapper}
              onChange={this.handleFormTutorChange}
            />
            <input
              name="firstName"
              value={firstName}
              type="text"
              placeholder="Имя"
              className={s.inputWrapper}
              onChange={this.handleFormTutorChange}
            />
            <input
              name="patronymic"
              value={patronymic}
              type="text"
              placeholder="Отчество"
              className={s.inputWrapper}
              onChange={this.handleFormTutorChange}
            />
            <input
              name="phone"
              value={phone}
              type="text"
              placeholder="Телефон"
              className={s.inputWrapper}
              onChange={this.handleFormTutorChange}
            />
            <input
              name="email"
              value={email}
              type="text"
              placeholder="E-mail"
              className={s.inputWrapper}
              onChange={this.handleFormTutorChange}
            />
            <input
              name="city"
              value={city}
              type="text"
              placeholder="Город"
              className={s.inputWrapper}
              onChange={this.handleFormTutorChange}
            />
            <Button className={s.formInnerButton} title="Пригласить" />
          </form>
        </Section>
      </div>
    );
  }
}

export class FormCities extends Component {
  state = {
    cityText: "",
  };

  static defaultProps = {
    callback: () => { },
  };

  handleFormCityChange = (evt) => {
    const value = evt.target.value;
    this.setState({ cityText: value });
  };

  handleFormCitySubmit = (evt) => {
    evt.preventDefault();
    this.props.callback(this.state.cityText);
    this.setState({ cityText: "" });
  };

  render() {
    const { cityText } = this.state;
    return (
      <div className={s.formWrapper}>
        <Section title="Добавление города">
          <form className={s.inputs} onSubmit={this.handleFormCitySubmit}>
            <input
              value={cityText}
              type="text"
              placeholder="Город"
              className={s.inputWrapper}
              onChange={this.handleFormCityChange}
            />
            <Button className={s.formInnerButton} title="Добавить" />
          </form>
        </Section>
      </div>
    );
  }
}
export class FormFaculties extends Component {
  state = {
    facText: "",
  };
  static defaultProps = {
    callback: () => { },
  };

  handleFormFacChange = (evt) => {
    const value = evt.target.value;
    this.setState({ facText: value });
  };

  handleFormFacSubmit = (evt) => {
    evt.preventDefault();
    this.props.callback(this.state.facText, nanoid());
    this.setState({ facText: "" })
  };

  render() {
    const { facText } = this.state;
    return (
      <div className={s.formWrapper}>
        <Section title="Добавление факультета">
          <form className={s.inputs} onSubmit={this.handleFormFacSubmit}>
            <input
              value={facText}
              type="text"
              placeholder="Факультет"
              className={s.inputWrapper}
              onChange={this.handleFormFacChange}
            />
            <Button className={s.formInnerButton} title="Добавить" />
          </form>
        </Section>
      </div>
    );
  }
}
// export default Form
