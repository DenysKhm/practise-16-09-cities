import React, { Component } from "react";
import PropTypes from "prop-types";
import Paper from "../paper/Paper";
import dots from "../../assets/img/heroicons-solid_dots-vertical.svg";
import s from "./Cities.module.css";
import busketIMage from "../../assets/img/busket.svg";
import edit from "../../assets/img/edit.svg";
import Popup from "../popup/Popup";
import school from "../../assets/img/school.svg";
import Button from "../button/Button";
import hand from "../../assets/img/hand.svg";

export class Modal extends Component {
  state = {
    cityInputText: "",
  };

  componentDidMount() {
    this.setState({ cityInputText: this.props.name });
  }

  handleChange = (evt) => {
    const { value } = evt.target;
    this.setState({ cityInputText: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { cityInputText } = this.state;
    this.props.changeCityName(this.props.id, cityInputText);
  };
  render() {
    const { cityInputText } = this.state;
    const { deleteCityName, id } = this.props;

    return (
      <div className={s.modalWrapper}>
        <button
          type="button"
          className={s.modalItem}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src={edit} alt="edit" />
          <span>редактировать</span>
        </button>
        <button
          className={s.modalItem}
          data-bs-toggle="modal"
          data-bs-target="#exampleModalDelete"
        >
          <img src={busketIMage} alt="busket" />
          <span>удалить</span>
        </button>
        <Popup id="exampleModal">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className={`modal-body ${s.popup_wrapper}`}>
            <img src={school} alt="" />
            <h3 className={s.h2}>Редактировать информацию о Городе</h3>
            <form className="mt-2" onSubmit={this.handleSubmit}>
              <div className="text-start">Факультет:</div>
              <input
                className={s.input}
                type="text"
                placeholder="Факультет:"
                value={cityInputText}
                onChange={this.handleChange}
              />
              <Button
                title="Сохранить"
                className="m-auto mt-4"
                data-bs-dismiss="modal"
              />
            </form>
          </div>
        </Popup>
        <Popup id="exampleModalDelete">
          <div className={`modal-body ${s.popup_wrapper}`}>
            <img src={hand} alt="" />
            <h3 className={s.h2}>Удаление факультета </h3>
            <div className="mt-2" onSubmit={this.handleSubmit}>
              <p>Будут удалены все материалы и информация об факультете.</p>
              <div className="d-flex justify-content-center gap-4">
                <Button
                  title="Нет"
                  className={s.grayButton}
                  data-bs-dismiss="modal"
                />
                <Button
                  title="Да"
                  data-bs-dismiss="modal"
                  callback={() => deleteCityName(id)}
                />
              </div>
            </div>
          </div>
        </Popup>
      </div>
    );
  }
}

export class City extends Component {
  state = {
    isModalOpen: false
  }

  changeModalState = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }))
  }

  render() {
    const {isModalOpen} = this.state;
    const {city, id, changeCityName, deleteCityName} = this.props;

    return (
      <li className={s.li}>
        <Paper className={s.cityItem}>
          <p>{city}</p>
          <button className={s.button} onClick={this.changeModalState}>
            <img src={dots} alt="dots" />
          </button>
        </Paper>
        {isModalOpen && <Modal id={id} name={city} changeCityName={changeCityName} deleteCityName={deleteCityName}/>}
      </li>
    );
  }
}

function Cities({ cities, changeCityName, deleteCityName }) {
  return (
    <ul className={s.cityList}>
      {cities.map(({name, id}) => (
        <City key={id} city={name} id={id} changeCityName={changeCityName} deleteCityName={deleteCityName}/>
      ))}
    </ul>
  );
}

Cities.propTypes = {
  cities: PropTypes.array.isRequired,
};

export default Cities;
