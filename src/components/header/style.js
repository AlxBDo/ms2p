import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PageRules } from '../../style'
import { mailIcon } from '../contactMe/mailIcons'
import me from '../../assets/me.png'
import { buttonCome, imgCome, linkBorn, titleCome } from './keyframes'


export const S2pHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    flex-wrap: wrap;
    position: relative;
    z-index: 9;
    ${ PageRules }
    &.home {
      margin-top: 50px;
      a {
        background-image: url(${me});
        background-color: white;
        height: 250px;
        width: 250px;
        border-radius: 130px;
        background-position: center;
        background-size: cover;
        margin-left: 2%;
        animation: ${imgCome} 250ms ease-in-out forwards;
        img { transform: scale(0) }
      }
      button {
        position: absolute;
        right: 0;
        border: 3px solid;
        animation: ${buttonCome} 250ms 800ms ease-in backwards;
      }
      h1, h2 { overflow: hidden;  }
    }
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
        &.home {
          a { 
            margin: auto; 
            animation: ${ linkBorn('var(--color-yellow)') } 500ms 1000ms ease-in-out forwards, 
            ${ linkBorn('var(--color-valid)') } 500ms 1500ms ease-in-out forwards, 
            ${ linkBorn('var(--color-error)') } 500ms 2000ms ease-in-out forwards, 
            ${ linkBorn('var(--color-link)') } 500ms 2500ms ease-in-out forwards;
          }
          button {
            top: -35px;
            transform: scale(0.75);
          }
          h1, h2 { text-align: center; }
          h1 { animation: ${titleCome} 250ms 250ms ease-in-out backwards; }
          h2 { animation: ${titleCome} 250ms 500ms ease-in-out backwards; }
        }
        &:not(.home){
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
        &:not(.home) {
          a { margin-top: 5px; }
          h1, h2 { 
            width: 80%;
            text-align: left; 
          }
        }
        &.home {
          height: 250px;
          a { 
            animation: ${ linkBorn('var(--color-link)') } 500ms 2000ms ease-in-out forwards, 
            ${ linkBorn('var(--color-error)') } 500ms 2500ms ease-in-out forwards, 
            ${ linkBorn('var(--color-valid)') } 500ms 3000ms ease-in-out forwards, 
            ${ linkBorn('var(--color-yellow)') } 500ms 3500ms ease-in-out forwards;
          }
          button { margin-right: 2%; }
          h1, h2 { margin-top: 175px; }
          h1::before, h2::before { 
            position: absolute;
            overflow: hidden; 
            padding-right: 3px;
          }
          h1::before {
            content: "Je m'appelle ";
            margin-top: -30px;
            font-family: "Kaushan Script";
            font-size: x-large;
          }
          h2 { margin-right: 85px; }
          h2::before {
            content: "Je suis ";
            margin-top: -35px;
            text-align: right;
            width: 240px;
          }
        }
        h1 { 
          font-size: xx-large; 
          animation: ${titleCome} 250ms 1s ease-in-out backwards;
        }
        h2 { 
          font-size: x-large; 
          animation: ${titleCome} 250ms 1250ms ease-in-out backwards;
        }
      }
`

export const S2pHeaderLink = styled(Link)`
      color: var(--color-link);
`