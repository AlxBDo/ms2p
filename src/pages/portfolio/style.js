import styled from 'styled-components' 

export const TagsList = styled.ul`
    list-style: none;
    padding: 2% 0;
    margin: 3% auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    background-color: var(--bg-color-secondary);
    &::before {
        content: "Filtrer : ";
        line-height: 28px;
        font-size: smaller;
        margin-right: 2%;
        color: var(--color-secondary);
    }
    li {
        margin: 0 1%;
        width: 28px;
        overflow: hidden;
        border-radius: 27px;
        height: 28px;
        border: 2px solid;
        cursor: pointer;
        transition: all 250ms linear;
        opacity: 0.65;
        color: var(--bg-color-secondary);
        transform: scale(0.9);
        order: 1;
        &.selected-tags {
            transform: scale(1);
            order: 0;
        }
        &.selected-tags, &:hover {
            opacity: 1;
            color: var(--color-primary);
        }
        &:hover {
            border-radius: 0;
            width: auto;
        }
    }
`

export const WebsitesPorfolio = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-item: center;
    width: 1024px;
    margin: 0 auto;
`