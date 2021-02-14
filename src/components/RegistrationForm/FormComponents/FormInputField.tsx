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
    flex: 1;
`;

const FormInputField: React.FC<proptype> = (props) => (
  <FormColFlex>
    {props.label ? <Label htmlFor={props.id}>{props.label}</Label> : null}
    <Input
      id={props.id}
      type={props.type}
      placeholder={props.placeholder ? props.placeholder : ""}
    />
  </FormColFlex>
);

export default FormInputField;
