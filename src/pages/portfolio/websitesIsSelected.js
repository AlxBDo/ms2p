export const websiteIsSelected = (websiteTech, technologySelected) => websiteTech && websiteTech.reduce(
    (acc, curr) => technologySelected.indexOf(curr) >= 0 ? acc + 1 : acc, 0
) === technologySelected.length
