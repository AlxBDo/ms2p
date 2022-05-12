import styled from "styled-components"
import { cancelMail, mailSentIcon } from "./mailIcons"
import { closeFeedback, closeForm, openFeedback, openForm, sendingFeedback, sendingForm, sentFeedback } from "./keyframes"

const { padding, width } = { padding : 25, width: 500}

export const ContactForm = styled.form`
    background-color: var(--bg-color-primary);
    margin: 0 auto;
    padding: ${padding}px;
    display: flex;
    flex-direction: column;
    border: 2px solid white;
    border-radius: 10px; 
    div { 
        text-align: right;
        width: 85%;
        margin: 0 auto;
     }
    input, textarea { width: 80%; }
    input, textarea, button {
        margin: 2% auto;
        padding: 2%;
    }
    textarea { height: 155px; }
    @media (max-width: 1023px){ width: 80%; }
    @media (min-width: 1024px){ width: ${width}px; }
`

export const ContactFormBtn = styled.button`
    background-color: transparent;
    border: none;
    height: 48px;
    width: 48px;
    background-size: 70%;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    transition: all 150ms ease-in-out;
    opacity: 0.8;
    &:hover {
        background-size: 100%;
        opacity: 1;
    }
    ${(props) => (props.$name === "close" ? (`
        background-image: url(${ cancelMail });
    `) : (`
        background-image: url(${ mailSentIcon });
    `))}
`

export const ContactFormCtn = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: var(--translucent-bg-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    z-index: 99;
    &.hidden {
        transition: all 150ms 500ms linear;
        transform: scaleY(0) translateY(-200px);
        transform-origin: top;
    }
    &.sending {
        form { animation: ${sendingForm} 250ms ease-in-out forwards; }
        #form-feedback {
            background-repeat: no-repeat;
            background-position: center;
            animation: ${sendingFeedback} 500ms ease-in-out forwards;
        }
    }
    &.sent {
        form { opacity:0 }
        #form-feedback {
            background-image: url(${ mailSentIcon }); 
            background-repeat: no-repeat; 
            transform: translateY(-230px); 
            animation: ${sentFeedback} 500ms ease-in-out forwards;
        }
    }
    @media (min-width: 1024px){
        &.hidden {
            form {
                animation: ${closeForm} 175ms forwards;
            }
            #form-feedback {
                background-repeat: no-repeat;
                animation: ${closeFeedback} 350ms 150ms ease-in-out forwards;
            }
        }
        &.open { 
            form {
                animation: ${openForm} 175ms 325ms backwards;
            }
            #form-feedback {
                background-repeat: no-repeat;
                animation: ${openFeedback} 350ms ease-in-out;
            }
        }
    }
`

export const FormFeedback = styled.div`
    min-height: 100px;
    margin: 0 auto;
    padding: ${padding}px;
    &.sending { content: "Envoi en cours..."; } 
    &.sent { 
        content: "Merci pour votre message ! Celui-ci a bien été envoyé 👍."; 
        color: var(--color-valid);
    }
    &.error { 
        color: var(--color-error); 
        font-size: large;
        font-weight: bold;
        text-align: center;
    }
    @media (min-width: 1024px){ width: ${width}px; }
`