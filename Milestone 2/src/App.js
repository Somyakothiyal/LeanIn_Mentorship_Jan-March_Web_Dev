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


//milestone 2
import React, { useState } from 'react'
import AddExpense from "./component/User/AddExpense";
import ExpenseList from "./component/User/ExpenseList";
import Expenses from "./component/User/Expenses";


function App(){
  const [expenses,setExpenses]=useState([]);
  const [expenseList,setExpenseList]=useState([]);
  const onAddExpenseHandler=(expenseName, expenseAmount,expenseDate)=>{
  
      setExpenseList((prevState)=>{
        //console.log(expenseList);
      return[...prevState,{name:expenseName,amount:expenseAmount,date:expenseDate,id:Math.random().toString()}]}
  );
  setExpenses((prevState)=>{
    //console.log(expenseList);
  return[...prevState,{name:expenseName,amount:expenseAmount,date:expenseDate,id:Math.random().toString()}]}
);
  /* let expense={
    Ename:expenseName, Eamount:expenseAmount,  Edate:expenseDate};
    localStorage.setItem('expenses',JSON.stringify({...expense})); */
 }

 /* 
  useEffect((expenseName, expenseAmount,expenseDate) => {
    let expenses={
      Ename:expenseName, Eamount:expenseAmount,  Edate:expenseDate};
  localStorage.setItem('expenses', JSON.stringify(expenses))}, [expenses]);
  */

 /* const handle = (expenseName, expenseAmount,expenseDate) => {
   let expense={
     Ename:expenseName, Eamount:expenseAmount,  Edate:expenseDate};
     localStorage.setItem(expense,JSON.stringify({...expense}));
   } 
 */
  return (
    <div>
     <AddExpense onAddExpense={onAddExpenseHandler} />
     {/* {<AddExpense onAddExpense={handle}/> } */}
      <ExpenseList list={expenseList}/>
      <Expenses items={expenses} /> 
    </div>
    
  
  );
};


export default App;

