import React, { useState, Fragment } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          name: uName,
          age: uAge,
          id: Math.random().toString(),
        },
      ];
    });
  };
  console.log(Boolean(usersList.length === 0));
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      {usersList.length === 0 || (
        <UsersList users={usersList} />
      )}
    </Fragment>
  );
}

export default App;
