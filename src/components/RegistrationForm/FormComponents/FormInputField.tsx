import React, { ChangeEventHandler } from "react";
import styled from "styled-components";
import { ColFlex } from "../../tags/Div";
import { Input, Label } from "../../tags/Form";

type proptype = {
  id: string;
  type: string;
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  errorMsg?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const FormColFlex = styled(ColFlex)`
  margin: 0 0.4rem;
  /* flex: 1; */
  & :disabled {
    background-color: #cccc;
    color: black;
  }
`;

const InlineErrorSpan = styled.span``;

const FormInputField: React.FC<proptype> = (props) => {
  // console.log(props);
  // console.log(rest);

  return (
    <FormColFlex>
      {props.label ? (
        <Label htmlFor={props.id}>
          {props.label}
          {props.errorMsg ? (
            <InlineErrorSpan>{props.errorMsg}</InlineErrorSpan>
          ) : null}
        </Label>
      ) : null}
      <Input
        {...props}
        // id={props.id}
        // type={props.type}
        // placeholder={props.placeholder ? props.placeholder : ""}
      />
    </FormColFlex>
  );
};

export default FormInputField;
