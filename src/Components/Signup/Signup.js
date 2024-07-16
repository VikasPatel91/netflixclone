import React from "react";
import "./Sighup.css";
import { Link } from "react-router-dom";
import { Insert } from "../Service/User";
export default function SignUp() {
  const [data, setdata] = React.useState({
    email: "",
    password: "",
  });
  const HandleChange = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const HandleForm = async (e) => {
    e.preventDefault();
    if (data.email && data.password) {
      const res = await Insert(data);
      if (res.status === 200) {
        alert("Account Created");
        window.location.replace("/movies");
      } else {
        alert("Account not Created");
      }
    } else {
      alert("Fill Data");
    }
  };
  return (
    <>
      <div className="signup-body">
        <span className="signup-logo">
          <h1 className="signup-logo-h">NETFLIX</h1>
        </span>
        <Link className="l-btn-signin" to={"/sign-in"}>
          Sign In
        </Link>
        <form className="signup-form" action="/movies" onSubmit={HandleForm}>
          <h1 className="signup-heading">
            Create a password to start your membership
          </h1>
          <p className="sign-up-para">
            Just a few more steps and you're done! We hate paperwork, too.
          </p>
          <div className="signup-inputs">
            <input
              type="text"
              id="signup-email"
              placeholder="Email Id"
              name="email"
              onChange={HandleChange}
            />

            <br />
            <br />

            <input
              type="password"
              id="signup-password"
              placeholder="Password"
              name="password"
              onChange={HandleChange}
            />
          </div>

          <div>
            <button className="signup-btn">Sign up</button>
          </div>
        </form>
      </div>
    </>
  );
}
