import React, { useState } from "react" 
import PropTypes from 'prop-types' 
import { WebsiteDescription, WSDiplayBtn, WebsiteName, WebsiteSheetCont, WebsiteSheetHeader, WebsiteScreenshot, WebsiteTechnology, WebsiteTechnologyLi, WebsiteUrl, WebsiteYear } from "./style"
import TechnologyBadge from "./technologyBadge"

const getShowParams = (showMore) => {
    if(showMore) {
        return { className: "large", text: "-" }
    } else {
        return { className: "small", text: ""}
    }
}

function WebsiteSheet(props){
    const { competences, description, docId, name, screenshot, scrollPosition, technology, url, year } = props
    const [ showMore, setShowMore ] = useState(false)
    const { className, text } = getShowParams(showMore)

    return (
        <WebsiteSheetCont className={ className }>
            <WebsiteScreenshot src={ screenshot } />
            <WebsiteSheetHeader>
                <WebsiteName>{ name }</WebsiteName> 
                <WebsiteYear>{ year }</WebsiteYear>
            </WebsiteSheetHeader>
            <WebsiteDescription>
                <p>{ description }</p>
                { competences && (
                    <ul key={`competencesListWS${ docId }`}>
                        { competences.map( (competence, index) => (
                            <li key={`competence${ docId + index }`}>{ competence }</li>
                        ))}
                    </ul>
                )}
            </WebsiteDescription>
            <WebsiteTechnology>{ technology.map( 
                (techno, index) => { return (className === "large" || (className === "small" && index < 4)) && <WebsiteTechnologyLi key={techno + docId}><TechnologyBadge technology={ techno } /></WebsiteTechnologyLi> }
            ) }</WebsiteTechnology>
            <WebsiteUrl id={`${docId}-link`} href={ url } target="_blank" />
            <WSDiplayBtn onClick={ () => {
                setShowMore(!showMore)
                setTimeout(() => window.scrollTo({top: scrollPosition, behavior: "smooth"}), 450)
            } }>{ text }</WSDiplayBtn>
        </WebsiteSheetCont>
    )
}

WebsiteSheet.propTypes = {
    competence: PropTypes.arrayOf(PropTypes.string), 
    description: PropTypes.string.isRequired,
    docId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    screenshot: PropTypes.string.isRequired,
    technology: PropTypes.arrayOf(PropTypes.string).isRequired,
    url: PropTypes.string.isRequired, 
    year: PropTypes.number.isRequired
}

export default WebsiteSheet