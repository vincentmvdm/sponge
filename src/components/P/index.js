import styled from 'styled-components';

const P = styled.p`
    font-size: 1.25rem;
    line-height: 1.6;
    max-width: 30em;
    margin-left: auto;
    margin-right: auto;
    margin-top: ${props => props.marginTop ? props.marginTop : '0'};
    word-wrap: break-word;
`;

export default P;
