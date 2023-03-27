import * as yup from "yup";

export const signUpValidationSchema = yup.object().shape({
  fullName: yup.string().required(" Full name is required"),
  phoneNumber: yup
    .string()
    .matches(/(\d){10}\b/, "Enter a valid phone number")
    .required("Phone number is required"),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      "Password must have a special character"
    )
    .min(9, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required"),
});

export const loginValidationSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .matches(/(\d){10}\b/, "Enter a valid phone number")
    .required("Phone number doesnot match"),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      "Password must have a special character"
    )
    .min(9, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password doesnot match"),
   
});
