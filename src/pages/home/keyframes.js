import { keyframes } from "styled-components";


export const helloBackToNormal = keyframes`
    0% { 
        width: 873px;
        line-height: 70px;
    }
    25% {
        width: 873px; 
        line-height: 260px; 
    }
    50% {
        width: 0px; 
        line-height: 260px; 
    }
    100% {
        top: auto;
        margin-left: 4.5%;
        border-bottom: none;
        border-top: 3px solid;
        padding-top: 50px; 
    }
`

export const helloComeDesktop = keyframes`
    0% { 
        width: 0px;
        line-height: 260px;
    }
    90% { 
        width: 873px;
        line-height: 260px;
    }
    100% { line-height: 70px; }
`
export const helloComeMobile = keyframes`
    from { 
        width: 0%;
        white-space: nowrap;
    }
    to { width: 90% }
`

export const linkComeDesktop = props => keyframes`
    0% {
        opacity: 0;
    }
    1% {
        opacity: 1; 
        position : absolute ;
        top: 100px;
        left: 0%; 
        transform: scale(0);
    }
    75% { top: 500px; }
    100% { left: ${parseInt(props.animationendposition) + 20}% ; }
`

export const linkComeDesktopNew = props => keyframes`
    0% { 
        width: 0;
        overflow: hidden;
        padding: 0; 
        margin: 0;
    }
    1% {
        width: 100px;
        margin: auto 0;
        padding: 35px 25px 50px;
        transform: translate(75px, -343px) scale(0.25) rotate(0deg);
    }
    50% { transform: translate(${700 + (parseInt(props.animationposition)*20)}px, -362px) scale(0.5) rotate(360deg); }
    52% { transform: translate(${700 + (parseInt(props.animationposition)*20)}px, 0px) scale(0.55) rotate(451deg); }
    99% { 
        transform: translate(${parseInt(props.animationendposition+0)}px, 0px) scale(1) rotate(-360deg); 
        margin: 0;
    }
    100% { 
        transform: translate(0px, 0px); 
        margin: auto;
    }
`

export const linkComeDesktopNew1 = props => keyframes`
    0% { 
        width: 0;
        overflow: hidden;
        padding: 0; 
        margin: 0;
    }
    1% {
        transform: translate(${ props.animationposition === "1" ? 75 : -560 + (45 * (1 - parseInt(props.animationposition)) + (-45 * (parseInt(props.animationposition) - 1))) }px, -343px) scale(0.25) rotate(0deg);
        width: 100px;
        margin: auto 0;
        padding: 35px 25px 50px;
    }
    50% { transform: translate(${ props.animationposition === "1" ? 830 : 0 }px, -362px) scale(0.5) rotate(360deg); }
    55% { 
        margin: auto 0;
        transform: translate(${ props.animationendposition }px, 0px) scale(0.55) rotate(450deg); 
    }
    100% { 
        transform: translate(0px, 0px) scale(1) rotate(0deg); 
        margin: auto 0;
    }
`

export const linkComeDesktopNew2 = props => keyframes`
    0% { opacity: 0; }
    1% {
        transform: translate(${ 80 - (255 * (parseInt(props.animationposition) - 1)) }px, -343px) scale(0.25) rotate(0deg);
        width: 100px;
        padding: 35px 25px 50px;
    }
    50% { transform: translate(${ 830 - (255 * (parseInt(props.animationposition) - 1)) }px, -362px) scale(0.5) rotate(360deg); }
    55% { 
        transform: translate(${  830 - (255 * (parseInt(props.animationposition) - 1))  }px, 0px) scale(0.55) rotate(450deg); 
    }
    100% { 
        transform: translate(0px, 0px) scale(1) rotate(${ (parseInt(props.animationposition) -1) * 45 }deg);
    }
`

export const linkComeMobile = keyframes`
    0% {
        padding: 0;
        height: 0;
        transform: scale(0);
    }
    75% {
        padding: 35px 25px 50px;
        height: 65px; 
        transform: scale(1.5);
    }
    100% { 
        transform: scale(1); 
    }
`

export const pDescriptionCome = keyframes`
    from { 
        transform: scaleY(0);
        transform-origin: top;
        opacity: 0 ;
    } 
    to { 
        opacity: 1;
        transform: scaleY(1);
        transform-origin: top; 
    }
`


// header 

export const buttonCome = keyframes`
  from { transform: scale(0); } 
  to { transform: scale(1); }
`

export const headerBackToNormal = keyframes`
  to { 
    height: 70px; 
    margin-top: 5%;
  }
`

export const imgBackToNormal = keyframes`
  to {
    height: 60px;
    width: 60px;
    background-size: 60px;
  }
`

export const imgCome = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`

export const linkBorn = color => keyframes`
  from { 
    transform: scale(0.55);
  }
  to { background-color: ${color}; }
`

export const titleCome = keyframes`
  from { 
    line-height: 0 ; 
  }
  to { 
    line-height: 1; 
  }
`