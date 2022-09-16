import React, { Component } from "react";
import PropTypes from "prop-types";
import Paper from "../paper/Paper";
import dots from "../../assets/img/heroicons-solid_dots-vertical.svg";
import s from "./Faculties.module.css";
import busketIMage from '../../assets/img/busket.svg';
import edit from '../../assets/img/edit.svg';
import Popup from "../popup/Popup";
import school from '../../assets/img/school.svg';
import Button from '../button/Button';
import hand from '../../assets/img/hand.svg';

export class Modal extends Component {
  state = {
    facultyInputText: '',
  }

  componentDidMount() {
    this.setState({facultyInputText: this.props.name})
  }


  handleChange = (evt) => {
    const { value } = evt.target;
    this.setState({ facultyInputText: value });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { facultyInputText } = this.state;
    this.props.changeDepartmentText(this.props.id, facultyInputText);
  }
  render() {
    const { facultyInputText } = this.state;
    const {deleteDepartment, id} = this.props;

    return <div className={s.modalWrapper}>
      <button type="button" className={s.modalItem} data-bs-toggle="modal" data-bs-target="#exampleModal">
        <img src={edit} alt='edit' />
        <span>редактировать</span>
      </button>
      <button className={s.modalItem} data-bs-toggle="modal" data-bs-target="#exampleModalDelete">
        <img src={busketIMage} alt='busket' />
        <span>удалить</span>
      </button>
      <Popup id="exampleModal">
        <div className="modal-header">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className={`modal-body ${s.popup_wrapper}`}>
          <img src={school} alt='' />
          <h3 className={s.h2}>Редактировать информацию о Городе</h3>
          <form className='mt-2' onSubmit={this.handleSubmit}>
            <div className='text-start'>Факультет:</div>
            <input className={s.input} type='text' placeholder='Факультет:' value={facultyInputText} onChange={this.handleChange} />
            <Button title="Сохранить" className='m-auto mt-4' data-bs-dismiss="modal" />
          </form>
        </div>
      </Popup>
      <Popup id="exampleModalDelete">
        <div className={`modal-body ${s.popup_wrapper}`}>
          <img src={hand} alt='' />
          <h3 className={s.h2}>Удаление факультета </h3>
          <div className='mt-2' onSubmit={this.handleSubmit}>
            <p>Будут удалены все материалы и информация об факультете.</p>
            <div className='d-flex justify-content-center gap-4'>
              <Button title="Нет" className={s.grayButton} data-bs-dismiss="modal"/>
              <Button title="Да" data-bs-dismiss="modal" callback={() => deleteDepartment(id)}/>
            </div>
          </div>
        </div>
      </Popup>
    </div>
  }

}

export class Faculty extends Component {
  state = {
    isModalOpen: false
  }

  changeModalState = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }))
  }

  render() {
    const { isModalOpen } = this.state;
    const { name, changeDepartmentText, id, deleteDepartment } = this.props;

    return (
      <li className={s.li}>
        <Paper className={s.facultyItem}>
          <p>{name}</p>
          <button className={s.button} onClick={this.changeModalState}>
            <img src={dots} alt="dots" />
          </button>
        </Paper>
        {isModalOpen && <Modal changeDepartmentText={changeDepartmentText} id={id} name={name} deleteDepartment={deleteDepartment} />}
      </li>
    );
  }
}

function Faculties({ department, changeDepartmentText, deleteDepartment }) {
  return (
    <ul className={s.facultyList}>
      {department.map(({ name, id }) => (
        <Faculty key={id} name={name} id={id} changeDepartmentText={changeDepartmentText} deleteDepartment={deleteDepartment} />
      ))}
    </ul>
  );
}

Faculties.propTypes = {
  department: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ),
};

export default Faculties;
