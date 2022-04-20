import React from "react" 
import UseFirestore from "../../utils/useFirestore"
import WebsiteSheet from "../../components/websiteSheet"
import { PortfolioPage } from "./style"

function Portfolio(){

    const { data, isLoading } = UseFirestore("websites")

    return (
        <PortfolioPage>
            {isLoading ? ( "Récupération des données...") : (
            <section>{ data.map( (website) => <WebsiteSheet 
                description={ website.description } 
                docId={ website.id } 
                key={ website.id }
                name={ website.name }
                screenshot={ website.screenshot } 
                technology={ website.technology } 
                url={ website.url } 
                year={ website.year }
            /> ) }</section>
            )}
        </PortfolioPage>
    )

}

export default Portfolio