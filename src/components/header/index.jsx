import { useContext } from 'react'
import { ContactMeContext } from '../../utils/contactMeContext'
import logo from '../../assets/logo.jpg'
import { S2pHeader, HeaderLink } from './style'

/**
 * Display header page
 * @component 
 * @returns {object} Header
 */
function Header() {
    
    const { setDisplayContactForm } = useContext(ContactMeContext)
    const contactMeFunction = (e) => { 
        e.preventDefault()
        setDisplayContactForm("open") 
    }

    return(
        <S2pHeader>
            <HeaderLink to="/"><img src={logo} alt="Profil" title="Alexandre Bidaud" /></HeaderLink>
            <h1>Alexandre Bidaud</h1>
            <h2>Développeur Web Junior</h2>
            <button aria-label="Me contacter" alt="Me contacter" id="contact-me-btn" onClick={ contactMeFunction }></button>
        </S2pHeader>
    )

}

export default Header