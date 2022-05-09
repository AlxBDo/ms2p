/**
 * Update tags list (array and html element) - add and remode selected tags
 * @param {string} tagSeleted - tags name
 * @param {array} tags 
 * @returns {array} tags
 */
export default function selectTags(tagSeleted, tags){
    document.getElementById(tagSeleted).classList.toggle("selected-tags")
    const index = tags.indexOf(tagSeleted)
    if(index < 0) {  tags = [tagSeleted, ...tags]
    } else { tags.splice(index, 1) }
    return tags
}