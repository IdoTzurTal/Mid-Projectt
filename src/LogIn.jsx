import { useContext, useState } from "react";
import './Login.css';
import { Navigate , useNavigate } from "react-router-dom";
import HomeAfterLogin from "./HomeAfterLogin";
import { Detail } from "./Context";
export default function LogIn() {
  const [password, setpassword] = useState();
  const [company, setcompany] = useState();
  const Navigate = useNavigate();
  // המשתנה user צריך להיות בקונטקסט
  const {user, setuser} = useContext(Detail)
  function handleSubmit(e) {
    e.preventDefault();
    if (user == "Admin" && password == "1234" && company == "cyberpro") {
      setuser(user);
      Navigate("/HomeAfterLogin"); 
      // alert("ssadd")
      // console.log(user);
    }
    else if (user === "Lecturer" && password === "1234" && company === "cyberpro") {
      setuser(user);
      Navigate("/HomeAfterLogin");
    }
    else if (user === "Teacher" && password === "1234" && company === "cyberpro") {
      setuser(user);
      Navigate("/HomeAfterLogin");
    }  
    else {
      alert("Account doesn't exist")
    }

    localStorage.setItem('user',JSON.stringify(user) );
    JSON.parse(user)
  }

  return (
    <div className="login">
      <div className="loginform">
        <h1>log in</h1>
        <form onSubmit={handleSubmit}>
          <select
            name="company"
            id="company"
            onChange={(e) => setcompany(e.target.value)}
          >
            <option value="selectcompany">select company</option>
            <option value="cyberpro">cyberpro</option>
            <option value="company2">company 2</option>
            <option value="company3">company 3</option>
            <option value="company4">company 4</option>
            <option value="company5">company 5</option>
          </select>
          <input
            type="text"
            placeholder="user name"
            onChange={(e) => setuser(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <input type="submit" value={"log in"} onSubmit={(e)=>handleSubmit(e)} />
        </form>
      </div>
    </div>
  );
}
