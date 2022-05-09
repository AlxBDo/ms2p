export const collectorFunction = (docs) => {
    let documents = []
    docs.forEach( (doc) => documents.push({id: doc.id, ...doc.data()}))
    return documents
}