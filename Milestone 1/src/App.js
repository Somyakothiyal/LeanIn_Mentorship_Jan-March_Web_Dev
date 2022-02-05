
import React, { useState } from "react";
import AddUser from "./component/User/AddUser";
import UserList from "./component/User/UserList";
const App=()=> {
  const [UserList,setUserList]=useState([]);

  const onAddUserHandler=(userName, userAge)=>{
    setUserList((prevState)=>{
      return[...prevState,{name:userName, age:userAge, id:Math.random.toString()}]
    })
  }
  return (
    <div>
      <AddUser onAddUser={onAddUserHandler}></AddUser>
      <UserList list={UserList}/>
    </div>
  );
}

export default App;



