import { createGlobalStyle } from 'styled-components';

import GitHubImage from '../assets/github-background.svg';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background: #f0f0f5;
        background-image: url(${ GitHubImage });
        background-repeat: no-repeat;
        background-position: center;
    }

    body, input, button {
        font-size: 16px;
    }

    button, a {
        cursor: pointer;
    }

    #root {
        max-width: 968px;
        margin: 0 auto;
        padding: 20px 40px;
    }
`