import { useState } from "react";
import './Login.css';
import { Navigate , usenavigate } from "react-router-dom";
import HomeAfterLogin from "./HomeAfterLogin";
export default function LogIn() {
  const [password, setpassword] = useState();
  const [company, setcompany] = useState();
  // המשתנה user צריך להיות בקונטקסט
  const [user, setuser] = useState();

  function handleSubmit(e) {
   
    e.preventDefault();
    if (user === "Admin" && password === "1234" && company === "cyberpro") {
      setuser(user);
      Navigate("/HomeAfterLogin"); 
      alert("ssadd")
    }
    else if (user === "Lecturer" && password === "1234" && company === "cyberpro") {
      setuser(user);
      // navigate("./main"); לעבור לדף הראשי
    }
    else if (user === "Teacher" && password === "1234" && company === "cyberpro") {
      setuser(user);
      // navigate("./main"); לעבור לדף הראשי
    }  
    else {
      alert("Account doesn't exist")
    }
  }

  return (
    <div className="buyalogin">
    <div className="login">
      <div className="loginform">
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <select
            name="Company"
            id="company"
            onChange={(e) => setcompany(e.target.value)}
          >
            <option value="selectcompany">Select Company</option>
            <option value="cyberpro">CyberPro</option>
            <option value="company2">company 2</option>
            <option value="company3">company 3</option>
            <option value="company4">company 4</option>
            <option value="company5">company 5</option>
          </select>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setuser(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <input type="submit" value={"Log In"} />
        </form>
      </div>
    </div>
    </div>
  );
}
