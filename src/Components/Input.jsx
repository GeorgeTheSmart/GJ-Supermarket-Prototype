import React from "react";

function Input(props){
    return(
        <input
         className={props.className}
         type={props.type} 
         placeholder={props.placeholder} 
         style={props.style}
         />
    );
}

export default Input;