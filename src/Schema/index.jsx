import * as Yup from "yup";

export const signUpSchema = Yup.object({
    firstName: Yup.string().min(2).max(25).required("Please enter your First Name"),
    lastName: Yup.string().min(2).max(25).required("Please enter your Last Name"),
    email: Yup.string().email().required("Please enter your Email Address"),
    phoneNumber: Yup.string().min(10, "Phone Number must be 11 Character").max(10, "Phone Number must be 11 Character").required("Please enter your Phone Number"),
    password: Yup.string().min(6).max(25).required("Please enter your Password"),
    confirmPassword: Yup.string().min(6).max(25).required("Please enter your Confirm Password").oneOf([Yup.ref('password'), null], "Password must Matched")
});

export const signInSchema = Yup.object({
    email: Yup.string().email().required("Please enter your Email Address"),
    password: Yup.string().min(6).max(25).required("Please enter your Password"),
});