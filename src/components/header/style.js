import styled from 'styled-components'
import { PageRules } from '../../style'
import { mailIcon } from '../contactMe/mailIcons'
import { PageLink } from '../pageLink'


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
    a { margin-top: 5px; }
    button {
        background-image: url(${mailIcon});
        height: 65px;
        width: 65px;
        border-radius: 38px; 
        border: none;
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
      h1 { font-size: x-large; }
      h2 { font-size: medium; }
    }
    @media (min-width: 1024px){
      align-items: flex-start;
      margin: 2% auto;
      h1 { font-size: xx-large; }
      h2 { font-size: x-large; }
    }
`

export const HeaderLink = styled(PageLink)`
      color: var(--color-link);
`