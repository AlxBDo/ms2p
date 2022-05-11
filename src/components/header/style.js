import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PageRules } from '../../style'
import { mailIcon } from '../contactMe/mailIcons'


export const S2pHeader = styled.header`
    display: flex;
    flex-direction: column;
    height: 75px;
    justify-content: center;
    text-align: left;
    flex-wrap: wrap;
    margin: 2% auto;
    position: relative;
    z-index: 9;
    ${ PageRules }
    @media (max-width: 1023px) {
      align-items: center;
      width: 95%;
      a { margin-top: 5px; }
      h1 {
          font-size: large;
      }
      h2 {
        font-size: medium;
        max-width: 165px;
        white-space: pre-wrap;
      }
    }
    @media (min-width: 1024px){
      align-items: flex-start;
      h1 { font-size: x-large; }
      h2 { font-size: xx-large; }
      h1, h2 { width: 80%; }
    }
    button {
        background-image: url(${mailIcon});
        height: 65px;
        width: 65px;
        border-radius: 38px;
        content: "contact";
        background-size: 50%;
        background-position: center;
        background-repeat: no-repeat;
        border: 2px solid white;
        cursor: pointer;
        background-color: inherit;
        color: inherit;
        transition: all 150ms linear;
        &:hover { background-size: 60%; }
    }
    h1, h2 {
        margin: 0;
        padding: 0;
        font-family: "Cooper Black";
        font-weight: normal;
        text-align: left;
    }
    img {
        width: 65px;
        border-radius: 50px;
        border: 2px solid var(--color-primary);
        padding: 2px;
      }

    
`

export const S2pHeaderLink = styled(Link)`
      color: var(--color-link);
`