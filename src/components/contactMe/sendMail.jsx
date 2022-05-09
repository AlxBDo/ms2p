import { makeAFeedback } from "./feedback";
import { collection, addDoc } from "firebase/firestore"; 
import { firestoreDb } from "../../firebase/config";

/**
 * Check and submit contact form
 * @param {object} e - event
 * @param {object} mailContactInput 
 * @param {object} msgContactInput - textarea containing message
 * @param {object} feedbackOutput 
 * @param {function} setDisplayContactForm 
 * @returns {boolean} false
 */
export function submitContactMeForm(e, mailContactInput, msgContactInput, feedbackOutput, setDisplayContactForm){
    e.preventDefault();
    const mailContact = mailContactInput.value
    if(!/([\w-.]+@[\w.]+.{1}[\w]+)/.test(mailContact)){ 
        makeAFeedback(feedbackOutput, "error", "⚠️ Merci de saisir une adresse mail valide ⚠️")
        return false
    }
    const msgContact = msgContactInput.value
    if(msgContact.length < 15){
        makeAFeedback(feedbackOutput, "error", "⚠️ Votre message doit contenir au moins 15 caractères ⚠️")
        return false
    }
    setDisplayContactForm("sending")
    sendMail(mailContact, msgContact, feedbackOutput, setDisplayContactForm) 
    mailContactInput.value = "" 
    msgContactInput.value = ""
    return false
}
 
/**
 * 
 * @param {string} contact - email
 * @param {string} msg - message
 * @param {object} feedbackOutput 
 * @param {function} setDisplayContactForm 
 */
export function sendMail(contact, msg, feedbackOutput, setDisplayContactForm) {

    const mailHtml = "<p style=\"font-weight: lighter;\">Message de <span style=\"font-weight: bold\">"+ contact + "</span>.</p><br />"
                + "<div style=\"margin: 10px; padding: 5px; border-top: 1px solid lightgrey; border-bottom: 1px solid lightgrey;\">"
                + "🗨️ <span style=\"font-weight: lighter; font-size: small; color: ligthgrey;\">Message</span> "
                + "<p style=\"white-space: pre-wrap;\">"+msg+"</p></div>"

    addDoc(collection(firestoreDb, "mail"), {
        to: "alexbidaud85@gmail.com", 
        replyTo: contact, 
        message: {
            subject: `S2P - message de ${contact}`, 
            text: msg, 
            html: mailHtml,
        },
    }).then( () => setTimeout( () => { 
        setDisplayContactForm("sent")
        makeAFeedback(feedbackOutput, "sent")
    }, 500)).catch( (err) => {
        console.error("Send mail error : ", err)
        makeAFeedback(feedbackOutput, "error", "Désolé 😨, une erreur est survenue dans l'envoi de votre message.")
    });
    setTimeout( () => setDisplayContactForm(false), 3500)
}