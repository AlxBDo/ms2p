import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { helloComeDesktop, helloComeMobile, linkComeDesktop, linkComeMobile, pDescriptionCome } from './keyframes'


const cvIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEoUlEQVR4nO2b32scVRTHP2cn/YG0YEJmd9K8+2CoSG0RS4tVFPEH1jelmlf1wRd9MMVCwCrS9kH8F2wtCP6CKKK2/oC2T1WraLDig8bS3Ts/TLYopdlk5/iQrabtzmRndnbNmPm8ZJl777nnnD33O/fObKCgoKCgYO0iUQ3T07p+eDh4RWEcGOmjT1lSFfRYENiTY2PSaNchMgGu6x1SZKJ3vvUPQQ9XKuX9iQYZ179oXF9d193ZI796jud5u4zrq3H9i4kHtwZqD/zqKyvFUUpmLDhTc/1Tebq2EgNJOoPuvFE0Vvu1eBJVwP+RRBWgcHrpT36upaYQwTVCQhGMx5hgL+jzCNsBEM4S8rrj2B9mOU+WZJaApZ2jXrtzVPYg7DFe8JpTHj7QiR3jBmdAU22+FE6PVOzdScZksgSMCfa2ts0NRSasEqNWiVEV2Q80UH3JGP+RTmwpGnbhSnaalUQEjfG/Mq6vNS+44exQ84IJ4/pqPP+LzJxLQH9EULgDYED06PVNFuGbAGhLF1YZWWnAJgDbtmvXN5TLZWNcH2BzJ4ZyqQFZ0m8NyKQCBOYUBn3f32LbdnV5WxAEo4tNBZjtxFbSb7BbMqkAhW8AFlXGr29bDLl67VwWc2VNVhXwnsJ9onqw5gUMiB6DVkJUX17qpFOd2GqnAWnWdqd0lYBqtXqTZQ1MKrzQurReVA81lUMAsnxJqrxhXP9Oq8Sztm3/GWVT0bDNkbab+7sS8+gvdQI8z9vUVPlYYTcQCvIOMAW6T2EHqICcE+SYovcDTwD7miG3zs7O7hkaGrrUzm6/NSBVAlTVcv1gSpaCNxrKo87I8NlW81tthhw1xhxBrI+A2xuN5nGgo51hr0klgsb74xmUewAXbe4c+Tf4SBzH+cEqcRfwO8LDrus/mWburEmcAN/3N5fQVwFU9DnHcX7tdKxt21UhfBrQECZV1Uo6f9YkTsCi6gMKgyhfj5TL7yYdX6lUPgW+FLjF87zHko7PmrgEtFXekl5du/pB2klV5P2lT9bjaW1kReIKUCn9DPJbGK47nnbSZmP926A/qvBLWhs9p3gmuEZY8wmI2wi13UJ2c15fieV7/rh5Ep4NYrfCyUWwu/P6yuY7myczbYqrgLZZ69dePcN5Yl8XFhoQ09Z3DYhxpJvnAbnSgOhpe8Sq1YAMidWAxEvgv2bZr9eeArZ0OOxyVEOmL0f7wfCwf1CRFxMNEmaimnKXAEXGgVAIt1Uqle+j+s3U64Mb5hdOAWOqRB7b83gbHAEuxwV/4cKloY3zCyeBMeA7S/RIVN+4BKy69b+MSN/m5uZuXreh8YnCNpTzVomHyuXyX1H981gBEOH3TL0+OD+/eAJlB8p5y+Ledu8rVzSUA26ogJl6fXDDlYXPELZ3GjzkNwHX+D1Trw9unF84kTR4yOFdoMU/FVCr1WyZXzipcFvS4CHnFVCr1WwprfuclMFDjivAGFNGBk6Cbk0bPMRXQBWWfnKe2s3eUVKxToFuBaaheXea4CHn/zAh8K1q80HHcby0NiIrIAjsSUEP06qEVUQD4SdUDzQaV3Z1E3xBQUFBwVrnbxGfcJgAWnD4AAAAAElFTkSuQmCC"
const websiteIcon = "data:image/png;base64,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" 
const githubIcon = "data:image/png;base64,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" 
const linkedinIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAD9ElEQVR4nO2bz4sbZRjHv9/ZqduKkdSd2UlS6xYF15Kb7LVsr0WoIPgXCK1aPJSqIIjopYcWBEtXqmChRfDgxVuLKLgW1JOIHsq6l27VJJOZ2kChTZPJ+/Rgqdv1nWyYyfyImc8t7/O87/N9v5t3ZjbvO0BBQUHBFMPtEhqNmwuG0T8KGsuAOKP0yRgB6ELUqlLmuVrtievDkodOptVuvwHhaQCzY5WYHl0h36zOWythCaEG3J/8mWR0pYuAx6qO9bEupjWg0bi5YMwEa5jcv/xWumows6hbDoYu2zD6r+L/M3kA2GmY6oguoDUAxHKicrJA5KCuWW8A6CSpJSOqusYQAzCToJCs0M4pzICpYeoNMGP2vw3gcyF/M0RmhViC4GVM0BKKYQCvBSYPPDk39+fmVte9cUagvgWwK6a2VIi8BAic2Dp5AHCcuR9BfhhPVnrEuAYMfgkNKfkp+rjpEtkAEaMeGiP2Rx03baIvAeL0Rqeze2t7s9ncR+DteLLSI/JFUIDF2bv9Ndf1zgL8VVGZhmBJwGMAHhujxkSJexu0BfgAEFAIGYukdJn6B6GpNyDGNUAuEuyGhCsADj/4RFyF4MqQwQ6B2PtwE34nsQZFn0RJgBogSwAeiapZR3QDBsGJaq3m62KNdvuAIfzXAMGVimMfDRur6XqXCOwF0BHgIxUYn+3ZM/fH1jzP80qB8CWKvAfg6ajaN5OnJfANZLBYdez3dZMHANu2b1XnrQs3fGs/hOfHUTTuXWAsUHDRcawvSQaj5Nfr7AF4xXXbXQFfj1M7F9+ASsX+YtTJb8b37eMEfo5TOxcGRKVeZ09R3o0zRi4NWF9fH/kX6YptXwZxNWqt3BggImar7b/TannXS4+Xuy3Xu91yva8avv/csH4kBeDXUevmxgC37Z+FyMlNzwO7ALw4M5AfPM97dlhfCr6PWjcXBjQ873kA2o0LAXYPFE4N668UtLfNUciFAVQ4jOEbtS8Muy6QgfaBbBTyYQDwzDYp5qPl8r6woFLqVtTauTBAAGu7nB0idhK1c2HAKAQJHcyYGAOSojAgawFZUxiQtYCsKQzIWkDWFAZkLSBrpt6AyD+KmqZZ3uh0BroYe73SQ58hs7qN1Afxu/0d29UjUAobw+z1yirivpz2+brletcALEQbMrdsVBz7P/9RTv0SCDNA+9WecLRzCjsp2kpSSUY0dY16A0StJiolC8jvdM1aA0zTWAFwJ1FB6dJVgfGpLqA1wLKsv4R8K1lN6UHgeNirM6F3geq8tXL/vE/YGYBJ4A6B1xzHPheWMMJLU38/ZZjqiIgs858j57l/aUqAJsnVQZ+fhG21FxQUFBQAuAciXyhNIsR8xAAAAABJRU5ErkJggg==" 


