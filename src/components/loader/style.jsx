import styled, {keyframes} from 'styled-components'


const moveBall = ( moveDirection, moveValue) => keyframes`
    to { 
        opacity: 1;
        color: white;
        transform: translate${moveDirection}(${moveValue}px) scale(1); 
    }
`  

export const LoaderDiv = styled.div`
    z-index: 9;
`

export const BallDiv = styled.div`
    position: absolute;
    height: 85px;
    width: 150px;
    padding-top: 65px;
    font-size: x-large;
    border-radius : 100%;
    opacity: 0.25;
    transform: scale(0.25);
    text-align:center;
    color: transparent;
    &:first-of-type {
        background-color: var(--color-link);
        animation: ${moveBall("Y", -75)} 500ms ease-in-out infinite alternate;
    }
    &:last-of-type {
        background-color: var(--color-yellow);
        animation: ${moveBall("Y", 75)} 500ms 125ms ease-in-out infinite alternate;
    }
    &:nth-of-type(2) {
        background-color: var(--color-error);
        animation: ${moveBall("X", -75)} 500ms 250ms ease-in-out infinite alternate;
    }
    &:nth-of-type(3) {
        background-color: var(--color-valid);
        animation: ${moveBall("X", 75)} 500ms 375ms ease-in-out infinite alternate;
    }
    @media (max-width: 1023px){ 
        left: 30%;
        top: 40%;
    }
    @media (min-width: 1024px){ 
        left: 50%;
        top: 50%;
    }
`