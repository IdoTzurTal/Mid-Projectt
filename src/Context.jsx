import { createContext, useState } from "react";

export const Detail = createContext();

function Context({children}) {
  const [favorite,setfavorite] =useState([{}])
  const [user, setuser] = useState();
  const [rooms, setrooms] = useState([
    {
      name: "room 1",
      type: "Lecture Hall",
      capacity: 150,
      airconditioning: "yes",
      projector: "yes",
      zoom: "yes",
      whiteboard: "no",
      favorite: false,
    },
    {
      name: "room 2",
      type: "Lecture Hall",
      capacity: 200,
      airconditioning: "yes",
      projector: "no",
      zoom: "no",
      whiteboard: "yes",
      favorite: false,
    },
    {
      name: "room 3",
      type: "Lecture Hall",
      capacity: 300,
      airconditioning: "yes",
      projector: "yes",
      zoom: "yes",
      whiteboard: "no",
      favorite: false,
    },

    {
      name: "room 4",
      type: "Classroom",
      capacity: 25,
      airconditioning: "yes",
      projector: "yes",
      zoom: "yes",
      whiteboard: "yes",
      favorite: false,
    },
    {
      name: "room 5",
      type: "Classroom",
      capacity: 20,
      airconditioning: "no",
      projector: "no",
      zoom: "no",
      whiteboard: "yes",
      favorite: false,
    },
    {
      name: "room 6",
      type: "Classroom",
      capacity: 35,
      airconditioning: "yes",
      projector: "no",
      zoom: "no",
      whiteboard: "yes",
      favorite: false,
    },
    {
      name: "room 7",
      type: "Meeting Room",
      capacity: 15,
      airconditioning: "yes",
      projector: "yes",
      zoom: "no",
      whiteboard: "yes",
      favorite: false,
    },
    {
      name: "room 8",
      type: "Meeting Room",
      capacity: 6,
      airconditioning: "no",
      projector: "no",
      zoom: "no",
      whiteboard: "yes",
      favorite: false,
    },
    {
      name: "room 9",
      type: "Meeting Room",
      capacity: 10,
      airconditioning: "yes",
      projector: "no",
      zoom: "no",
      whiteboard: "yes",
      favorite: false,
    },
  ]);
  const [meeting,setmeeting] =useState([]);
  
  return (
    <Detail.Provider value={{ rooms, setrooms, meeting, setmeeting , favorite,setfavorite,user, setuser}}>{children}</Detail.Provider>
  );
}

export default Context;
