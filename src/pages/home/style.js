import { Link } from 'react-router-dom'
import styled, { css, keyframes } from 'styled-components'

export const S2pPageIconsCtn = styled.div`
    margin-top: 13%;
    display: flex;
    justify-content: space-between;
`

export const S2pPageLink = styled(Link)`
    width: 150px;
    height: 150px;
`

export const S2pBody = styled.div`
    text-align: center;
    overflow: hidden;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`

const welcome = keyframes`
    0% { 
        transform: scale(725) translate(-15px, 346px);
    } 
    75% { 
        transform: scale(210) translate(-13px, 346px);
    } 
    90% {
        transform: scale(10) translate(-3px, 346px);
    }
    100%{ transform: scale(9) translate(-3px, 320px); }
`

const thanks = keyframes`
    from {
        transform: scale(10) translate(-3px, 347px);
    }
    to {
        transform: scale(2) translate(-2px, 280px);
    }
`

const backToNormal = keyframes`
    0% {
        transform: scale(9) translate(-3px, 330px);
    }
    30% { transform: scale(4.5) translate(0px, 260px); }
    60% {
        transform: scale(2) translate(0px, 260px);
    }
    100% {
        transform: scale(1) translate(0px, 0px);
    }
`

export const homePageAnimations = css`animation: ${welcome} 2s ease-in-out forwards, ${backToNormal} 1s 2s ease-in forwards;`