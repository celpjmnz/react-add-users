import React from "react";
import AddUser from "./components/AddUser/AddUser";
import Header from "./components/Header/Header";
import ShowUsers from "./components/ShowUsers/ShowUsers";

function App() {
  const [usersList, addNewUser] = React.useState([]);

  const addUser = (name, age) => {
    addNewUser((prevUsers) => {
      return [
        ...prevUsers,
        { name: name, age: age, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <Header />
      <AddUser onAddingUser={addUser} />
      <ShowUsers users={usersList} />
    </div>
  );
}

export default App;
