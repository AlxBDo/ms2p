import { useEffect, useState } from "react"
import PropTypes from 'prop-types'

function UseFirestore(collectionName){
    const [data, setData] = useState([]) 
    const [ isLoading, setLoading ] = useState(true)

    useEffect(() => {
        if(isLoading){
            import("firebase/firestore").then(firestore => {
                import("../firebase/config").then( (db) => {
                    firestore.getDocs(firestore.collection(db.firestoreDb, collectionName)).then( (doc) => {
                        const fsDocuments = []
                        doc.forEach( (data) => { fsDocuments.push({id: data.id, ...data.data()}) } )
                        setData(fsDocuments)
                        setLoading(false)
                    })
                })
            })
        }
    }, [collectionName, data, isLoading])

    return { data, isLoading }
}

UseFirestore.PropTypes = {
    collectionName: PropTypes.string.isRequired
}

export default UseFirestore