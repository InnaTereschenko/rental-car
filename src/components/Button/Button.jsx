import React from "react";
import { Btn, BtnText } from "./Button.styled";

const Button = ({onClick, text}) => {
    return (
        <Btn onClick = {onClick}>
            <BtnText>{text}</BtnText>
      </Btn>  
    )
}

export default Button;