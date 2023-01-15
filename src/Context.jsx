import { createContext, useState } from "react";

export const Detail = createContext();

function Context({children}) {
  const [rooms, setrooms] = useState([
    {
      name: "room 1",
      type: "conferenceHall",
      capicity: 150,
      aircondition: "yes",
      porjector: "yes",
      zoom: "yes",
      board: "no",
      favorite: false,
    },
    {
      name: "room 2",
      type: "conferenceHall",
      capicity: 200,
      aircondition: "yes",
      porjector: "no",
      zoom: "no",
      board: "yes",
      favorite: false,
    },
    {
      name: "room 3",
      type: "conferenceHall",
      capicity: 300,
      aircondition: "yes",
      porjector: "yes",
      zoom: "yes",
      board: "no",
      favorite: false,
    },

    {
      name: "room 4",
      type: "classes",
      capicity: 25,
      aircondition: "yes",
      porjector: "yes",
      zoom: "yes",
      board: "yes",
      favorite: false,
    },
    {
      name: "room 5",
      type: "classes",
      capicity: 20,
      aircondition: "no",
      porjector: "no",
      zoom: "no",
      board: "yes",
      favorite: false,
    },
    {
      name: "room 6",
      type: "classes",
      capicity: 35,
      aircondition: "yes",
      porjector: "no",
      zoom: "no",
      board: "yes",
      favorite: false,
    },
    {
      name: "room 7",
      type: "meetroom",
      capicity: 15,
      aircondition: "yes",
      porjector: "yes",
      zoom: "no",
      board: "yes",
      favorite: false,
    },
    {
      name: "room 8",
      type: "meetroom",
      capicity: 6,
      aircondition: "no",
      porjector: "no",
      zoom: "no",
      board: "yes",
      favorite: false,
    },
    {
      name: "room 9",
      type: "meetroom",
      capicity: 10,
      aircondition: "yes",
      porjector: "no",
      zoom: "no",
      board: "yes",
      favorite: false,
    },
  ]);
  const [meeting,setmeeting] =useState([]);
  
  return (
    <Detail.Provider value={{ rooms, setrooms, meeting, setmeeting }}>{children}</Detail.Provider>
  );
}

export default Context;
