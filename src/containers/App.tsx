import React from "react";
import Navbar from "../components/Navbar/Navbar";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
  font-size: 62.5%;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`;



function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar heading="REACT FORMS" />
      <RegistrationForm />
    </>
  );
}

export default App;
