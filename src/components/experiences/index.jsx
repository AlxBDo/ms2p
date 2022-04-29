import PropTypes from 'prop-types'
import { ExpArticle, ExpArticleH3, ExpArticleDiv, ExpArticleP, ExpArticleUl } from "./style"
import { CVSection } from "../../pages/cv/style"

function Experiences(props){

    const { experiences, name } = props

    experiences.sort( (a, b) => {
        const aDate = a.dates ? a.dates.end : a.date 
        const bDate = b.dates ? b.dates.end : b.date 
        return parseInt(aDate.split(" ")[1]) > parseInt(bDate.split(" ")[1]) ? -1 : 1
    })
    
    return (
        <CVSection>
            <ExpArticleH3>{ name }</ExpArticleH3>
            { experiences.map( exp => (
                <ExpArticle key={`${exp.id}-experience`} className={"small"} onClick={ e => e.target.classList.toggle("small") }>
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
                        { exp.description && <ExpArticleP $name={"description"}>{ exp.description }</ExpArticleP> }
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
    experiences: PropTypes.arrayOf( PropTypes.object ).isRequired, 
    name: PropTypes.string.isRequired
}

export default Experiences