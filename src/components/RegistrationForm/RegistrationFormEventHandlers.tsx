import { ChangeEvent, Dispatch, MouseEvent } from "react";

export const clickedNextHandler = (
  event: MouseEvent<HTMLButtonElement>,
  setNextIsClicked: Dispatch<React.SetStateAction<boolean>>
) => {
  event.preventDefault();
  console.log("Next is clicked");
  setNextIsClicked(true);
};

export const clickedPrevHandler = (
  event: MouseEvent<HTMLButtonElement>,
  setNextIsClicked: Dispatch<React.SetStateAction<boolean>>
) => {
  event.preventDefault();
  console.log("Prev is clicked");
  setNextIsClicked(false);
};

export const clickedStoreHandler = (
  event: MouseEvent<HTMLButtonElement>,
  formData: {
    cname: string;
    fname: string;
    lname: string;
    dob: string;
    phno: string;
    email: string;
    uname: string;
    password: string;
    cnf_passowrd: string;
  }
) => {
  event.preventDefault();
  console.log("Store is clicked");
  console.log(formData);
};

export const formDataInputChangeHandler = (
  event: ChangeEvent<HTMLInputElement>,
  setFormData: React.Dispatch<
    React.SetStateAction<{
      cname: string;
      fname: string;
      lname: string;
      dob: string;
      phno: string;
      email: string;
      uname: string;
      password: string;
      cnf_passowrd: string;
    }>
  >
) => {
  console.log(event.target.value);
  setFormData((prevState) => {
    return {
      ...prevState,
      [event.target.id]: event.target.value,
    };
  });
};
