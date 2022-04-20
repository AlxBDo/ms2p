import React, { createContext, useState } from "react"

export const ContactMeContext = createContext()

export const ContactMeProvider = ({ children }) => {
    const [ displayContactForm, setDisplayContactForm ] = useState(false) 
    return (
        <ContactMeContext.Provider value={{ displayContactForm, setDisplayContactForm }}>
            { children }
        </ContactMeContext.Provider>
    )
}