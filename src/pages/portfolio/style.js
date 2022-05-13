import styled from 'styled-components' 

export const EmptySearchDiv = styled.div`
    margin: 10% auto; 
    text-align: center;
    padding: 5%;
    font-size: x-large;
    color: var(--color-error);
`

export const FiltersSection = styled.section`
    padding: 2% 0;
    ul {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        li {
            height: 28px;
            border: 2px solid;
            cursor: pointer;
            transition: all 250ms linear;
            color: var(--bg-color-secondary);
        }
    }
`

export const SelectedTagsList = styled.ul`
    background-color: var(--bg-color-secondary);
    width: 100%;
    li { 
        margin: 10px;
        transform: scale(0.85) rotate(-10deg); 
    }
`
 
export const TagsList = styled.ul`
    width: 95%;
    padding: 0;
    position: relative; 
    &::before {
        content: "Filtrer : ";
        line-height: 28px;
        font-size: smaller;
        color: var(--color-secondary);
    }
    li {
        width: 28px;
        margin: 5px;
        border-radius: 27px;
        overflow: hidden;
        opacity: 0.65;
        transform: scale(0.9);
        &.selected-tags {
            margin: 0;
            padding: 0; 
            width: 0; 
            height: 0;
        }
        &:hover {
            border-radius: 0;
            width: auto;
            margin: 5px 0;
            opacity: 1;
            color: var(--color-primary);
        }
    }
    @media (max-width: 1023px){
        margin: 10% auto 4%;
        &::before {
            position: absolute;
            left: 5%;
            top: -25px;
        }
    }
    @media (min-width: 1024px){
        margin: 1% auto 2%;
        &::before { margin-right: 2%; }
    }
`

export const WebsitesPorfolio = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-item: center;
    margin: 0 auto;
`
