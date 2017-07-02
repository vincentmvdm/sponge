import React, { Component } from 'react';
import { spongeMock } from 'spongemock';

import SpongeTexture from '../../components/SpongeTexture';
import Flex from '../../components/Flex';
import Container from '../../components/Container';
import Mock from '../../components/Mock';
import H1 from '../../components/H1';
import P from '../../components/P';
import Footer from '../../components/Footer';
import A from '../../components/A';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Flex className="animated tada" height="calc(100% - 64px)">
                    <Container>
                        <H1>{spongeMock("sponge")}</H1>
                        <P marginTop="16px">
                            <del>There should be</del> a tool to automatically capitalize text when you need {spongeMock("to mock your friends with the spongebob meme")}.
                        </P>
                        <Mock />
                    </Container>
                </Flex>
                <Footer>
                    By <A href="https://twitter.com/nickabouzeid" target="_blank">{spongeMock("nick")}</A> and <A href="https://twitter.com/vincentmvdm" target="_blank">{spongeMock("vincent")}</A>. <A href="https://github.com/vincentmvdm/sponge" target="_blank">{spongeMock("source")}</A>.
                </Footer>
                <SpongeTexture />
            </div>
        );
    }
}

export default HomePage;
