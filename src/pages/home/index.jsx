
import Page from '../../components/page'
import { S2pPageIconsCtn, S2pPageExternalLink, S2pPageLink, S2pTextDiv } from './style'

/**
 * Display home page
 * @returns {object} Home
 */
function Home(){

    return(
        <Page name={"home"} >
            <S2pTextDiv>
                <h3>Bienvenue !</h3>
                <p>
                    J'ai 43 ans, j'habite à la Roche-sur-Yon en Vendée (à 80km au sud de Nantes) et je suis 
                    passionné par le développement web depuis quelques années.
                </p>
                <p>
                    Je "profite" d'un licenciement économique pour me reconvertir professionnelement 
                    et vivre de cette passion.
                </p>
                <p>
                    Je viens d'obtenir une certification de développeur d'application web Font-End / React 
                    <span> (
                        <a href="https://www.francecompetences.fr/recherche/rncp/35976/" target="_blank">RNCP 35976</a>
                    )</span> et je recherche mon futur "job de rêve" ! 
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