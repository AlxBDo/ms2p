import React, { useState } from "react" 
import UseFirestore from "../../utils/useFirestore"
import Page from "../../components/page"
import selectTags from "./selectTags"
import TechnologyBadge from "../../components/websiteSheet/technologyBadge"
import websitesCollector from "./websitesCollector"
import { websiteIsSelected } from "./websitesIsSelected"
import WebsiteSheet from "../../components/websiteSheet"
import { TagsList, WebsitesPorfolio } from "./style"

function Portfolio(){

    const { data, isLoading } = UseFirestore("websites", websitesCollector) 
    const [ tagsSelected, setTagsSelected ] = useState([]) 
    const pieceOfWebsite = data.websites && parseInt((window.innerHeight-150) /data.websites.length)
  
    return (
        <Page name={"portfolio"}>
            {isLoading ? ( "Récupération des données...") : (
                <>
                    <TagsList>{data.technology.map( (techno) => (
                        <li 
                            key={`${techno}-tag`} 
                            id={techno} 
                            onClick={ () => setTagsSelected( selectTags(techno, tagsSelected) )}
                        ><TechnologyBadge technology={techno} /></li>
                    ))}</TagsList>
                    <WebsitesPorfolio>{ 
                        data.websites.map( (website, index) => (tagsSelected.length === 0 || websiteIsSelected(website.technology, tagsSelected)) 
                        && <WebsiteSheet 
                        competences={ website.competences && website.competences }
                        description={ website.description } 
                        docId={ website.id } 
                        key={ website.id }
                        name={ website.name }
                        screenshot={ website.screenshot } 
                        scrollPosition={ (pieceOfWebsite * index) + parseInt(pieceOfWebsite * 0.5)}
                        technology={ website.technology } 
                        url={ website.url } 
                        year={ website.year }
                    /> ) }</WebsitesPorfolio>
                </>
            )}
        </Page>
    )

}

export default Portfolio