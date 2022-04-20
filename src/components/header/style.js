import styled from 'styled-components'
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
    ${ PageRules }

    button {
        background-image: url(${msgIcon});
        height: 70px;
        width: 70px;
        border-radius: 38px;
        content: "contact";
        background-size: 50%;
        background-position: center;
        background-repeat: no-repeat;
        border: 2px solid;
        cursor: pointer;
        background-color: inherit;
        color: inherit;
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
        width: 55px;
        border-radius: 50px;
        border: 2px solid;
        padding: 2px;
      }

    
`