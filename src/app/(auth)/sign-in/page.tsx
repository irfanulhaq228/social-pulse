"use client";

import "@/style/auth.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { useFormik } from "formik";
import { useRouter } from "next/navigation";

import { signInSchema } from "@/Schema";
import logo from "../../../../public/image/social-pulse-logo-transparent.png";
import axios, { AxiosError } from "axios";

const Page = () => {
  const router = useRouter();
  const initialValues = {
    email: "",
    password: "",
  };
  const Formik = useFormik({
    initialValues,
    validationSchema: signInSchema,
    onSubmit: async (values, action) => {
      try {
        const { data } = await axios.post("/api/auth/login", values);
        alert(JSON.stringify(data));
        action.resetForm();
        router.push("/user");
      } catch (e) {
        const error = e as AxiosError;
        console.log("=====> login error ==> ", error);
        alert(error.message);
      }
    },
  });
  return (
    <div className="auth-main">
      <div className="auth-sec p-[20px] sm:p-[50px]">
        <div className="header flex flex-col items-center">
          <Image className="logo" src={logo} alt="Logo" width={100} />
          <p className="heading">Social Pulse</p>
        </div>
        <div className="break-line h-[1px] w-full"></div>
        <form
          className="content w-full grid gap-3 grid-cols-2 mt-5"
          onSubmit={Formik.handleSubmit}
        >
          <TextField
            label={"Email Address"}
            type={"email"}
            placeholder={"Enter Email Address"}
            name={"email"}
            gridCols={"col-span-2"}
            value={Formik.values.email}
            handleChange={Formik.handleChange}
            handleBlur={Formik.handleBlur}
            error={Formik.errors.email}
            touched={Formik.touched.email}
          />
          <TextField
            label={"Password"}
            type={"password"}
            placeholder={"Enter Password"}
            name={"password"}
            gridCols={"col-span-2"}
            value={Formik.values.password}
            handleChange={Formik.handleChange}
            handleBlur={Formik.handleBlur}
            error={Formik.errors.password}
            touched={Formik.touched.password}
          />
          <input type="submit" value={"Submit"} className="button col-span-2" />
        </form>
        <div className="break-line h-[1px] w-full my-2"></div>
        <p className="text-[13px] font-[500]">
          {"Don't"} have an Account?&nbsp;
          <Link
            href={"/sign-up"}
            className="cursor-pointer text-[var(--main-text-color)] font-[700] hover:underline"
          >
            Signup
          </Link>
          &nbsp;Here
        </p>
      </div>
    </div>
  );
};

export default Page;

function TextField({
  label,
  type,
  placeholder,
  name,
  gridCols,
  handleChange,
  handleBlur,
  value,
  error,
  touched,
}: {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  gridCols: string;
  handleChange: any;
  handleBlur: any;
  value: any;
  error: any;
  touched: any;
}): JSX.Element {
  return (
    <div className={`w-full flex flex-col gap-1 ${gridCols}`}>
      <label className="font-[500] text-[13px]">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="input text-[13px]"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && touched ? (
        <p className="text-[12px] text-[red]">{error}</p>
      ) : null}
    </div>
  );
}
