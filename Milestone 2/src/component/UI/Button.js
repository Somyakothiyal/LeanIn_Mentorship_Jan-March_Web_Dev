// import react from "react";

import classes from './Button.module.css';

const Button = (props) =>{
    return (
        <button
        className={classes.button}
        type={props.type|| 'button'}
        onClick={props.onClick}
>
        {props.children}
        </button>
    );
    };
export default Button;

// const Button=(props)=>{return(
//     <div>
//         <button type={props.type|| 'button'}
//         onClick={props.onClick}>
//           {props.children}
//          </button>
//   </div>
// );
// };

// export default Button;