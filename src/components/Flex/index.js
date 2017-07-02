import styled from 'styled-components';

const Flex = styled.div`
    display: flex;
    height: ${props => props.height ? props.height : '100%'};
    align-items: center;
`;

export default Flex;
