import * as yup from "yup";

export default yup.object().shape({

    name: yup
        .string()
        .required("Name is required"),
    email: yup
        .string()
        .email("Must be a valid email")
        .required("Email is required"),
    password1: yup
        .string()
        .required("Password is require"),
    password2: yup
        .string()
        .required("Password is require"),
    termOfService: yup.boolean().oneOf([true],"Must Agree with the policy")
    
    
})
