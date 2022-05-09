import React, { useEffect, useState } from "react" 
import UseFirestore from "../../utils/useFirestore"
import Page from "../../components/page"
import Loader from "../../components/loader"
import selectTags from "./selectTags"
import TechnologyBadge from "../../components/websiteSheet/technologyBadge"
import websitesCollector from "./websitesCollector"
import updateSelected from "./updateSelected"
import WebsiteSheet from "../../components/websiteSheet"
import { EmptySearchDiv, FiltersSection, SelectedTagsList, TagsList, WebsitesPorfolio } from "./style"

/**
 * Display portfolio page
 * @returns {object} Portfolio
 */
function Portfolio(){

    // get websites 
    const { data, isLoading } = UseFirestore("websites", websitesCollector) 

    // store tags and websites selected
    const [ selected, setSelected ] = useState({ tags : [], websites: [] }) 

    useEffect(() => {
        // init selected
        selected.websites.length === 0 && data.websites && selected.tags.length === 0 && setSelected(updateSelected([], data.websites))
    }, [selected.tags.length, selected.websites.length, data.websites])

    return (
        <Page name={"portfolio"}>
            { isLoading ? <Loader /> : (
                <>
                    <FiltersSection>
                        <TagsList>{data.technology.map( (techno) => (
                            <li 
                                key={`${techno}-tag`} 
                                id={techno} 
                                onClick={ () => setSelected( updateSelected(selectTags(techno, selected.tags), data.websites ))}
                            ><TechnologyBadge technology={techno} /></li>
                        ))}</TagsList>
                        <SelectedTagsList>{selected.tags.map( (techno) => (
                            <li 
                                key={`${techno}-selected-tags`} 
                                onClick={ () => setSelected( updateSelected(selectTags(techno, selected.tags), data.websites ))}
                            ><TechnologyBadge technology={techno} /></li>
                        ))}</SelectedTagsList>
                    </FiltersSection>
                    <WebsitesPorfolio>{ 
                        selected.websites.length === 0 ? (
                            <EmptySearchDiv>🥶 Aucun site ne correspond à votre recherche 🥶</EmptySearchDiv>
                        ) : selected.websites.map( website => <WebsiteSheet 
                        competences={ website.competences && website.competences }
                        description={ website.description } 
                        docId={ website.id } 
                        key={ website.id }
                        name={ website.name }
                        screenshot={ website.screenshot } 
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