// import react from "react";

// import classes from './Button.module.css';

// const Button = (props) =>{
//     return (
//         <Button
//         className={classes.Button}
//         type={props.type|| 'Button'}
//         onClick={props.onClick}
// >
//         {props.children}
//         </Button>
//     );
//     };
// export default Button;
const Button=(props)=>{return(
    <div>
        <button type={props.type}>
          {props.children}
         </button>
  </div>
);
};

export default Button;