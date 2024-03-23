"use client"

import "@/style/auth.css";
import React from 'react';
import Image from 'next/image';

import { useFormik } from "formik";

import { signUpSchema } from "@/Schema"
import logo from "../../../../public/image/social-pulse-logo-transparent.png";

const Page = () => {
  const initialValues = {
    firstName: "", lastName: "", email: "", phoneNumber: "", password: "", confirmPassword: ""
  };
  const Formik = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) =>{
      console.log("values", values);
      action.resetForm();
    }
  });
  return (
    <div className="auth-main">
      <div className='auth-sec'>
        <div className='header flex flex-col items-center'>
          <Image className="logo" src={logo} alt="Logo" width={100} />
          <p className="heading">Social Pulse</p>
        </div>
        <div className="break-line h-[1px] w-full"></div>
        <form className="content w-full grid gap-3 grid-cols-2 mt-5" onSubmit={Formik.handleSubmit}>
          <TextField label={"First Name"} type={"text"} placeholder={"Enter First Name"} name={"firstName"} gridCols={"col-span-2 sm:col-span-1"} value={Formik.values.firstName} handleChange={Formik.handleChange} handleBlur={Formik.handleBlur} error={Formik.errors.firstName} touched={Formik.touched.firstName} />
          <TextField label={"Last Name"} type={"text"} placeholder={"Enter Last Name"} name={"lastName"} gridCols={"col-span-2 sm:col-span-1"} value={Formik.values.lastName} handleChange={Formik.handleChange} handleBlur={Formik.handleBlur} error={Formik.errors.lastName} touched={Formik.touched.lastName} />
          <TextField label={"Email Address"} type={"email"} placeholder={"Enter Email Address"} name={"email"} gridCols={"col-span-2"} value={Formik.values.email} handleChange={Formik.handleChange} handleBlur={Formik.handleBlur} error={Formik.errors.email} touched={Formik.touched.email} />
          <TextField label={"Phone Number"} type={"number"} placeholder={"Enter Phone Number"} name={"phoneNumber"} gridCols={"col-span-2"} value={Formik.values.phoneNumber} handleChange={Formik.handleChange} handleBlur={Formik.handleBlur} error={Formik.errors.phoneNumber} touched={Formik.touched.phoneNumber} />
          <TextField label={"Password"} type={"password"} placeholder={"Enter Password"} name={"password"} gridCols={"col-span-2"} value={Formik.values.password} handleChange={Formik.handleChange} handleBlur={Formik.handleBlur} error={Formik.errors.password} touched={Formik.touched.password} />
          <TextField label={"Confirm Password"} type={"password"} placeholder={"Confirm Password"} name={"confirmPassword"} gridCols={"col-span-2"} value={Formik.values.confirmPassword} handleChange={Formik.handleChange} handleBlur={Formik.handleBlur} error={Formik.errors.confirmPassword} touched={Formik.touched.confirmPassword} />
          <input type="submit" value={"Submit"} className="button col-span-2" />
        </form>
      </div>
    </div>
  )
}

export default Page;

function TextField(
    { label, type, placeholder, name, gridCols, handleChange, handleBlur, value, error, touched }: 
    { label: string, type: string, placeholder: string, name: string, gridCols: string, handleChange: any, handleBlur: any, value: any, error: any, touched: any }
  ): JSX.Element {
  return (
    <div className={`w-full flex flex-col gap-1 ${gridCols}`}>
      <label className="font-[500] text-[13px]">{label}</label>
      <input type={type} placeholder={placeholder} name={name} className="input text-[13px]" value={value} onChange={handleChange} onBlur={handleBlur} />
      {error && touched ? <p className="text-[12px] text-[red]">{error}</p> : null}
    </div>
  );
}
