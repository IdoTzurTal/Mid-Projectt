import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./homepage.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
function HomePage() {
  return (
    <div>
      <div>
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Tabs centered>
            <Tab label="cyber pro" />
            <Tab label="meeting room" />
            <Tab label="lecture room" />
            <Tab label="class" />
            <Tab label="about" />
            <Tab label="contact" />
            <Tab label="log in" />
          </Tabs>
        </Box>
      </div>
      <div id="mainhomeimg"></div>
      <div></div>
      <div id="flexendhome">
        <div id="flexicons">
          <a href="https://he-il.facebook.com/" target="_blank">
            <FaFacebookSquare className="icons" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <FaInstagramSquare className="icons" />
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
            <FaMailBulk className="icons" />
          </a>
        </div>
        <div id="info">
          <p>
            CYBERPRO Israel הינה השלוחה הישראלית של CYBERPRO Global, אשר הוקמה
            על מנת לתת מענה לצורך הולך וגדל באנשי מקצוע בשוק הישראלי והרחבת
            שיתוף הפעולה עם חברות טכנולוגיות ישראליות המפתחות כלי סייבר מתקדמים.
          </p>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
