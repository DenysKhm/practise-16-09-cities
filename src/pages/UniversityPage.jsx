import React, { Component } from "react";
import Card from "../components/card/Card";
import TutorList from "../components/tutorsList/TutorsList";
import tutors from "../data/tutors.json";
import Cities from "../components/cities/Cities";
import Faculties from "../components/faculties/Faculties";
import Section from "../components/section/Section";
import Paper from "../components/paper/Paper";
import s from "./UniversityPage.module.css";
import cat from "../assets/img/cat.svg";
import pin from "../assets/img/pin.svg";
import robot from "../assets/img/robot.svg";
import Button from "../components/button/Button";
import plus from "../assets/img/plus.svg";
import { Form, FormCities, FormFaculties } from "../components/form/Form";

export default class UniversityPage extends Component {
  state = {
    isTutorsFormOpen: false,
    isCitiesFormOpen: false,
    isFacultiesFormOpen: false,
    tutors: tutors.tutors,
    cities: tutors.cities,
    department: tutors.department,
  };

  addCity = (city) => {
    this.setState((prevState) => ({ cities: [...prevState.cities, city] }));
  };

  addFac = (department, id) => {
    console.log(department);
    this.setState((prevState) => ({
      department: [...prevState.department, { name: department, id }],
    }));
  };

  addTutor = (tutorItem) => {
    this.setState((prevState) => ({
      tutors: [...prevState.tutors, tutorItem],
    }));
  };

  changeFromOpen = () => {
    const { isTutorsFormOpen } = this.state;
    this.setState({ isTutorsFormOpen: !isTutorsFormOpen });
  };

  changeFromCitiesChange = () => {
    const { isCitiesFormOpen } = this.state;
    this.setState({ isCitiesFormOpen: !isCitiesFormOpen });
  };

  changeFromFacultiesChange = () => {
    const { isFacultiesFormOpen } = this.state;
    this.setState({ isFacultiesFormOpen: !isFacultiesFormOpen });
  };

  changeDepartmentText = (id, text) => {
    const {department} = this.state;
    const arrOfDepartments = department.map(el => el.id === id ? {...el, name: text} : el);
    this.setState({department: arrOfDepartments});
  }

  deleteDepartment = (id) => {
    const {department} = this.state;
    const arrOfDepartments = department.filter(el => el.id !== id);
    this.setState({department: arrOfDepartments});
  }

  changeCityName = (id, text) => {
    console.log(id, text);
    const {cities} = this.state;
    const arrOfDepartments = cities.map(el => el.id === id ? {...el, name: text} : el);
    this.setState({cities: arrOfDepartments});
  }

  deleteCityName = (id) => {
    const {cities} = this.state;
    const arrOfDepartments = cities.filter(el => el.id !== id);
    this.setState({cities: arrOfDepartments});
  }

  render() {
    const {
      isTutorsFormOpen,
      isCitiesFormOpen,
      isFacultiesFormOpen,
      cities,
      department,
      tutors,
    } = this.state;
    console.log(department);
    return (
      <>
        <Section title="Информация о университете" className={s.titleRight}>
          <div className={s.universityInfo}>
            <Card />
            <Paper>
              <p>
                Опыт, концентрат знаний и возможность избежать большинство
                ошибок при приеме на работу. Мы знаем, что хотят большинство
                локальных и иностранных компаний и можем вам это дать. А еще мы
                постоянно совершенствуем наши курсы программирования, добавляя
                туда что-то новое. Вы можете лично ознакомиться с историями
                успеха наших выпускников, чтобы убедиться в эффективности нашей
                методики обучения. Да, мы начнем с азов и самой простой
                информации. Знаем, что большинство людей приходят к нам с
                нулевыми знаниями.{" "}
              </p>
            </Paper>
          </div>
        </Section>
        <Section title="Преподаватели" img={cat}>
          <TutorList tutors={tutors} />
          {isTutorsFormOpen && <Form callback={this.addTutor} />}
          <Button
            title="Добавить преподавателя"
            img={plus}
            callback={this.changeFromOpen}
          />
        </Section>
        <Section title="Города" img={pin}>
          <Cities cities={cities} changeCityName={this.changeCityName} deleteCityName={this.deleteCityName}/>

          {isCitiesFormOpen && <FormCities callback={this.addCity} />}
          <Button
            title="Добавить город"
            img={plus}
            callback={this.changeFromCitiesChange}
          />
        </Section>
        <Section title="Факультеты" img={robot}>
          <Faculties department={department} changeDepartmentText={this.changeDepartmentText} deleteDepartment={this.deleteDepartment}/>

          {isFacultiesFormOpen && <FormFaculties callback={this.addFac} />}
          <Button
            title="Добавить факультет"
            img={plus}
            callback={this.changeFromFacultiesChange}
          />
        </Section>
      </>
    );
  }
}
