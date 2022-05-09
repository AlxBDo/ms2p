/**
 * Check if website is selected
 * @param {array} websiteTech - technology used to develop website
 * @param {array} technologySelected - technology selected to filter websites 
 * @returns {boolean} isSelected - true : website is selected
 */
export const websiteIsSelected = (websiteTech, technologySelected) => websiteTech && websiteTech.reduce(
    (acc, curr) => technologySelected.indexOf(curr) >= 0 ? acc + 1 : acc, 0
) === technologySelected.length
