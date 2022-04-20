import { useContext } from "react";
import { ContactMeContext } from '../../utils/contactMeContext'
import UseFirestore from '../../utils/useFirestore'
import { ContactForm, ContactFormCtn, FormFeedback } from './style'
import { submitContactMeForm } from './sendMail'


function ContactMe(){

    const { displayContactForm, setDisplayContactForm } = useContext(ContactMeContext)
    const { data, isLoading } = UseFirestore("mail")

    return !isLoading && (
        <ContactFormCtn className={ displayContactForm ? "" : "hidden" }>
            <ContactForm id="mail-box" onSubmit={ (e) => submitContactMeForm(
                e,
                data, 
                document.getElementById("contact-mail"), 
                document.getElementById("contact-msg"), 
                document.getElementById("form-feedback"),
                setDisplayContactForm
            ) }>
                <h3>Me contacter</h3>
                <input type="email" placeholder="Votre mail" id="contact-mail" />
                <textarea placeholder="Votre message" id="contact-msg"></textarea>
                <button onClick={(e) => {
                    e.preventDefault() 
                    setDisplayContactForm(false)
                }}>Fermer</button> <button>Envoyer</button>
            </ContactForm>
            <FormFeedback id="form-feedback"></FormFeedback>
        </ContactFormCtn>
    )
}

export default ContactMe