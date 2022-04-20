import { useContext } from 'react'
import { ThemeContext } from './utils/themeContext'
import styled, { css, createGlobalStyle } from 'styled-components'

const colors = {
    light: { color: "black", backgroundColor: "white", translucentBgColor: "rgba(255, 255, 255, 0.9)" }, 
    dark: { color: "white", backgroundColor: "black", translucentBgColor: "rgba(0, 0, 0, 0.9)" }
}

export const PageRules = css`
    overflow: hidden;
    width: 1024px;
`

const StyledGlobalStyle = createGlobalStyle`
    :root {
        --bg-color-primary: ${ ({ theme = "light" }) => colors[theme].backgroundColor };
        --color-error: red; 
        --color-primary: ${ ({ theme = "light "}) => colors[theme].color };
        --color-valid: green;
        --translucent-bg-color: ${ ({ theme = "light" }) => colors[theme].translucentBgColor };
    }

    body {
        background-color: var(--bg-color-primary);
        color: var(--color-primary); 
        margin: 0;
        padding: 0;
    }
`

export function GlobalStyle() {
    const { theme } = useContext(ThemeContext)
    return <StyledGlobalStyle theme={ theme ?? "light" } />
}
