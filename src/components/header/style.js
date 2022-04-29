import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PageRules } from '../../style'
import msgIcon from '../../assets/msg-ico-light.png'

export const S2pHeader = styled.header`
    display: flex;
    flex-direction: column;
    height: 75px;
    justify-content: center;
    text-align: left;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 2% auto;
    position: relative;
    z-index: 9;
    ${ PageRules }
    button {
        background-image: url(https://img.icons8.com/fluency/96/000000/secured-letter.png);
        height: 65px;
        width: 65px;
        border-radius: 38px;
        content: "contact";
        background-size: 50%;
        background-position: center;
        background-repeat: no-repeat;
        border: 2px solid;
        cursor: pointer;
        background-color: inherit;
        color: inherit;
        &:hover { background-size: 60%; }
    }

    h1, h2 {
        margin: 0;
        padding: 0;
        font-family: "Cooper Black";
        font-weight: normal;
        width: 80%;
        text-align: left;
    }
    h1 {
        font-size: x-large;
      }
    h2 {
        font-size: xx-large;
      }

    img {
        width: 65px;
        border-radius: 50px;
        border: 2px solid;
        padding: 2px;
      }

    
`

export const S2pHeaderLink = styled(Link)`
      color: var(--color-link);
`