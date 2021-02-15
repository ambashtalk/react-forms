import styled from "styled-components";
import { FieldSet } from "../../tags/Form";

type proptype = {
    display?: string
};

const FormFieldSet = styled(FieldSet)`
    border: none;
    display: ${(props: proptype) => props.display? props.display : "flex"};
    flex-direction: column;
`

export default FormFieldSet;