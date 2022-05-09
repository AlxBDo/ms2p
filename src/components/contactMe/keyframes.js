import { keyframes } from "styled-components";
import { mailIcon, mailOpenIcon, mailSentIcon } from "./mailIcons";


const feedbackCome = `
    background-image: url(${ mailIcon });
    background-position: 100%;
    transform: translate(50%, -700px);
    background-size: 0px;
    opacity: 0.1;
`

const feedbackGone = `
    background-image: url(${ mailOpenIcon }); 
    background-position: 50%;
    transform: translate(0%, -150%);
    background-size: 96px;
    opacity: 1;
`

const formCome = `
    transform: scale(0.15); 
    opacity: 0;
`

const formGone = `
    transform: scale(0.9); 
    opacity: 0.9;
`


export const closeFeedback = keyframes`
    from { ${feedbackGone} }
    to { ${feedbackCome} }
`

export const closeForm = keyframes`
    from { ${formGone} } 
    to { ${formCome} }
`


export const openFeedback = keyframes`
    from { ${feedbackCome} }
    to { ${feedbackGone} }
`

export const openForm = keyframes`
    from { ${formCome} } 
    to { ${formGone} }
`


export const sendingFeedback = keyframes`
    0% { 
        background-image: url(${ mailOpenIcon }); 
    } 
    40% { 
        transform: translateY(-220px); 
        background-size: 96px; 
    }
    45% { 
        transform: translateY(-230px); 
        background-size: 106px;
    }
    50% { 
        background-image: url(${ mailIcon }); 
        background-size: 96px;
        background-position: 50% 50%;
    }
    70% {
        background-size: 15px;
    }
    75% {
        background-image: url(${ mailSentIcon });  
        background-size: 25px;
        opacity: 1;
    }
    100% { 
        transform: translateY(-230px); 
        background-size: 96px;
        opacity: 0;
        background-position: 100% 50%;
    }
`

export const sendingForm = keyframes`
    0% { transform: scale(1); } 
    50% { transform: scale(0.5); }
    100% { 
        transform: scale(0.15) translateY(150px);
        opacity: 0 
    }
`


export const sentFeedback = keyframes`
    from {
        background-size: 25px;
        opacity: 0.25;
        background-position: 0% 50%;
    }
    to {
        background-size: 96px; 
        opacity: 1;
        background-position: 50% 50%;
    }
`