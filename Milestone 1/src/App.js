// // import TextInput from "./component/TextInput";
// // import Welcome from "./component/Welcome";
// import React,{ useState } from "react";
// import AddUser from "./component/User/AddUser";
// import UserList from "./component/User/UserList";
// // import Button from "./component/UI/Button";
// // import Card from "./component/UI/Card";
// function App(){
//   const [UserList, setUserList]=useState([]);
//   const onAddUserHandler = (userName, userAge) =>{
//     setUserList((prevState)=>{
//       return [...prevState, {name: userName,age: userAge,id:Math.random().toString()}]} 
//     )
//   }
// return (
//   <div>
//     <AddUser onAddUser = {onAddUserHandler}/>
//     <UserList list= {UserList}/>
//     )
//   </div>
// );
//   };
// const App=()=> {
//   return (
//     <div>
//       //   <TextInput/>
//       // <Welcome/>  
//       <Card/> 
//       <Button/>
      

// //     </div>
// //   );
// // };

// export default App;

//import TextInput from "./components/TextInput";
//import Welcome from "./components/Welcome";
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



