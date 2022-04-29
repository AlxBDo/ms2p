import PropTypes from 'prop-types'
import { S2pH2, S2pPage, S2pPageCtn } from './style'
import ContactMe from '../contactMe'


function Page(props) {

    const { children, cssRules, name, pageClass } = props
 
    return(
        <S2pPageCtn $name={ name }>
            <S2pPage $additionalCssRules={ cssRules } className={ pageClass && pageClass }> 
                { name !== "home" && <S2pH2>{ name }</S2pH2>}
                { children } 
            </S2pPage>
            <ContactMe />
        </S2pPageCtn>
    )

}

Page.propTypes = {
    cssRules: PropTypes.array, 
    name: PropTypes.string.isRequired, 
    pageClass: PropTypes.string,
}

export default Page