import React, { useState } from "react" 
import PropTypes from 'prop-types' 
import { WebsiteDescription, WebsiteName, WebsiteSheetCont, WebsiteScreenshot, WebsiteTechnology, WebsiteTechnologyLi, WebsiteUrl, WebsiteYear } from "./style"
import TechnologyBadge from "./technologyBadge"

const getShowParams = (showMore) => {
    if(showMore) {
        return { className: false, text: "moins" }
    } else {
        return { className: "hdocIdden", text: "plus"}
    }
}

function WebsiteSheet(props){
    const { description, docId, name, screenshot, technology, url, year } = props
    const [ showMore, setShowMore ] = useState(false)
    const { className, text } = getShowParams(showMore)
    return (
        <WebsiteSheetCont>
            <WebsiteScreenshot src={ screenshot } />
            <div>
                <WebsiteName>{ name }</WebsiteName> 
                <WebsiteYear>{ year }</WebsiteYear>
            </div>
            <WebsiteDescription className={ className }>{ description }</WebsiteDescription>
            <WebsiteTechnology>{ technology.map( 
                techno => <WebsiteTechnologyLi key={techno + docId}><TechnologyBadge technology={ techno } /></WebsiteTechnologyLi> 
            ) }</WebsiteTechnology>
            <WebsiteUrl href={ url } target="_blank" />
            <button onClick={ () => setShowMore(!showMore) }>Voir { text }</button>
        </WebsiteSheetCont>
    )
}

WebsiteSheet.propTypes = {
    description: PropTypes.string.isRequired,
    docId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    screenshot: PropTypes.string.isRequired,
    technology: PropTypes.arrayOf(PropTypes.string).isRequired,
    url: PropTypes.string.isRequired, 
    year: PropTypes.number.isRequired
}

export default WebsiteSheet