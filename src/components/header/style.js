import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PageRules } from '../../style'
import { mailIcon } from '../contactMe/mailIcons'


export const S2pHeader = styled.header`
    display: flex;
    flex-direction: column;
    height: 100px;
    justify-content: center;
    text-align: left;
    flex-wrap: wrap;
    position: relative;
    z-index: 9;
    ${ PageRules }
    @media (max-width: 1023px) {
      width: 95%;
      margin: 5% auto;
      a { margin-top: 5px; }
      h1 { font-size: x-large; }
      h2 {
        font-size: medium;
        max-width: 165px;
        white-space: pre-wrap;
      }
    }
    @media (min-width: 1024px){
      align-items: flex-start;
      margin: 2% auto;
      a { margin-top: 5px; }
      h1 { 
        font-size: xx-large; 
      }
      h2 { font-size: x-large; }
      h1, h2 { 
        width: 80%;
        text-align: left; 
      }
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
        border: none;
        cursor: pointer;
        background-color: var(--bg-color-secondary);
        color: inherit;
        transition: all 150ms linear;
        &:hover { 
          background-size: 60%;
          border: 2px solid var(--bg-color-ternary);
          background-color: inherit; 
        }
    }
    h1 { font-family: "Permanent Marker";}
    h2 { font-family: "Kaushan Script";}
    h1, h2 {
        margin: 0;
        padding: 0;
        font-weight: normal;
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