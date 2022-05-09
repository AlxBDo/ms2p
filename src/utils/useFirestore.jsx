import { useEffect, useState } from "react"

/**
 * Firestore hook
 * @param {string} collectionName - firestore collection name
 * @param {function} collectorFunction - apply to collect data
 * @returns {object} UseFirestore - { data, isLoading }
 */
function UseFirestore(collectionName, collectorFunction = false){
    const [data, setData] = useState([]) 
    const [ isLoading, setLoading ] = useState(true) 

    if(!collectorFunction){
        collectorFunction = (docs) => {
            let documents = []
            docs.forEach( (doc) => documents.push({id: doc.id, ...doc.data()}))
            return documents
        }
    }  
    useEffect(() => {
        if(isLoading){ 
            import("firebase/firestore").then(firestore => {
                import("../firebase/config").then( (db) => {
                    firestore.getDocs(firestore.collection(db.firestoreDb, collectionName)).then( (docs) => {
                        setData(collectorFunction(docs))
                        setLoading(false)
                    })
                })
            })
        }
    }, [ collectionName, collectorFunction, isLoading])

    return { data, isLoading }
}

export default UseFirestore