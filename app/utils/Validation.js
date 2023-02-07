import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


export const validateSignUp = Yup.object().shape({
  fullName: Yup.string().required().min(6).max(30),
  email: Yup.string().email().required(),
  password: Yup.string().required().min(8).max(20),
});

export const validateSignIn = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required().min(8).max(20)});  // Path: app\utils\Validation.js    

export const validatePhoneNumber = Yup.object().shape({
  phoneNumber: Yup.string().max(10).matches(phoneRegExp).required()
})