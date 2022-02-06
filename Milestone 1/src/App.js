
import React, { useState } from "react";
import AddUser from "./component/User/AddUser";
import UserList from "./component/User/UserList";

function App() {
  const [userList,setUserList]=useState([]);

  const onAddUserHandler=(userName, userAge)=>{
    setUserList((prevState)=>{
      return[...prevState,{name:userName, age:userAge, id:Math.random.toString()}]
    })
  }
  return (
    <div>
      <AddUser onAddUser={onAddUserHandler}/>
      <UserList list={userList}/>
    </div>
  );
}

export default App;



