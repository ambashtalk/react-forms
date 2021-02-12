import React from "react";
import styled from "styled-components";
import formBackground from "../../assets/cipher-bg.jpg";
import { RowFlex } from "../tags/Div";
import FormHeading from "./FormComponents/FormHeading";
import FormInputField from "./FormComponents/FormInputField";
import FormSection from "./FormComponents/FormSection";
import FormWrapper from "./FormComponents/FormWrapper";

const FormRow = styled(RowFlex)`
  margin: 0.4rem 0;
`;

const RegistrationForm = () => {
  return (
    <FormSection bg={formBackground}>
      <FormWrapper>
        <FormHeading>Registration Form</FormHeading>
        <FormInputField id="cname" type="text" label="Company Name" />
        <FormRow>
          <FormInputField id="fname" type="text" label="First Name" />
          <FormInputField id="lname" type="text" label="Last Name" />
        </FormRow>
      </FormWrapper>
    </FormSection>
  );
};

export default RegistrationForm;
