import React from "react";

function Image(props){
    return (
        <img
         src={props.src}
         className={props.className}
         height={props.height}
         width={props.width}
        />
    );
}

export default Image;