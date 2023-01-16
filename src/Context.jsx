import { createContext, useState } from "react";

export const Detail = createContext();

function Context({ children }) {
  const [roomid, setroomid] = useState();
  const [rooms, setrooms] = useState([
    {
      id: 1,
      name: "room 1",
      type: "conferenceHall",
      capacity: 150,
      airconditioning: "yes",
      projector: "yes",
      zoom: "yes",
      whiteboard: "no",
      favorite: false,
      day2: [],
    },
    {
      id: 2,
      name: "room 2",
      type: "conferenceHall",
      capacity: 200,
      airconditioning: "yes",
      projector: "no",
      zoom: "no",
      whiteboard: "yes",
      favorite: false,
      day2: [],
    },
    {
      id: 3,
      name: "room 3",
      type: "conferenceHall",
      capacity: 300,
      airconditioning: "yes",
      projector: "yes",
      zoom: "yes",
      board: "no",
      favorite: false,
      day2: [],
    },

    {
      id: 4,
      name: "room 4",
      type: "classes",
      capacity: 25,
      airconditioning: "yes",
      projector: "yes",
      zoom: "yes",
      whiteboard: "yes",
      favorite: false,
      day2: [],
    },
    {
      id: 5,
      name: "room 5",
      type: "classes",
      capacity: 20,
      airconditioning: "no",
      projector: "no",
      zoom: "no",
      whiteboard: "yes",
      favorite: false,
      day2: [],
    },
    {
      id: 6,
      name: "room 6",
      type: "classes",
      capacity: 35,
      airconditioning: "yes",
      projector: "no",
      zoom: "no",
      whiteboard: "yes",
      favorite: false,
      day2: [],
    },
    {
      id: 7,
      name: "room 7",
      type: "meetroom",
      capacity: 15,
      airconditioning: "yes",
      projector: "yes",
      zoom: "no",
      whiteboard: "yes",
      favorite: false,
      day2: [],
    },
    {
      id: 8,
      name: "room 8",
      type: "meetroom",
      capacity: 6,
      airconditioning: "no",
      projector: "no",
      zoom: "no",
      whiteboard: "yes",
      favorite: false,
      day2: [],
    },
    {
      id: 9,
      name: "room 9",
      type: "meetroom",
      capacity: 10,
      airconditioning: "yes",
      projector: "no",
      zoom: "no",
      whiteboard: "yes",
      favorite: false,
      day2: [],
    },
  ]);
  const [meeting, setmeeting] = useState([]);

  return (
    <Detail.Provider
      value={{ rooms, setrooms, meeting, setmeeting, roomid, setroomid }}
    >
      {children}
    </Detail.Provider>
  );
}

export default Context;
