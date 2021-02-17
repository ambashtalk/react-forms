import { RowFlex } from "../tags/Div";
import styled from "styled-components";


export const FormRow = styled(RowFlex)`
  margin: 0.4rem 0;
  flex-wrap: wrap;

  & > * {
    flex: 1;
  }
`;

export const HeadingRow = styled(FormRow)``

export const CompanyNameRow = styled(FormRow)``

export const ButtonRow = styled(RowFlex)`
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const FormPage = styled(RowFlex)`
  flex-wrap: wrap;
  /* width: auto; */
  min-width: 100%;
  justify-content: space-around;
  align-self: center;
`;