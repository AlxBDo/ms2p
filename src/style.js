import { useContext } from 'react'
import { ThemeContext } from './utils/themeContext'
import { css, createGlobalStyle } from 'styled-components'

const { darkColor1, darkColor2, errorColor, lightColor1, lightColor2, linkColor, validColor } = {
    darkColor1: "42, 46, 52", 
    darkColor2: "#27292B", 
    errorColor: "#984447", 
    lightColor1: "232, 233, 235", 
    lightColor2: "#F4F4F4", 
    linkColor: "#3F88C5",
    validColor: {dark: "#4B8F8C", light: "#88BFBD"},
}
 
const colors = {
    light: { 
        color: `rgb(${darkColor1})`, 
        backgroundColor: `rgb(${lightColor1})`, 
        color2: darkColor2, 
        backgroundColor2: lightColor2, 
        translucentBgColor: `rgba(${lightColor1}, 0.95)` 
    }, 
    dark: { 
        color: `rgb(${lightColor1})`, 
        backgroundColor: `rgb(${darkColor1})`, 
        color2: lightColor2, 
        backgroundColor2: darkColor2, 
        translucentBgColor: `rgba(${darkColor1}, 0.95)` },
}

export const PageRules = css`
    @media (min-width: 1024px){
        width: 1024px;
    }
`

const StyledGlobalStyle = createGlobalStyle`
    :root {
        --bg-color-primary: ${ ({ theme = "light" }) => colors[theme].backgroundColor };
        --bg-color-secondary: ${ ({ theme = "light" }) => colors[theme].backgroundColor2 };
        --bg-color-ternary: ${ ({ theme = "light" }) => theme === "light" ? "white" : "black" };
        --color-error: ${ errorColor }; 
        --color-link: ${ linkColor };
        --color-primary: ${ ({ theme = "light "}) => colors[theme].color };
        --color-secondary: ${ ({ theme = "light "}) => colors[theme].color2 };
        --color-valid: ${ ({theme = "light"}) => validColor[theme] };
        --color-yellow: #E1CE7A;
        --translucent-bg-color: ${ ({ theme = "light" }) => colors[theme].translucentBgColor };
    }

    a { color: var(--color-link); }

    body {
        background-color: var(--bg-color-primary);
        color: var(--color-primary); 
        margin: 0;
        padding: 0;
        font-family: "Prompt";
    }

    ul { list-style: none; }
`

export function GlobalStyle() {
    const { theme } = useContext(ThemeContext)
    return <StyledGlobalStyle theme={ theme ?? "light" } />
}
