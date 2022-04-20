import { makeAFeedback } from "./feedback";


export function submitContactMeForm(e, mailConfig, mailContactInput, msgContactInput, feedbackOutput, setDisplayContactForm){
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
    makeAFeedback(feedbackOutput, "sending", false, 500)
    sendMail(mailConfig, mailContact, msgContact, feedbackOutput) 
    mailContactInput.value = "" 
    msgContactInput.value = ""
    setTimeout( () => setDisplayContactForm(false), 3000)
    return false
}

export function sendMail(config, contact, msg, feedbackOutput) {

    const msgResponse = "Bonjour, /r /n "
                        + "Je vous remercie pour votre message du " + new Intl.DateTimeFormat('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(new Date()) + ". " 
                        + "Restant à votre disposition. "
                        + "Cordialement. "
                        + "Alexandre Bidaud "
                        + "06 03 01 85 62 "

    const bodyContent = "<header>Notification de contact</header>"
                + "<p>Salut,</p>"
                + "<p>Tu as un nouveau message de <a href=\"mailto:"+ contact +"?subject=🙋🏼‍♂️ Merci de votre intérêt !&body="+msgResponse+"\">"+ contact + "</a> .</p>"
                + "<div style=\"margin:15px\">🗨️ <span style=\"font-weight: lighter; font-size: small; color: ligthgrey\">Message</span> <p>"+msg+"</p></div>"
                + "A plus !"

    const { host, name, pwd } = config
    
    window.Email.send({
        Host : `smtp.${host}.com`,
        Username : `${name}@gmail.com`,
        Password : pwd,
        To : `${name}@gmail.com`,
        From : `${name}@gmail.com`,
        Subject : "📩 Un contact vous envoi un message !",
        Body : bodyContent
    }).then(
        () => setTimeout( () => makeAFeedback(feedbackOutput, "sent", "📬 Merci pour votre message"), 500)
    ).catch( () =>  makeAFeedback(feedbackOutput, "error", "😨 Désolé, une erreur est survenue dans l'envoi de votre message 😨"))

}