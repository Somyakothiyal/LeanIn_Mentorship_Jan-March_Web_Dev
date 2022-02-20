// import React from 'react';


import "./Card.css";
// import classes from './Button';

// const Card = (props) => {
//     return <div className={'${classes.card} ${props.className}'}>{props.children}</div>;

// };
// export default Card;

const Card=(props)=>{
    return(<div className="card">
    {props.children}
  </div>);
};
export default Card;
