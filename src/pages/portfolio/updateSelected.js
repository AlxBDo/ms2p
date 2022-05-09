import { websiteIsSelected } from "./websitesIsSelected"

/**
 * 
 * @param {array} tags 
 * @param {array} websites 
 * @returns {object} selected
 */
function updateSelected(tags, websites){
    return {
        tags,
        websites : websites.filter( (website) => (tags.length === 0 || websiteIsSelected(website.technology, tags)) && website)
    }
}

export default updateSelected