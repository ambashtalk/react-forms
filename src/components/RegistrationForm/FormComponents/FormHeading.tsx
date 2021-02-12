import Div from "../../tags/Div";
import React from "react";
import styled from "styled-components";
import Title from "../../tags/Heading";

const FormDiv = styled(Div)`
    font-size: 2rem;
    text-align:center;
    margin-bottom: 2rem;
`

const FormHeading: React.FC = (props) => {
  return (
    <FormDiv>
      <Title>{props.children}</Title>
    </FormDiv>
  );
};


export default FormHeading;
