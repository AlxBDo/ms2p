import { BallDiv, LoaderDiv } from './style'

/**
 * Diplay loader to wait data
 * @component 
 * @returns {object} Loader
 */
function Loader(){
    return (
        <LoaderDiv>
            <div>
                <BallDiv>CV</BallDiv>
                <BallDiv>Portfolio</BallDiv>
                <BallDiv>GitHub</BallDiv>
                <BallDiv>Linkedin</BallDiv>
            </div>
        </LoaderDiv>
    )
}

export default Loader