import React from 'react';
import Wrapper from './Wrapper';
import Circle from './Circle';
import $ from "jquery";

let circleSizes = [];

for (let i = 1; i < 3; i++) {
    circleSizes.push(16 * i + "px");
}

const SpongeTexture = (props) => {
    let circles = [];

    const nCircles = 96;

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    for (let i = 0; i < nCircles; i++) {
        const left = getRandomInt(0, $(window).width() * 2);
        const top = getRandomInt(0, $(window).height() * 2);
        const scale = circleSizes[Math.floor(Math.random() * circleSizes.length)];
        circles.push(<Circle scale={scale} left={left} top={top} key={i} />);
    }

    return (
        <Wrapper>
            {circles}
        </Wrapper>
    );
};

export default SpongeTexture;
