import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
    body {
        background-color: #F9E344;
        color: #0A0A0A;
        font-family: -apple-system, BlinkMacSystemFont, 'avenir next', avenir, helvetica, 'helvetica neue', ubuntu, roboto, noto, 'segoe ui', arial, sans-serif;
    }

    #root > div {
        height: 100vh;
    }

    h1, p {
        margin-bottom: 0;
    }

    .animated {
        animation-duration: 2s;
    }
`;
