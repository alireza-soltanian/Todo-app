import React, { useState } from "react";
import "./LoginSignup.css";
import name from "../LoginSignup/name.png";
import email from "../LoginSignup/email.png";
import gender from "../LoginSignup/gender.png";
import phone from "../LoginSignup/phone.png";
import idcard from "../LoginSignup/idcard.png";
import address from "../LoginSignup/address.png";
import password from "../LoginSignup/password.png";
import registerSchema from "./validations";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App(){
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}
export default App;

export const LoginSignup = () => {
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newUser = {
      name: event.target[0].value,
      email: event.target[1].value,
      gender: event.target[2].value,
      phone: event.target[3].value,
      idcard: event.target[4].value,
      address: event.target[5].value,
      password: event.target[6].value,
    };

    try {
      const isvalid = await registerSchema.validate(newUser, {
        abortEarly: false,
      });
      console.log({ isvalid });
    } catch (err) {
      let errors = err.inner.reduce(
        (acc, err) => ({
          ...acc,
          [err.path]: err.message,
        }),
        {}
      );
      setErrors(errors);
    }
  };

  const [action] = useState("Login");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="input">
            <img src={name} alt="" />
            <input type="text" placeholder="Full Name" />
          </div>
          {errors.name && errors.name}

          <div className="input">
            <img src={email} alt="" />
            <input type="email" placeholder="Email" />
          </div>
          {errors.name && errors.name}

          <div className="input">
            <img src={gender} alt="" />
            <input type="text" placeholder="Gender" />
          </div>
          {errors.name && errors.name}

          <div className="input">
            <img src={phone} alt="" />
            <input type="text" placeholder="Phone Number" />
          </div>
          {errors.name && errors.name}

          <div className="input">
            <img src={idcard} alt="" />
            <input type="text" placeholder="ID card Number" />
          </div>

          <div className="input">
            <img src={address} alt="" />
            <input type="text" placeholder="Address" />
          </div>

          <div className="input">
            <img src={password} alt="" />
            <input type="password" placeholder="Password" />
          </div>
        </div>

        <div className="forgot-password">forgot Password?</div>

        <div className="submit-container">
          <button
            type="submit"
            className={action === "Login" ? "submit gray" : "submit"}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};
