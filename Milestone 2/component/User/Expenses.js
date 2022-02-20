import React, { useState } from 'react';

import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  
  console.log(filteredYear);
  const filteredExpenses = props.items.map((user)=>{
    //return user.date.toString() === 2022;
    /* if(user.date.toString.substring(3)===filteredYear)
    console.log("true")
    return user.name; */
    if (user.date.toString().startsWith(filteredYear)){
       return user;
    }
    return null;
  });
      console.log(filteredExpenses);
   
  return (
    <div>
      <Card>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
      </Card>
      {/* <ExpenseFilterList list={filteredExpenses}/> */}
    </div>
  );
};

export default Expenses;