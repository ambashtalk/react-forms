import styled, {css} from 'styled-components';

type proptype = {
    bg?: string
}

const Section = styled.section`
    ${(props: proptype) => props.bg && css`
        background: ${`url(${props.bg})`};
    ` };
    width: 100%;
    height: auto;
    min-height: 100vh;
    padding-top: 5rem;
`

export default Section;