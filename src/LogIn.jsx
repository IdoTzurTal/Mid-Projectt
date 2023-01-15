import { useState } from "react";
import './Login.css';
export default function LogIn() {
  const [password, setpassword] = useState();
  const [company, setcompany] = useState();
  // המשתנה user צריך להיות בקונטקסט
  const [user, setuser] = useState();

  function handleSubmit(e) {
   
    e.preventDefault();
    if (user === "Admin" && password === "1234" && company === "cyberpro") {
      setuser(user);
      // navigate("."); לעבור לדף הראשי
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
          <input type="submit" value={"log in"} />
        </form>
      </div>
    </div>
  );
}
