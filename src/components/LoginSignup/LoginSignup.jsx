import React, { useState } from "react";
import "./LoginSignup.css";
import name from "../LoginSignup/name.png";
import email from "../LoginSignup/email.png";
import gender from "../LoginSignup/gender.png";
import phone from "../LoginSignup/phone.png";
import idcard from "../LoginSignup/idcard.png";
import address from "../LoginSignup/address.png";
import password from "../LoginSignup/password.png";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";


export const LoginSignup = () => {

  const Schema = yup.object().shape({
    name :yup.string().min(4).max(12).required(),
    email : yup.string().email().required(),
    gender : yup.string(),
    phone : yup.number().required(),
    idcard : yup.number().required(),
    address : yup.string(),
    password : yup.string().min(8).max(15).required(),
  })
  const { register, handleSubmit , formState:{errors}} = useForm({resolver : yupResolver(Schema)})

  const onFormSubmit = (data) => {
    toast.success("Successful sign Up!", {
      position: toast.POSITION.TOP_RIGHT,
    });
    console.log("submiiit")
    console.log(data)
  }
  const [action] = useState("Login");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="inputs">
          <div className="input">
            <img src={name} alt="" />
            <input type="text" placeholder="Full Name" {...register("name")} />
          </div>
          {errors.name && <p>{errors.name?.message}</p>}

          <div className="input">
            <img src={email} alt="" />
            <input type="email" placeholder="Email" {...register("email")} />
          </div>
          {errors.name && <p>{errors.email?.message}</p>}

          <div className="input">
            <img src={gender} alt="" />
            <input type="text" placeholder="Male/Female" {...register("gender")}/>
          </div>  
          {errors.name && <p>{errors.gender?.message}</p>}   
            
          <div className="input">
            <img src={phone} alt="" />
            <input type="text" placeholder="Phone Number" {...register("phone")}/>
          </div>
          {errors.name && <p>{errors.phone?.message}</p>}

          <div className="input">
            <img src={idcard} alt="" />
            <input type="text" placeholder="ID card Number" {...register("idcard")}/>
          </div>
          {errors.name && <p>{errors.idcard?.message}</p>}

          <div className="input">
            <img src={address} alt="" />
            <input type="text" placeholder="Address" {...register("address")} />
          </div>
          {errors.name && <p>{errors.address?.message}</p>}

          <div className="input">
            <img src={password} alt="" />
            <input type="password" placeholder="Password" {...register("password")}/>
          </div>
          {errors.name && <p>{errors.password?.message}</p>}
        </div>

        <div className="forgot-password">forgot Password?</div>

        <div className="submit-container">
          <button type="submit" className={"submit"}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};
