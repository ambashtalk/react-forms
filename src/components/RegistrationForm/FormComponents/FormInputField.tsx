import React from "react";
import styled from "styled-components";
import { ColFlex } from "../../tags/Div";
import { Input, Label } from "../../tags/Form";

type proptype = {
  id: string;
  name?:string;
  type: string;
  label?: string;
  placeholder?: string;
};

const FormColFlex = styled(ColFlex)`
    margin: 0 0.4rem;
    /* flex: 1; */
    & :disabled {
      background-color: #cccc;
    }

`;

const FormInputField: React.FC<proptype> = (props) => {
  // console.log(props);
  // console.log(rest);
  
  
  return <FormColFlex>
    {props.label ? <Label htmlFor={props.id}>{props.label}</Label> : null}
    <Input
      {...props}
      // id={props.id}
      // type={props.type}
      // placeholder={props.placeholder ? props.placeholder : ""}
    />
  </FormColFlex>
};

export default FormInputField;
