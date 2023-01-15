import { createContext, useState } from "react";

export const Detail = createContext();

function Context({children}) {
  const [rooms, setrooms] = useState([
    {
      name: "room 1",
      type: "conferenceHall",
      capacity: 150,
      airconditioning: "yes",
      projector: "yes",
      zoom: "yes",
      whiteboard: "no",
      favorite: false,
    },
    {
      name: "room 2",
      type: "conferenceHall",
      capacity: 200,
      airconditioning: "yes",
      projector: "no",
      zoom: "no",
      whiteboard: "yes",
      favorite: false,
    },
    {
      name: "room 3",
      type: "conferenceHall",
      capacity: 300,
      airconditioning: "yes",
      projector: "yes",
      zoom: "yes",
      board: "no",
      favorite: false,
    },

    {
      name: "room 4",
      type: "classes",
      capacity: 25,
      airconditioning: "yes",
      projector: "yes",
      zoom: "yes",
      whiteboard: "yes",
      favorite: false,
    },
    {
      name: "room 5",
      type: "classes",
      capacity: 20,
      airconditioning: "no",
      projector: "no",
      zoom: "no",
      whiteboard: "yes",
      favorite: false,
    },
    {
      name: "room 6",
      type: "classes",
      capacity: 35,
      airconditioning: "yes",
      projector: "no",
      zoom: "no",
      whiteboard: "yes",
      favorite: false,
    },
    {
      name: "room 7",
      type: "meetroom",
      capacity: 15,
      airconditioning: "yes",
      projector: "yes",
      zoom: "no",
      whiteboard: "yes",
      favorite: false,
    },
    {
      name: "room 8",
      type: "meetroom",
      capacity: 6,
      airconditioning: "no",
      projector: "no",
      zoom: "no",
      whiteboard: "yes",
      favorite: false,
    },
    {
      name: "room 9",
      type: "meetroom",
      capacity: 10,
      airconditioning: "yes",
      projector: "no",
      zoom: "no",
      whiteboard: "yes",
      favorite: false,
    },
  ]);

  return (
    <Detail.Provider value={{ rooms, setrooms }}>{children}</Detail.Provider>
  );
}

export default Context;
