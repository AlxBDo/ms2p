import { useContext } from 'react'
import { ContactMeContext } from '../../utils/contactMeContext'
import logo from '../../assets/portrait_dessin_color_blue-zoom.jpg'
import { S2pHeader, S2pHeaderLink } from './style'

function Header() {
    const { setDisplayContactForm } = useContext(ContactMeContext)
    return(
        <S2pHeader>
            <S2pHeaderLink to="/"><img src={logo} alt="Profil" title="Alexandre Bidaud" /></S2pHeaderLink>
            <h1>Alexandre Bidaud</h1>
            <h2>Développeur Web Front-End</h2>
            <button alt="Me contacter" onClick={ (e) => { 
                e.preventDefault()
                setDisplayContactForm("open") } 
            }></button>
        </S2pHeader>
    )

}

export default Header