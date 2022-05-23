import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import Header from '../header'
import { S2pH2, S2pPage, S2pPageCtn } from './style'
import ContactMe from '../contactMe'

/**
 * Display website page and child's components
 * @component 
 * @param {object} props 
 * @param {object} props.children 
 * @param {object} props.cssRules - css object of styled components 
 * @param {string} props.name - an id will be generate to : "name"-page 
 * @param {string} props.pageClass - html class to apply 
 * @param {function} props.scrollFunction - execute on scroll and receive scroll position 
 * @returns {object} Page
 */
function Page(props) {

    const [ scrollPosition, setScrollPosition ] = useState(0)
    const { children, cssRules, name, pageClass, scrollFunction } = props
    const location = useLocation()
    const homeClassName = location.pathname === "/" && "home" 

    useEffect( () => {
        document.title = `Alexandre Bidaud - ${name}`
        if(scrollFunction){ window.addEventListener("scroll", () => setScrollPosition(window.pageYOffset)) }
    })

    if(scrollPosition > 0){ scrollFunction(scrollPosition) }
 
    return(
        <S2pPageCtn $name={ name } className={ homeClassName }>
            <Header htmlClass={ homeClassName } />
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