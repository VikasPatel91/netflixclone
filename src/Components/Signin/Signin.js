import React from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
import { Login } from "../Service/User";




const Signin = (props) => {

  const [data, setdata] = React.useState({
    email: "",
    password: "",
  });

  const [newEntry, setNewEntry] = React.useState('')

  const HandleChange = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const HandleForm = async (e) => {
    e.preventDefault()
    if (data.email && data.password) {
      const res = await Login(data)
      if (res.status === 200) {
        alert('Sign In Success')
        setNewEntry(...newEntry, data.email)
          window.location.replace("/account-information")
      } else {
        alert('Invalid Data')
      }
    } else {
      alert('Fill data')
    }
  }
 const ontrigger=()=>{  props.getEmail(newEntry)} //dummy
  return (
    <>
      <div className="signin-height">
        <div className="signin-body ">
        </div>
        <span className="l-logo-p">
          <h1 className="l-logo">NETFLIX</h1>
        </span>

        <Link className="l-btn-signin" to={"/sign-up"}>
          Sign Up
        </Link>

        <form className="signup-form signin-form" onSubmit={HandleForm}>
          <h1 className="signin-heading">Sign In</h1>

          <div>
            <input
              type="text"
              id="signin-email"
              placeholder="Email Id"
              name="email"
              onChange={HandleChange}
            />

            <br />
            <br />

            <input
              type="password"
              id="signin-password"
              placeholder="Password"
              name="password"
              onChange={HandleChange}
            />
          </div>

          <div>
            <button className="signin-btn" onClick={ontrigger}>Sign In</button>
          </div>
          <div className="signin-new-user">
            New to Netflix? <Link to={"/sign-up"}>Sign up now.</Link>
          </div>
        </form>

      </div>
    </>
  );
};



export default Signin;
