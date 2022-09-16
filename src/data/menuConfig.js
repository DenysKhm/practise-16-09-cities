import universityImg from '../assets/img/university.svg'
import facultyImg from '../assets/img/faculty.svg'
import { nanoid } from 'nanoid'


export const menuConfig = [
    {
        id: nanoid(),
        name: "Университет",
        img: universityImg,
        to: "university",
    },

    {
        id: nanoid(),
        name: "Факультеты",
        img: facultyImg,
        to: "faculty",
    },
];