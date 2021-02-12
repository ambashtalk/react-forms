import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export default Form;

export const Label =  styled.label`
  font-size: 1.5rem;
  font-weight: bold;
`

export const Input = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: large;
  flex: 1;
  height: 4rem;
`;

export const Select = styled.select`
padding: 0 0.5rem;
border: none;
border-radius: 0.5rem;
font-size: large;
flex: 1;
`

export const Button = styled.button`
padding: 0.5rem;
border: none;
outline: none;
border-radius: 0.5rem;
background-color: teal;
color: white;
&:hover {
    background-color: skyblue;
};
`

