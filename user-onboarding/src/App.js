import React, { useState } from "react";
import "./App.css";
import UserForm from "./Form";
import axios from "axios";

const InitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  hobby: "",
};

const initialFormErrors = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  hobby: "",
};

function App() {
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(InitialValues);

  // console.log(users)

  const updateForm = (inputName, inputValue) => {
    // 🔥 STEP 8 - IMPLEMENT a "form state updater" which will be used inside the inputs' `onChange` handler
    //  It takes in the name of an input and its value, and updates `formValues`
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const submitForm = () => {
    // IMPLEMENT a submit function which will be used inside the form's own `onSubmit`
    const newUser = {
      firstName: formValues.firstName.trim(),
      lastName: formValues.lastName.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      hobby: formValues.hobby.trim(),
    };
    //  a) make a new friend object, trimming whitespace from username and email
    //  b) prevent further action if either username or email or role is empty string after trimming
    if (
      !newUser.firstName ||
      !newUser.lastName ||
      !newUser.email ||
      !newUser.password ||
      !newUser.hobby
    ) {
      return
    }
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      console.log(res.data)
      setUsers([res.data, ...users]);
      setFormValues(InitialValues);
    }) .catch (err => {
      debugger
    })
  };
  return (
    <div className="container">
      <UserForm values={formValues} update={updateForm} submit={submitForm} />
      <RenderApp users={users}/>
    </div>
  );
}

export default App;

const RenderApp = (props) => {
const { users } = props;
console.log(props)

return (
  <div>{JSON.stringify(users)}</div>
)
}