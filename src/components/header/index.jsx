import { useContext, useState } from 'react'
import { ContactMeContext } from '../../utils/contactMeContext'
import logo from '../../assets/abweb.gif'
import { S2pHeader } from './style'

function Header() {
    const { displayContactForm, setDisplayContactForm } = useContext(ContactMeContext)
    return(
        <S2pHeader>
            <img src={logo} alt="Profil" title="Alexandre Bidaud" />
            <h1>Alexandre Bidaud</h1>
            <h2>Développeur Web Front-End</h2>
            <button alt="Me contacter" onClick={ (e) => { 
                e.preventDefault()
                setDisplayContactForm(!displayContactForm) } 
            }></button>
        </S2pHeader>
    )

}

export default Header