// import Card from "./Card";
// import Button from ".UI/Button";

// const ErrorModal =(props)=>{

//     return (
//         <Card>
//             <div/>
//             <header>
//                 <h2>{props.title} </h2>
//             </header>
//             <div>
//                 <p>
//                     {props.message}
//                 </p>
//             </div>
//             <footer>
//                 <Button>Okay</Button>
//             </footer>
//         </Card>
//     )
// }

// export default ErrorModal;
import classes from "./ErrorModal.module.css";
const ErrorModal = ({ title, message, onConfirm }) => {
  return (
    <>
      <div className={classes.modal}>
        <h2>{title} </h2>
        <p>{message}</p>
        <button className={classes.close} onClick={onConfirm}>
          &times;
        </button>
      </div>
      <div className={classes.overlay}></div>
    </>
  );
};

export default ErrorModal;