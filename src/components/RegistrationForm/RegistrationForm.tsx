import React, { useState } from "react";
import formBackground from "../../assets/cipher-bg.jpg";
import FormFieldSet from "./FormComponents/FormFieldSet";
import FormHeading from "./FormComponents/FormHeading";
import FormInputField from "./FormComponents/FormInputField";
import FormSection from "./FormComponents/FormSection";
import FormWrapper from "./FormComponents/FormWrapper";
import FormButton from "./FormComponents/FormButton";
import {
  ButtonRow,
  CompanyNameRow,
  FormPage,
  FormRow,
  HeadingRow,
} from "./RegistrationFormStyles";
import {
  clickedNextHandler,
  clickedPrevHandler,
  clickedStoreHandler,
  formDataInputChangeHandler,
} from "./RegistrationFormEventHandlers";


const getAge = (dob: string) => {
  const givenDate = new Date(dob);
  const currDate = new Date();
  const age: number = currDate.getFullYear() - givenDate.getFullYear();
  return age.toString();
}


const RegistrationForm = () => {
  const [nextIsClicked, setNextIsClicked] = useState(false);
  const [formData, setFormData] = useState({cname:"", fname:"", lname:"", dob:"", phno: "", email:"", uname:"", password:"", cnf_passowrd:""});
  return (
    <FormSection bg={formBackground}>
      <FormPage>
        <FormWrapper>
          <HeadingRow>
            <FormHeading>Registration Form</FormHeading>
          </HeadingRow>
          <FormFieldSet display={nextIsClicked ? "none" : "visible"}>
            <CompanyNameRow>
              <FormInputField
                id="cname"
                type="text"
                label="Company Name"
                onChange={(event) => formDataInputChangeHandler(event, setFormData)}
              />
            </CompanyNameRow>
            <FormRow>
              <FormInputField
                id="fname"
                type="text"
                label="First Name"
                onChange={(event) => formDataInputChangeHandler(event, setFormData)}
              />
              <FormInputField
                id="lname"
                type="text"
                label="Last Name"
                onChange={(event) => formDataInputChangeHandler(event, setFormData)}
              />
            </FormRow>
            <FormRow>
              <FormInputField
                id="dob"
                type="date"
                label="Birth Date"
                onChange={(event) => formDataInputChangeHandler(event, setFormData)}
              />
              <FormInputField
                id="phno"
                type="number"
                label="Phone"
                onChange={(event) => formDataInputChangeHandler(event, setFormData)}
              />
            </FormRow>
            <ButtonRow>
              <FormButton
                clicked={(event) => clickedNextHandler(event, setNextIsClicked)}
              >
                Next
              </FormButton>
            </ButtonRow>
          </FormFieldSet>

          <FormFieldSet display={nextIsClicked ? "visible" : "none"}>
            <FormRow>
              <FormInputField
                id="email"
                type="email"
                label="Email"
                onChange={(event) => formDataInputChangeHandler(event, setFormData)}
              />
            </FormRow>
            <FormRow>
              <FormInputField
                id="uname"
                type="text"
                label="Username"
                onChange={(event) => formDataInputChangeHandler(event, setFormData)}
              />
            </FormRow>
            <FormRow>
              <FormInputField
                id="password"
                type="password"
                label="Password"
                onChange={(event) => formDataInputChangeHandler(event, setFormData)}
              />
            </FormRow>
            <FormRow>
              <FormInputField
                id="cnf_passowrd"
                type="password"
                label="Confirm Password"
                onChange={(event) => formDataInputChangeHandler(event, setFormData)}
              />
            </FormRow>
            <ButtonRow>
              <FormButton
                clicked={(event) => clickedPrevHandler(event, setNextIsClicked)}
              >
                Prev
              </FormButton>
              <FormButton clicked={(event) => clickedStoreHandler(event, formData)}>Store</FormButton>
            </ButtonRow>
          </FormFieldSet>
        </FormWrapper>

        <FormWrapper>
          <FormFieldSet>
            <FormRow>
              <FormHeading>Output Form</FormHeading>
            </FormRow>
            <FormRow>
              <FormInputField
                id="v-cname"
                type="text"
                label="Company Name"
                disabled={true}
                value={formData.cname}
              />
            </FormRow>
            <FormRow>
              <FormInputField
                id="v-full-name"
                type="text"
                label="Name"
                disabled={true}
                value={formData.fname + " " + formData.lname}
              />
            </FormRow>
            <FormRow>
              <FormInputField
                id="v-age"
                type="number"
                label="Age"
                disabled={true}
                value = {getAge(formData.dob)}
              />
              <FormInputField
                id="v-phno"
                type="number"
                label="Phone"
                disabled={true}
                value={formData.phno}
              />
            </FormRow>
          </FormFieldSet>
        </FormWrapper>
      </FormPage>
    </FormSection>
  );
};

export default RegistrationForm;
