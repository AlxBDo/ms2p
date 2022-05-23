import { keyframes } from "styled-components";


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
        margin-bottom: -200px;
    } 
    to { 
        opacity: 1;
        transform: scaleY(1);
        transform-origin: top; 
    }
`