import styled, { css } from 'styled-components'
import { PageRules } from '../../style'

export const S2pPageCtn = styled.div`
    ${ PageRules }
    height: 780px;
    margin: 0 auto;
`
export const S2pPage = styled.div`
    text-align: left;
    height: 95%;
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    margin: 2% 5%;
    padding: 0;
    transform-origin: left center;
    transform: scale(2.5) translate(25px, 90px);
    ${ props => css`
        ${props.$additionalCssRules};
    `}
`