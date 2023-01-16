import { useContext } from "react";
import { Detail } from "./Context";

export default function Favoritepage(params) {
  let listfav = [{}];
   listfav = JSON.parse(localStorage.getItem("favorite"));
        console.log(listfav);
    return (
      <div>
        <h1>favorite rooms</h1>
        {listfav.map((single, index) => {
          return (
            <div>
              <p key={index}>
                <h4> name: {single.name}</h4>
                <br />
                Room Type: {single.type}
                <br />
                Capacity:{single.capacity}
                <br />
                Zoom: {single.zoom}
                <br />
                Air Conditioning: {single.airconditioning} <br />
                Projector: {single.projector} <br />
                Whiteboard: {single.whiteboard}
                <br />
                <br />
                <hr />
              </p>
            </div>
          );
        })}
      </div>
    );
  }

// JSON.parse(localStorage.getItem("favorite"));
