import Page from '../../components/page'
import { ImportantSpan, S2pPageIconsCtn, S2pPageExternalLink, S2pPageLink, S2pTextDiv } from './style'

/**
 * Display home page
 * @returns {object} Home
 */
function Home(){

    return(
        <Page name={"home"} >

            <S2pTextDiv>
                <h3>👋🏼 Hello !</h3>
                <p>
                    Je m'appelle Alexandre Bidaud, j'ai { new Date().getFullYear() - 1979 } ans, j'habite à la Roche-sur-Yon en Vendée 
                    (à 80km au sud de Nantes) et <ImportantSpan>je suis passionné par le développement web </ImportantSpan> 
                    depuis quelques années.
                </p>
                <p>
                    Je "profite" d'un licenciement économique pour me reconvertir professionnellement et vivre de cette passion. 
                    Je viens d'obtenir une <ImportantSpan>certification de développeur d'application web Font-End / React</ImportantSpan> 
                    <span> (
                        <a href="https://www.francecompetences.fr/recherche/rncp/35976/" target="_blank" rel="noreferrer">RNCP 35976</a>
                    )</span> et je <ImportantSpan>recherche un poste de développeur Web</ImportantSpan> junior ! 
                </p>
            </S2pTextDiv>
            <S2pPageIconsCtn>
                <S2pPageLink to={"/cv"} name="cv">CV</S2pPageLink>
                <S2pPageLink to={"/portfolio"} name="portfolio">Portfolio</S2pPageLink>
                <S2pPageExternalLink 
                    href="https://github.com/AlxBDo" 
                    name="github" 
                    target="_blank"
                >GitHub</S2pPageExternalLink>
                <S2pPageExternalLink 
                    href="https://www.linkedin.com/in/alexandre-bidaud-93014775/" 
                    name="linkedin"
                    target="_blank"
                >Linkedin</S2pPageExternalLink>
            </S2pPageIconsCtn>
        </Page>
    )

}

export default Home