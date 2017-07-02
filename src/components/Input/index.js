import styled from 'styled-components';

const Input = styled.input`
    background-color: white;
    border: none;
    border-radius: 32px;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    width: 100%;
    max-width: 25rem;
    margin-left: auto;
    margin-right: auto;
    padding: 16px 24px;
    margin-top: ${props => props.marginTop ? props.marginTop : '0'};

    &:focus {
        outline: #EBD73F auto 4px !important;
        border-color: #EBD73F;
        box-shadow: none;
    }
`;

export default Input;
