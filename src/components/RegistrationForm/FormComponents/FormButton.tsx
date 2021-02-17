import styled from "styled-components";
import { Button } from "../../tags/Form";
import React, { MouseEventHandler } from "react";

const StyledButton = styled(Button)`
  margin-top: 2rem;
`;

type proptype = {
  clicked?: MouseEventHandler<HTMLButtonElement>;
}

const FormButton: React.FC<proptype> = (props) => {
  return <StyledButton onClick={props.clicked}>{props.children}</StyledButton>;
};

export default FormButton;
