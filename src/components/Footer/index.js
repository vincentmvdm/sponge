import React from 'react';
import Wrapper from './Wrapper';
import Flex from '../Flex';
import StyledP from './StyledP';

const Footer = (props) => {
    return (
        <Wrapper>
            <Flex>
                <StyledP>
                    {props.children}
                </StyledP>
            </Flex>
        </Wrapper>
    );
};

export default Footer;
