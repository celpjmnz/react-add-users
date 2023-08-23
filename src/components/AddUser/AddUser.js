import React from "react";
import ErrorMessage from "../Error/Error";
import "./AddUser.css";

const AddUser = (props) => {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");

  const submitUser = (event) => {
    event.preventDefault();
    if (
      name.trim().length === 0 ||
      age.trim().length === 0 ||
      Number(age) < 0
    ) {
      setError({
        title: "Error",
        msg: "Please, enter a valid age/name (no empty values are allowed)",
      });
      return;
    }

    props.onAddingUser(name, age);

    setName("");
    setAge("");
  };

  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const [err, setError] = React.useState();

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {err && (
        <ErrorMessage
          onConfirm={errorHandler}
          title={err.title}
          message={err.msg}
        />
      )}
      <form onSubmit={submitUser} className="input">
        <label htmlFor="name" className="label">
          Introduce your name
        </label>
        <input
          id="name"
          className="input"
          type="text"
          value={name}
          onChange={nameHandler}
        />
        <br />
        <label htmlFor="age" className="label">
          Introduce your age
        </label>
        <input
          className="input"
          id="age"
          type="number"
          value={age}
          onChange={ageHandler}
        />

        <button type="submit" className="button">
          Save user
        </button>
      </form>
    </div>
  );
};

export default AddUser;
