
export default function Favoritepage() {
  let listfav = [{}];
   listfav = JSON.parse(localStorage.getItem("favorite"));
        console.log(listfav);
    return (
      <div>
        <h1>favorite rooms</h1>
        {listfav.map((item, index) => {
          if (index>0) {
          return (
            <div>
              <p key={index}>
                <h4> name: {item?.single?.name}</h4>
                <br />
                Room Type: {item?.single?.type}
                <br />
                Capacity:{item?.single?.capacity}
                <br />
                Zoom: {item?.single?.zoom}
                <br />
                Air Conditioning: {item?.single?.airconditioning} <br />
                Projector: {item?.single?.projector} <br />
                Whiteboard: {item?.single?.whiteboard}
                <br />
                <br />
                <hr />
              </p>
            </div>
          );  
        }
        })}
      </div>
    );
  }

