import styled from 'styled-components';

const Circle = styled.div`
    background-color: #EBD73F;
    border-radius: 50%;
    width: ${props => props.scale};
    height: ${props => props.scale};
    left: ${props => props.left + "px"};
    top: ${props => props.top + "px"};
    position: absolute;
`;

export default Circle;
