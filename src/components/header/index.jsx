import { useContext } from 'react'
import { ContactMeContext } from '../../utils/contactMeContext'
import logo from '../../assets/logo.jpg'
import { S2pHeader, S2pHeaderLink } from './style'

/**
 * Display header page
 * @component 
 * @returns {object} Header
 */
function Header({htmlClass}) {
    const { setDisplayContactForm } = useContext(ContactMeContext)
    return(
        <S2pHeader className={htmlClass}>
            <S2pHeaderLink to="/"><img src={logo} alt="Profil" title="Alexandre Bidaud" /></S2pHeaderLink>
            <h1>Alexandre Bidaud</h1>
            <h2>Développeur Web Junior</h2>
            <button alt="Me contacter" id="contact-me-btn" onClick={ (e) => { 
                e.preventDefault()
                setDisplayContactForm("open") } 
            }></button>
        </S2pHeader>
    )

}

export default Header