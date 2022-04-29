import { useContext } from "react";
import { ContactMeContext } from '../../utils/contactMeContext'
import { ContactForm, ContactFormBtn, ContactFormCtn, FormFeedback } from './style'
import { submitContactMeForm } from './sendMail'


function ContactMe(){

    const { displayContactForm, setDisplayContactForm } = useContext(ContactMeContext)

    return (
        <ContactFormCtn className={ displayContactForm ? displayContactForm : "hidden" }>
            <ContactForm id="mail-box" onSubmit={ (e) => submitContactMeForm(
                e,
                document.getElementById("contact-mail"), 
                document.getElementById("contact-msg"), 
                document.getElementById("form-feedback"),
                setDisplayContactForm
            ) }>
                <h3>Me contacter</h3>
                <input type="email" placeholder="Votre mail" id="contact-mail" />
                <textarea placeholder="Votre message" id="contact-msg"></textarea>
                <div>
                    <ContactFormBtn $name={"close"} onClick={(e) => {
                        e.preventDefault() 
                        setDisplayContactForm(false)
                    }}></ContactFormBtn> <ContactFormBtn $name={"send"}></ContactFormBtn>
                </div>
            </ContactForm>
            <FormFeedback id="form-feedback"></FormFeedback>
        </ContactFormCtn>
    )
}

export default ContactMe