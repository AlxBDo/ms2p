import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { ContactMeContext } from '../../utils/contactMeContext'
import logo from '../../assets/logo.jpg'
import { S2pHeader, S2pHeaderLink } from './style'

/**
 * Display header page
 * @component 
 * @returns {object} Header
 */
function Header() {
    const { setDisplayContactForm } = useContext(ContactMeContext)
    const location = useLocation()
    return(
        <S2pHeader className={ location.pathname === "/" && "home"}>
            <S2pHeaderLink to="/"><img src={logo} alt="Profil" title="Alexandre Bidaud" /></S2pHeaderLink>
            <h1>Alexandre Bidaud</h1>
            <h2>Développeur Web Junior</h2>
            <button alt="Me contacter" onClick={ (e) => { 
                e.preventDefault()
                setDisplayContactForm("open") } 
            }></button>
        </S2pHeader>
    )

}

export default Header