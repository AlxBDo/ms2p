import React, { useContext } from "react" 
import { ThemeContext } from "../../utils/themeContext"
import Page from "../../components/page"
import Experiences from "../../components/experiences"
import scrollFunction from "./scrollFunction"
import { CVH3, CVMenuImg, CVMenuUl, CVSection, InfoPersDiv, menuIcons, scrollingRule } from "./style"
import homeLogo from '../../assets/minime.png'
import { PageLink } from "../../components/pageLink"

/**
 * Scroll to element
 * @param {string} elementName 
 */
const scrollOnclick = (elementName) => document.getElementById(`${elementName}-section-title`).scrollIntoView({ block: "start", behavior: "smooth" }) 

/**
 * Display CV page
 * @component
 * @returns {object} CV
 */
function CV() {

    const { theme } = useContext(ThemeContext)
    
    return (
        <Page name={"cv"} scrollFunction={ scrollFunction } cssRules={scrollingRule}>
            <CVMenuUl id={"cv-menu"}>
                <li><PageLink to="/">
                    <CVMenuImg src={ homeLogo } title={"Page d'accueil"} alt={"Page d'accueil"} />
                </PageLink></li>
                <li onClick={() => window.scroll({top: 215, behavior: "smooth"}) }>
                    <CVMenuImg src={ menuIcons.about[theme] } title={"Informations personnelles"} alt={"Informations personnelles"} />
                </li>
                <li onClick={ () => scrollOnclick("form") }>
                    <CVMenuImg src={ menuIcons.form[theme] } title={"Formations"} alt={"Formations"} />
                </li>
                <li onClick={ () => scrollOnclick("exp") }>
                    <CVMenuImg src={ menuIcons.exp[theme] } title={"Expériences Professionnelles"} alt={"Expériences Professionnelles"} />
                </li>
                <li><a href="https://1drv.ms/b/s!AmYKTlcElLTJx2txmOmFoC1X9svg?e=OvqWWz" target={"_blank"} rel="noreferrer">
                    <CVMenuImg src={ menuIcons.dld[theme] } title={"Télécharger mon CV"} alt={"Télécharger mon CV"} />
                </a></li>
            </CVMenuUl>
            <CVSection>
                <CVH3 id={"about-section-title"}>Informations personnelles</CVH3>
                <InfoPersDiv>
                    <p>Né le 26 Avril 1979</p>
                    <p>Marié, 2 enfants</p>
                    <p>Permis B</p>
                </InfoPersDiv>
                <InfoPersDiv>
                    <p>
                        112 rue Laplace <br />
                        85000 La Roche-sur-Yon
                    </p>
                    <p>06 03 01 85 62</p>
                </InfoPersDiv>
            </CVSection>
            <Experiences name={"Experiences professionnelles"} />
            <Experiences name={"Formations"} />
        </Page>
    )
}

export default CV