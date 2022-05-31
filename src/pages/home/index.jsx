import Page from '../../components/page'
import { useContext } from 'react'
import { ContactMeContext } from '../../utils/contactMeContext'
import { Intro, ImportantSpan, S2pPageIconsCtn, S2pPageExternalLink, S2pPageLink, S2pTextDiv, TitleH3 } from './style'

/**
 * Display home page
 * @returns {object} Home
 */
function Home(){

    const { setDisplayContactForm } = useContext(ContactMeContext)

    return(
        <Page name={"home"} cssRules={ Intro } containerClass="intro" >
            <TitleH3>👋🏼 Hello !</TitleH3>
            <S2pPageIconsCtn>
                <S2pPageLink to={"/cv"} name="cv" animationposition="1" animationendposition="880" animationdelay="0">CV</S2pPageLink>
                <S2pPageLink to={"/portfolio"} name="portfolio" animationposition="2" animationendposition="125" animationdelay="500">Portfolio</S2pPageLink>
                <S2pPageExternalLink 
                    href="https://github.com/AlxBDo" 
                    name="github" 
                    animationposition="3"
                    animationendposition="80" 
                    animationdelay="1000"
                    target="_blank" 
                >GitHub</S2pPageExternalLink>
                <S2pPageExternalLink 
                    href="https://www.linkedin.com/in/alexandre-bidaud-93014775/" 
                    name="linkedin" 
                    animationposition="4" 
                    animationendposition="20" 
                    animationdelay="1500"
                    target="_blank"
                >Linkedin</S2pPageExternalLink>
            </S2pPageIconsCtn>
            <S2pTextDiv>
                <p>
                    J'ai { new Date().getFullYear() - 1979 } ans et je réside à la Roche-sur-Yon en Vendée 
                    (à environ 80km au sud de Nantes). <ImportantSpan>Passionné par le développement web</ImportantSpan>, je "profite" d'un 
                    licenciement économique pour me reconvertir professionnellement et vivre de cette passion. 
                </p>
                <p>
                    Je viens d'achever une <ImportantSpan>formation de développeur d'application web Font-End / React</ImportantSpan>, 
                    dispensée par Open Classrooms, et de valider la certification <a href="https://www.francecompetences.fr/recherche/rncp/35976/" 
                    target="_blank" rel="noreferrer">RNCP 35976</a> de fin de parcours<span> (Niv. Bac +3/4 - jury du 4 mai 2022)</span>.
                </p>
                <p>
                    Actuellement, <ImportantSpan>je recherche un poste de développeur web. </ImportantSpan> 
                    Disponible immédiatement, je suis également mobile... <ImportantSpan>
                        Interressé ? <a href="#contact-me-btn" onClick={setDisplayContactForm}>Contactez-moi !</a></ImportantSpan>
                </p>
            </S2pTextDiv>
        </Page>
    )

}

export default Home