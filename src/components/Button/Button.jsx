import React from "react";
import { Btn, BtnText } from "./Batton.styled";

const Button = ({onClick, text}) => {
    return (
        <Btn onClick = {onClick}>
            <BtnText>{text}</BtnText>
      </Btn>  
    )
}

export default Button;