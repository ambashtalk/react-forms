import React from "react";
import Title from "../tags/Heading";
import Nav from "../tags/Nav";

const Navbar = (props: { heading: string }) => {
  return (
    <Nav>
      <Title>{props.heading}</Title>
    </Nav>
  );
};

export default Navbar;
