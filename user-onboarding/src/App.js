
import './App.css';
import React, {useState,useEffect} from "react";
import Form from "./components/Form";
import User from "./components/User";
import axios from "axios";
import schema from "./validation/schemaFormat";
import * as yup from "yup";

const initialFormValues = {
  name:"",
  email:"",
  password1:"",
  password2:"",
  termOfService:false
}


function App() {

  const [users, setUsers]= useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(true);
  const [formErrors, setFormErrors] = useState(initialFormValues);

  const updateForm = (name,value)=>{
    yup
    .reach(schema, name)
    .validate(value) 
    .then(() => {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    })
    .catch((err) => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      });
    });
    setFormValues({...formValues, [name]:value});
  }

  const submitForm = ()=>{
    const newUser = {
      name:formValues.name.trim(),
      email:formValues.email.trim(),
      password1:formValues.password1,
      password2:formValues.password2
    }
    axios.post("https://reqres.in/api/users", newUser)
      .then(res=>{
        setUsers([...users, res.data])
        console.log(res.data);
        setFormValues(initialFormValues);
      })
  }
  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);
  return (
    <div>
      
      <Form value={formValues} update={updateForm} submit={submitForm} disabled={disabled} errors={formErrors}/>
      {
        users.map(user=>{
          return <User key={users.indexOf(user)} user={user}/>
        })
      }
    </div>
  );
}

export default App;
