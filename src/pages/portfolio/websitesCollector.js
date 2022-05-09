/**
 * Create and return websites and technology array
 * @param {object} docs - firestore documents
 * @returns {object} websitesAndTechnology 
 */
export default function websitesCollector(docs) {
    const websites = []
    let techno = [] 
    docs.forEach( (doc) => {
        const document = doc.data()
        websites.push({id: doc.id, ...document})
        techno = [...document.technology, ...techno]
    })
    return {websites, technology: Array.from(new Set(techno))}
}