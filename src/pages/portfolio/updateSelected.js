import { websiteIsSelected } from "./websitesIsSelected"

function updateSelected(tags, websites){
    return {
        tags,
        websites : websites.filter( (website) => (tags.length === 0 || websiteIsSelected(website.technology, tags)) && website)
    }
}

export default updateSelected