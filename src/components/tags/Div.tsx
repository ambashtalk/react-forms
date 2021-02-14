import styled from 'styled-components';

const Div = styled.div`
    margin-block-start: 0em;
    margin-block-end: 0em;
`
export default Div;

export const RowFlex = styled(Div)`
    display:flex;
    flex-direction: row;
`

export const ColFlex = styled(Div)`
    display:flex;
    flex-direction: column
`

