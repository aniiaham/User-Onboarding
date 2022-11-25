import React from "react";

function UserForm(props) {
  const { values, update, submit } = props;

  const onChange = evt => {
    const {name, value} = evt.target
    console.log(value)
    update(name, value)
  }

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  };

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <div className="form-inputs">
        <label>
          First Name
          <input
            name="firstName"
            onChange={onChange}
            value={values.firstName}
            type="text"
            placeholder="Type your first name"
          />
        </label>
        <label>
          Last Name
          <input
            name="lastName"
            onChange={onChange}
            value={values.lastName}
            type="text"
            placeholder="Type your last name"
          />
        </label>
        <label>
          Email
          <input 
          name="email" 
          type={"email"}
          onChange={onChange}
          value={values.email}
          text="email" 
          placeholder="Enter your email"
        />
        </label>
        <label>
          Password
          <input
            name="password"
            type={"password"}
            onChange={onChange}
            value={values.password}
            text="password"
            placeholder="Enter your password"
          />
        </label>
        <label>
          Hobby
          <select name="hobby" value={values.hobby} onChange={onChange}  >
            <option value="">--select hobby--</option>
            <option value="coding">Coding</option>
            <option value="reading">Reading</option>
            <option value="workingout">Working Out</option>
          </select>
        </label>
        <div className="submit">
        <button disabled={!values.firstName || !values.lastName || !values.email || !values.password || !values.hobby}>Submit</button>
        </div>
      </div>
    </form>
  );
}

export default UserForm;
