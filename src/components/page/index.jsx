import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { S2pH2, S2pPage, S2pPageCtn } from './style'
import ContactMe from '../contactMe'


function Page(props) {

    const [ scrollPosition, setScrollPosition ] = useState(0)
    const { children, cssRules, name, pageClass, scrollFunction } = props

    useEffect( () => {
        if(scrollFunction){ window.addEventListener("scroll", () => setScrollPosition(window.pageYOffset)) }
    })

    if(scrollPosition > 0){ scrollFunction(scrollPosition) }
 
    return(
        <S2pPageCtn $name={ name }>
            <S2pPage id={`${name}-page`} $additionalCssRules={ cssRules } className={ pageClass && pageClass }> 
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
    scrollFunction: PropTypes.func
}

export default Page