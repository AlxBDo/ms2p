import React, { useEffect, useState } from "react" 
import Page from "../../components/page"
import Experiences from "../../components/experiences"
import { CVSection } from "./style"

function CV() {

    const [experiences, setExperiences] = useState([]) 
    const [training, setTraining] = useState([]) 
    const [ isLoading, setLoading ] = useState(true) 

    const collectorFunction = (docs) => {
        let documents = []
        docs.forEach( (doc) => documents.push({id: doc.id, ...doc.data()}))
        return documents
    }

    useEffect(() => {
        if(isLoading){ 
            import("firebase/firestore").then(firestore => {
                import("../../firebase/config").then( (db) => {
                    firestore.getDocs(firestore.collection(db.firestoreDb, "experiences")).then( (docs) => {
                        setExperiences(collectorFunction(docs))
                    })
                    firestore.getDocs(firestore.collection(db.firestoreDb, "formations")).then( (docs) => {
                        setTraining(collectorFunction(docs))
                        setLoading(false)
                    })
                })
            })
        }
    }, [ experiences, isLoading])
    return (
        <Page name={"cv"}>{
            isLoading ? ( "Récupération des données...") : (
                <>
                    <Experiences experiences={experiences} name={"Experiences professionnelles"} />
                    <Experiences experiences={training} name={"Formations"} />
                </>
            )
        }</Page>
    )
}

export default CV