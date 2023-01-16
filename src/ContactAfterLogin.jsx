import { NavLink } from "react-router-dom";
import { Tab } from "@mui/material";
import { Box } from "@mui/system";
import Tabs from "@mui/material/Tabs";
import { useContext, useState } from "react";
import HomeAfterLogin from "./HomeAfterLogin";
import Search from "./Search";
import Favoritepage from "./Favorite";
import Admin from "./Admin";
import Rooms from "./Rooms";
import AboutAfterLogin from "./AboutAfterLogin"
import ContactAfterLogin from "./ContactAfterLogin"
import { Detail } from "./Context";

function Contact() {
  const { user, setuser } = useContext(Detail);
  setuser(localStorage.getItem("user"));
  const [request, setRequest] = useState();
  const {userRequest, setUserRequest} = useContext(Detail);
  const [detail, setDetail] = useState();
  const {requests, setRequests} = useContext(Detail);
  function handleSubmit(e) {
    e.preventDefault();
    setRequests([
      ...requests,
      { tag: request, userName: userRequest, details: detail },
    ]);
    console.log(requests);
  }
  return (
    <div>
        <div>
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Tabs className="contactnav" centered>
            <NavLink to="/HomeAfterLogin" element={<HomeAfterLogin />}>
              {" "}
              <Tab label="Home" />
            </NavLink>
            <NavLink to="/Rooms" element={<Rooms />}>
              {" "}
              <Tab label="our rooms" />
            </NavLink>
            <NavLink to="/Aboutafterlogin" element={<AboutAfterLogin />}>
              {" "}
              <Tab label="about" />
            </NavLink>
            <NavLink to="/Contactafterlogin" element={<ContactAfterLogin />}>
              {" "}
              <Tab label="contact" />
            </NavLink>
            <NavLink to="/Search" element={<Search />}>
              {" "}
              <Tab label="search" />
            </NavLink>
            <NavLink to="/Favoritepage" element={<Favoritepage />}>
              {" "}
              <Tab label="favorite" />
            </NavLink>
            { user == '"Admin"' && (
              <NavLink to="/Admin" element={<Admin />}>
                <Tab label="Admin" />
              </NavLink>
            )} 
          </Tabs>
        </Box>
        </div>
      <div id="content">
        <img
          id="officecomms"
          src="OfficeCommunication-1.jpg"
          alt="image unavailable"
        />
        <div class="wedlovecontain">
          <h6 id="wedlove">We'd love to hear from you!</h6>
        </div>
        <div class="contactdetailscontain">
          <p id="contactdetails">
            Whether your question is about membership, leasing our facilities,
            technical problems or anything else,
            <br /> our amazing support team is ready to answer any and all of
            your questions! <br />
            107-31265 Wheel Ave. Abbotsford, BC, V2T 6H2 Canada (+1) 555 3215
            (Free international calls!)
          </p>
          {/* להוסיף אופציה לשליחת מייל עם ספריית mail.js */}
        </div>
        <form onSubmit={handleSubmit}>
          <select
            name="company"
            id="company"
            onChange={(e) => setRequest(e.target.value)}
          >
            <option value="selectreasson">select reasson</option>
            <option value="callit">call it</option>
            <option value="meetingroom">meeting room</option>
          </select>
          <input
            type="text"
            placeholder="user name"
            onChange={(e) => setUserRequest(e.target.value)}
          />
          <input
            type="text"
            placeholder="Detail"
            onChange={(e) => setDetail(e.target.value)}
          />
          <input type="submit" value={"send to admin"} />
        </form>
      </div>
    </div>
  );
}

export default Contact;
