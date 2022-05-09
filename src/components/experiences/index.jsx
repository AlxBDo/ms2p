import PropTypes from 'prop-types'
import UseFirestore from '../../utils/useFirestore'
import Loader from "../loader"
import { collectorFunction } from "./collectorFunction"
import { ExpArticle, ExpArticleDiv, ExpArticleP, ExpArticleUl } from "./style"
import { CVH3, CVSection } from "../../pages/cv/style"

function Experiences(props){

    const { name } = props 
    const params = name === "Formations" ? { fSCollectionName: "formations", id: "form", scrollAdd: 1000 } 
    : { fSCollectionName: "experiences", id: "exp", scrollAdd: 300 }
    const { data, isLoading } = UseFirestore(params.fSCollectionName, collectorFunction) 

    data && data.sort( (a, b) => {
        const aDate = a.dates ? a.dates.end : a.date 
        const bDate = b.dates ? b.dates.end : b.date 
        return parseInt(aDate.split(" ")[1]) > parseInt(bDate.split(" ")[1]) ? -1 : 1
    })
    
    return isLoading ? <Loader /> : (
        <CVSection>
            <CVH3 id={`${params.id}-section-title`}>{ name }</CVH3>
            { data.map( exp => (
                <ExpArticle key={`${exp.id}-experience`} className={"small"} onClick={ e => {
                    const element = e.target
                    element.classList.toggle("small")
                    setTimeout(() => element.scrollIntoView({block: "center", behavior: "smooth"}), 150)
                } }>
                    <ExpArticleDiv>
                        <ExpArticleP $name={"entitled"}>{ exp.entitled }</ExpArticleP>
                        <ExpArticleP $name={"entity"}>{ exp.entity }</ExpArticleP> 
                        { exp.dates ? (
                            <ExpArticleUl key={`${exp.id}-dates`} $name={"dates"}>
                                { exp.dates.start !== exp.dates.end && <li key={`${exp.id}-enddate`}>{ exp.dates.end }</li> }
                                <li key={`${exp.id}-startdate`}>{ exp.dates.start }</li>
                            </ExpArticleUl>
                        ) : <ExpArticleP $name={"date"}>{ exp.date }</ExpArticleP>
                        }
                    </ExpArticleDiv>
                    <ExpArticleDiv>
                        { exp.description && exp.description.indexOf("*") > 0 
                        ? exp.description.split("*").map( 
                            (d, index) => <ExpArticleP key={`${name}-desc-${index}`} $name={"description"}> { index > 0 && " - " }{ d }</ExpArticleP> 
                        ) : <ExpArticleP $name={"description"}>{ exp.description }</ExpArticleP> }
                        <ExpArticleUl key={`${exp.id}-skills`} $name={"skills"}>{
                            exp.skills.map( (skill, index) => <li key={`${exp.id}-skill-${index}`}>{ skill }</li> )
                        }</ExpArticleUl>
                    </ExpArticleDiv>
                </ExpArticle>
            )) }
        </CVSection>
    )
}

Experiences.propTypes = {
    name: PropTypes.string.isRequired
}

export default Experiences