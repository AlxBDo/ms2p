import styled, { css } from 'styled-components'
import { PageRules } from '../../style'


export const S2pH2 = styled.h2`
    text-transform: uppercase;
    text-align: right;
    color: var(--color-error);
    @media (max-width: 1023px) {
        font-size: medium;
        border-top: 5px solid;
        padding-top: 2%;
        padding-right: 1%;
    }
    @media (min-width: 1024px) {
        font-size: xx-large;
        margin: -8% 0 0;
        border-bottom: 5px solid;
        padding-bottom: 3%;
        padding-right: 15%;
    }
`

export const S2pPageCtn = styled.div`
    ${ PageRules }
    margin: 0 auto;
    ${ (props) => props.$name === "home" && (`
        overflow: hidden;
    `)}
`

export const S2pPage = styled.div`
    text-align: left;
    height: 95%;
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    margin: 2% auto;
    padding: 0;
    transform-origin: left center;
    ${ props => css`
        ${props.$additionalCssRules};
    `}
`