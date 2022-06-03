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
        transform: scaleX(0);
        white-space: nowrap;
    }
    to { transform: scaleX(1);  }
`

export const linkComeDesktop = props => keyframes`
    0% { opacity: 0; }
    1% {
        transform: translate(${ 80 - (255 * (parseInt(props.animationposition) - 1)) }px, -343px) scale(0.25) rotate(0deg);
        width: 100px;
        padding: 35px 25px 50px;
        opacity: 1;
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
        transform: scale(0);
    }
    75% {
        padding: 35px 25px 50px;
        transform: scale(1.5);
    }
    100% { 
        transform: scale(1); 
    }
`

export const pDescriptionCome = keyframes`
    from { 
        transform: scale(0);
        transform-origin: center;
        opacity: 0 ;
    } 
    to { 
        opacity: 1;
        transform: scale(1);
        transform-origin: center; 
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
  from { line-height: 0 ; }
  to { line-height: 1; }
`