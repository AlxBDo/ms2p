import { useEffect, useState } from "react"


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
                    if(Array.isArray(collectionName)){
                        const collections = [] 
                        collectionName.forEach( colNam => {
                            firestore.getDocs(firestore.collection(db.firestoreDb, colNam)).then( (docs) => {
                                const documents = collectorFunction(docs)
                                collections.push({
                                    name: colNam,
                                    documents
                                })
                            })
                        })
                        setData(collections)
                        setLoading(false)
                    } else {
                        firestore.getDocs(firestore.collection(db.firestoreDb, collectionName)).then( (docs) => {
                            setData(collectorFunction(docs))
                            setLoading(false)
                        })
                    }
                })
            })
        }
    }, [ collectionName, collectorFunction, data, isLoading])

    return { data, isLoading }
}

export default UseFirestore