export const websiteIsSelected = (websiteTech, technologySelected) => websiteTech.reduce(
    (acc, curr) => (technologySelected.indexOf(curr) >= 0 || acc === true) && true, false
)
