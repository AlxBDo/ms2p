import styled, { css, keyframes } from 'styled-components'
import { PageRules } from '../../style'


const pageCome = keyframes`
    from { 
        transform: rotateX(90deg); 
        opacity: 0;
    }
    to { 
        transform: rotateX(0deg); 
        opacity: 1;
    }
`

export const S2pH2 = styled.h2`
    text-transform: uppercase;
    text-align: right;
    color: var(--color-error);
    @media (max-width: 1023px) {
        font-size: medium;
        border-top: 5px solid;
        padding-top: 1%;
        padding-right: 5%;
        margin: 0;
    }
    @media (min-width: 1024px) {
        font-size: x-large;
        margin: -8.5% 0 0;
        border-bottom: 5px solid;
        padding-bottom: 6%;
        padding-right: 15%;
    }
`

export const S2pPageCtn = styled.div`
    ${ PageRules }
    margin: 0 auto;
    #cv-page, #portfolio-page {
        transform-origin: top center;
        animation: ${ pageCome } 500ms ease-out backwards
    }
    &:not(.intro) header {
        height: 100px;
        @media (max-width: 1023px){
            h2 {
              max-width: 165px;
              white-space: pre-wrap;
            }
        }
        @media (min-width: 1024px){
            h1, h2 { 
              width: 80%;
              text-align: left; 
            }
        }
    }
    ${ (props) => props.$name === "home" && (`
        overflow: hidden;
    `)}
    ${ props => css`
        ${props.$additionalCssRules};
    `}
`

export const S2pPage = styled.div`
    text-align: left;
    height: 95%;
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
    transform-origin: top center;
    transition: all 500ms ease-in-out ;
    &.exit-page {
        perspective: 1000px;
        transform-origin: bottom center;
        transform: rotateX(-90deg);
        opacity: 0;
    }
    @media (max-width: 1023px){ margin: 0 auto; }
    @media (min-width: 1024px){ margin: 2% auto; }
`