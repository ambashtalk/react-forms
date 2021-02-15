import React, { MouseEventHandler, useState } from "react";
import styled from "styled-components";
import formBackground from "../../assets/cipher-bg.jpg";
import { RowFlex } from "../tags/Div";
import FormFieldSet from "./FormComponents/FormFieldSet";
import FormHeading from "./FormComponents/FormHeading";
import FormInputField from "./FormComponents/FormInputField";
import FormSection from "./FormComponents/FormSection";
import FormWrapper from "./FormComponents/FormWrapper";
import FormButton from "./FormComponents/FormButton";

const FormRow = styled(RowFlex)`
  margin: 0.4rem 0;
  flex-wrap: wrap;

  & > * {
    flex: 1;
  }
`;

const ButtonRow = styled(RowFlex)`
  justify-content: space-around;
  flex-wrap: wrap;
`;

const FormPage = styled(RowFlex)`
  flex-wrap: wrap;
  /* width: auto; */
  min-width: 100%;
  justify-content: space-around;
  align-self: center;
`;



const clickedNext = (event: MouseEvent) => {
  console.log("Next Button cllicked");
  
};

const RegistrationForm = () => {
  return (
    <FormSection bg={formBackground}>
      <FormPage>
        <FormWrapper>
          <FormFieldSet>
            <FormRow>
              <FormHeading>Registration Form</FormHeading>
            </FormRow>
            <FormRow>
              <FormInputField id="cname" type="text" label="Company Name" />
            </FormRow>
            <FormRow>
              <FormInputField id="fname" type="text" label="First Name" />
              <FormInputField id="lname" type="text" label="Last Name" />
            </FormRow>
            <FormRow>
              <FormInputField id="dob" type="date" label="Birth Date" />
              <FormInputField id="phno" type="number" label="Phone" />
            </FormRow>
            <ButtonRow>
              <FormButton  >Next</FormButton>
            </ButtonRow>
          </FormFieldSet>

          <FormFieldSet>
            <FormInputField id="email" type="email" label="Email" />
            <FormInputField id="username" type="text" label="Username" />
            <FormInputField id="password" type="password" label="Password" />
            <FormInputField
              id="passowrd"
              type="password"
              label="Confirm Password"
            />
            <ButtonRow>
              <FormButton>Prev</FormButton>
              <FormButton>Submit</FormButton>
            </ButtonRow>
          </FormFieldSet>
        </FormWrapper>

        <FormWrapper>
          <FormFieldSet>
            <FormRow>
              <FormHeading>Output Form</FormHeading>
            </FormRow>
            <FormRow>
              <FormInputField id="v-cname" type="text" label="Company Name" {...{disabled: true}} />
            </FormRow>
            <FormRow>
              <FormInputField id="v-full-name" type="text" label="Name" {...{disabled: true}}/>
            </FormRow>
            <FormRow>
              <FormInputField id="v-age" type="number" label="Age" {...{disabled: true}}/>
              <FormInputField id="v-phno" type="number" label="Phone" {...{disabled: true}}/>
            </FormRow>
          </FormFieldSet>
        </FormWrapper>

      </FormPage>
    </FormSection>
  );
};

export default RegistrationForm;
