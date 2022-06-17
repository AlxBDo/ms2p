import { lazy, Suspense, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Loader from '../loader'
import { S2pH2, S2pPage, S2pPageCtn } from './style'


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
    const { children, containerClass, cssRules, name, onWheelFunction, pageClass, scrollFunction } = props
    const Header = lazy( () => import('../header') )


    useEffect( () => {
        document.title = `Alexandre Bidaud - ${name}`
        window.addEventListener("scroll", () => setScrollPosition(window.pageYOffset))
    })

    scrollPosition > 0 && scrollFunction && scrollFunction(scrollPosition)
 
    return(
        <S2pPageCtn id="page-ctn" $name={ name } $additionalCssRules={ cssRules } className={ containerClass } onWheel={ onWheelFunction }>
            <Suspense fallback={ <Loader /> }>
                <Header />
            </Suspense>
            <S2pPage id={`${name}-page`} className={ pageClass && pageClass }> 
                { name !== "home" && <S2pH2>{ name }</S2pH2>}
                { children } 
            </S2pPage>
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