import { S2pPage, S2pPageCtn } from './style'
import ContactMe from '../contactMe'


function Page(props) {

    const { children, cssRules, pageClass } = props
    
    return(
        <S2pPageCtn>
            <S2pPage $additionalCssRules={ cssRules } className={ pageClass && pageClass }> { children } </S2pPage>
            <ContactMe />
        </S2pPageCtn>
    )

}

export default Page