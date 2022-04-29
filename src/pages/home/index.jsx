
import Page from '../../components/page'
import { homePageAnimations, S2pPageIconsCtn, S2pPageLink } from './style'

function Home(){

    return(
        <Page cssRules={homePageAnimations} name={"home"} >
            <div>
                <h3>Bienvenue !</h3>
                <p>Merci de venir découvrir mes compétences, expériences et réalisations.</p>
            </div>
            <S2pPageIconsCtn>
                <S2pPageLink to={"/cv"}>CV</S2pPageLink>
                <S2pPageLink to={"/portfolio"}>Portfolio</S2pPageLink>
                <S2pPageLink to={"/apropos"}>A Propos</S2pPageLink>
            </S2pPageIconsCtn>
        </Page>
    )

}

export default Home