const linkDef = `
    width: 100px;
    height: 65px;
    background-repeat: no-repeat;
    background-position: center 65px;
    color: white;
    text-align: center;
    padding: 35px 25px 50px;
    border-radius: 75px;
    font-weight: bold;
    text-decoration: none;
    transition: all 150ms linear;
    &:hover {
        transform: scale(1.1);
        box-shadow: 1px 1px 2px black;
    }
    @media (max-width: 1023px){
        margin: 5% auto;
        &:first-of-type { margin-left: -2%; }
        &:nth-of-type(2), &:last-of-type { margin: -25% -5% 0 55% }
        &:nth-of-type(3) { margin: -6% 0 0 -2% }
    }
`


export const ImportantSpan = styled.span`
    font-size: larger;
    font-weight: bolder;
    color: var(--color-secondary);
`

export const S2pPageIconsCtn = styled.div`
    margin-top: 3%;
    display: flex;
    @media (min-width: 300px) and (max-width: 1023px){
        max-width: 440px;
        flex-wrap: wrap;
        margin: auto;
        width: 80%;
    }
    @media (min-width: 1024px){ justify-content: space-around; }
`

export const S2pPageExternalLink = styled.a`
    ${linkDef}
    ${ props => props.name === "github" ? (`
        background-image: url(${githubIcon}); 
        background-color: var(--color-valid); 
    `) : (`
        background-image: url(${linkedinIcon}); 
        background-color: var(--color-yellow);
    `) }
    @media (max-width: 1023px){
        animation: ${ props => linkComeMobile} 500ms ${ props => (1500 - parseInt(props.animationdelay)) + 2000}ms ease-in-out backwards;
    }
    @media (min-width: 1024px){
        animation: ${ props => linkComeDesktop} 250ms ${ props => parseInt(props.animationdelay) + 2000}ms ease-in-out backwards;
    }
`

export const S2pPageLink = styled(Link)`
    ${ linkDef }
    ${ props => props.name === "cv" ? (`
        background-image: url(${cvIcon}); 
        background-color: var(--color-link);
    `) : (`
        background-image: url(${websiteIcon}); 
        background-color: var(--color-error); 
    `) }
    @media (max-width: 1023px){
        animation: ${ props => linkComeMobile} 500ms ${ props => (1500 - parseInt(props.animationdelay)) + 2000}ms ease-in-out backwards;
    }
    @media (min-width: 1024px){
        animation: ${ props => linkComeDesktop} 250ms ${ props => parseInt(props.animationdelay) + 2000}ms ease-in-out backwards;
    }
`

export const S2pTextDiv = styled.div`
    width: 85%;
    margin: auto;
    h3 { 
        border-bottom: 3px solid;
        font-family: "Kaushan Script";
        overflow: hidden;
    }
    p { 
        text-align: justify; 
        overflow: hidden;
    }
    @media (max-width: 1023px){
        h3 { 
            margin: 15% auto 5%;
            font-size: xx-large ; 
            padding-bottom: 3%; 
            animation: ${ helloComeMobile } 250ms 1500ms ease-in-out backwards;
        }
        p { 
            margin: 15% 5%; 
            &:first-of-type {
                animation: ${pDescriptionCome} 250ms 4500ms ease-in-out backwards;
            }
            &:last-of-type {
                animation: ${pDescriptionCome} 250ms 4750ms ease-in-out backwards;
            }
        }
    }
    @media (min-width: 1024px){
        h3 { 
            position: absolute;
            top: 25px;
            width: 873px;
            height: 100px;
            text-align: center;
            font-size: xxx-large;
            animation: ${ helloComeDesktop } 500ms 250ms ease-in-out backwards;
        }
        p { animation: ${pDescriptionCome} 250ms 4s ease-in-out backwards; }
    }
`