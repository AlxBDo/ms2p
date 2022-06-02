import { useLocation, useNavigate } from "react-router-dom";
import { StyledLink } from "./style";

/**
 * Display Link and apply page exit animation function
 * @param {object} props 
 * @param {object} props.children 
 * @param {string} props.name 
 * @param {string} props.to   
 * @returns {object} PageLink - react component
 */
export const PageLink = ({ animationdelay, animationendposition, animationposition, children, cssRules, name, to }) => {

    const navigate = useNavigate()
    const currentPage = useLocation().pathname.substring(1)

    const addExistClass = e => {
        e.preventDefault()
        document.getElementById(`${currentPage !== "" ? currentPage : "home"}-page`).classList.add("exit-page")
        setTimeout( () => navigate(to), 500)
    } 

    return <StyledLink
        to={ to } 
        name={name} 
        animationposition={ animationposition && animationposition } 
        animationendposition={ animationendposition && animationendposition } 
        animationdelay={ animationdelay && animationdelay } 
        $cssRules={ cssRules }
        onClick={ addExistClass } 
    >{ children ?? name }</StyledLink>

}