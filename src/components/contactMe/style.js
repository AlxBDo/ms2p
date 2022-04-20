import styled from "styled-components"

const { padding, width } = { padding : 25, width: 500}

export const ContactForm = styled.form`
    background-color: var(--bg-color-primary);
    width: ${width}px;
    margin: 0 auto;
    padding: ${padding}px;
    display: flex;
    flex-direction: column;
    border: 2px solid;
    border-radius: 10px; 
    transition: all 250ms ease-in-out;
    input, textarea { width: 80%; }
    input, textarea, button {
        margin: 2% auto;
        padding: 2%;
    }
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
    transition: all 250ms ease-in-out;
    &.hidden {
        height: 0;
        form { transform: scale(0) translateY(-500px); }
    }
`

export const FormFeedback = styled.div`
    min-height: 100px;
    width: ${width}px;
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
`