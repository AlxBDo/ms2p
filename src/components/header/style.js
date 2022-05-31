import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PageRules } from '../../style'
import { mailIcon } from '../contactMe/mailIcons'


export const S2pHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    flex-wrap: wrap;
    position: relative;
    z-index: 9;
    transition: all 500ms ease-in-out;
    ${ PageRules }
    &:not(.intro, .home){
      height: 100px;
      a { margin-top: 5px; }
      button { border: none; }
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
        cursor: pointer;
        background-color: var(--bg-color-secondary);
        color: inherit;
        transition: all 150ms linear;
        &:hover { 
          background-size: 60%;
          background-color: var(--color-primary); 
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
    @media (max-width: 1023px) {
      width: 95%;
      margin: 5% auto;
      &:not(.intro){
        h2 {
          max-width: 165px;
          white-space: pre-wrap;
        }
      }
      h1 { font-size: x-large; }
      h2 { font-size: medium; }
    }
    @media (min-width: 1024px){
      align-items: flex-start;
      margin: 2% auto;
      &:not(.intro) {
        a { margin-top: 5px; }
        h1, h2 { 
          width: 80%;
          text-align: left; 
        }
      }
      h1 { font-size: xx-large; }
      h2 { font-size: x-large; }
    }
`

export const S2pHeaderLink = styled(Link)`
      color: var(--color-link);
`