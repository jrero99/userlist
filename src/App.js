import { Fragment, useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
function App() {

  const [usersList, setUsersList] = useState([])
  const addUserHandler = (username, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: username, age: uAge, id: Math.random().toString()}]
    })
  }
  return (
    <Fragment>
      <AddUser onAddUser = {addUserHandler}/>
      <UserList users = {usersList}/>
    </Fragment>
  );
}

export default App;
