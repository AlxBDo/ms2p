import Page from '../../components/page'
import { useContext } from 'react'
import { ContactMeContext } from '../../utils/contactMeContext'
import { PageLink } from '../../components/pageLink'
import { AdditionnalPageLinkRules, Intro, ImportantSpan, S2pPageIconsCtn, S2pPageExternalLink, S2pTextDiv, SecondaryInformationSpan, TitleH3 } from './style'

/**
 * Display home page
 * @returns {object} Home
 */
function Home(){

    const { setDisplayContactForm } = useContext(ContactMeContext)
    const onWheelFunction = e => {
        e.deltaY < 0 ? document.getElementById("page-ctn").classList.add("intro") : document.getElementById("page-ctn").classList.remove("intro")
    }
    const getMyAge = () => new Date().getFullYear() - 1979

    return(
        <Page name={"home"} cssRules={ Intro } containerClass="intro" onWheelFunction={ onWheelFunction } >
            <TitleH3>👋🏼 Hello !</TitleH3>
            <S2pPageIconsCtn>
                <PageLink 
                    to={"/cv"} 
                    name="cv" 
                    animationposition="1" 
                    animationendposition="880" 
                    animationdelay="0" 
                    cssRules={ AdditionnalPageLinkRules } 
                >CV</PageLink>
                <PageLink 
                    to={"/portfolio"} 
                    name="portfolio" 
                    animationposition="2" 
                    animationendposition="125" 
                    animationdelay="500" 
                    cssRules={ AdditionnalPageLinkRules } 
                >Portfolio</PageLink>
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
                    J'ai { getMyAge() } ans et je réside à la Roche-sur-Yon en Vendée 🏡 
                    <SecondaryInformationSpan>(à environ 80km au sud de Nantes)</SecondaryInformationSpan>. 
                    <ImportantSpan> Passionné par le développement web 💙</ImportantSpan>, je "profite" d'un 
                    licenciement économique pour me reconvertir professionnellement et vivre de cette passion. 
                </p>
                <p>
                    Je viens d'achever une <ImportantSpan>formation de développeur d'applications web Font-End / React</ImportantSpan>, 
                    dispensée par Open Classrooms, et de <ImportantSpan>valider la certification 🏆 </ImportantSpan> 
                    <a href="https://www.francecompetences.fr/recherche/rncp/35976/" target="_blank" rel="noreferrer">RNCP 35976</a> de fin de parcours 
                    <SecondaryInformationSpan> (Niv. Bac +3/4 - jury du 4 mai 2022)</SecondaryInformationSpan>.
                </p>
                <p>
                    Actuellement, je <ImportantSpan>recherche un poste de développeur web 👨🏼‍💻</ImportantSpan>.
                </p>
                <p>
                    <ImportantSpan>Disponible ⌚</ImportantSpan> immédiatement, je suis également <ImportantSpan>mobile 🚗</ImportantSpan>... 
                    Interressé ? <ImportantSpan><a href="#contact-me-btn" onClick={setDisplayContactForm}>Contactez-moi !</a> 💬</ImportantSpan>
                </p>
            </S2pTextDiv>
        </Page>
    )

}

export default Home