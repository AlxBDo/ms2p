import styled from 'styled-components'


export const ExpArticle = styled.article`
    display: flex;
    flex-direction: column; 
    position: relative;
    margin: 1% auto 5%;
    background-color: var(--bg-color-secondary);
    transition: all 250ms ease-in-out;
    &::after {
        content: "-";
        position: absolute;
        right: 10px;
        bottom: 10px;
        color: var(--color-error);
        font-size: xx-large;
        font-weight: bold;
        cursor: pointer;
        background-color: var(--bg-color-primary);
        padding: 0 20px 5px;
        border-radius: 5px;
    }
    &.small {
        width: 300px;
        height: 300px;
        justify-content: center;
        border-radius: 150px;
        &::after {
            content: "+";
            right: -25px;
            bottom: auto;
            border-radius: 30px;
            padding: 5px 15px;
        }
        div:first-child {
            flex-direction: column;
            height: 60%;
            width: 60%;
            justify-content: center;
            background: var(--color-valid);
            margin: auto;
            border-radius: 150px;
            p {
                width: 70%;
                text-align: center;
                font-weight: bold;
                &:last-of-type { color: var(--bg-color-primary); }
            }
            ul {
                width: 80%;
                right: auto;
                bottom: 15px;
                justify-content: space-between;
                flex-direction: column;
                font-size: smaller;
                color: var(--color-valid);
                text-align: center;
                height: 35px;
                li { margin: auto; }
            }
        }
        div:last-child {
            width: 0;
            height: 0;
            overflow: hidden;
            padding: 0;
            margin: 0;
            opacity: 0; 
            transform: scale(0);
        }
    }
    @media (max-width: 1023px){
        width: 90%;
        &.small div:first-child ul { display: none ; }
    }
    @media (min-width: 1024px){
        width: 100%;
        div:first-child { flex-wrap: wrap; }
        p { margin: 4% auto; }
    }
`

export const ExpArticleDiv = styled.div`
    padding: 1%; 
    &:first-child {
        display: flex;
        align-items: center;
        transition: all 250ms ease-in-out;
        p:first-child {
            font-size: x-large;
            color: var(--color-secondary);
        }
        ul li { margin-left: 15px; }}
    }
    &:last-child {
        transition: all 150ms 100ms ease-in-out;
        ul {
            color: var(--color-link);
            font-weight: bold;
            flex-wrap: wrap;
            li { margin: 5px 15px 10px 0; }
        }
    }
    @media (max-width: 1023px){
        &:first-child {
            flex-wrap: wrap;
            justify-content: space-around;
            background-color: var(--color-valid);
            p:first-child { 
                width: 90%;
                margin: 2% auto;
                text-align: center;
            }
        }
        &:last-child {
            margin: 1% auto;
            padding-bottom: 65px;
            font-size: smaller;
            width: 90%;
            p { margin: 5% auto; }
            ul {margin: 5% auto 1%;}
        }
    }
    @media (min-width: 1024px){
        &:first-child {
            background: linear-gradient(to right, var(--color-valid) 0%, var(--bg-color-primary) 50%);
            p:first-child { width: 55%; }
            p:last-of-type { width: 25%; }
            ul {
                width: 18%;
                position: absolute;
                right: 1%;
                justify-content: end;
            }
        }
        &:last-child {
            margin: 1%;
            ul { margin: 2% auto 1%; }
        }
    }
`

export const ExpArticleP = styled.p`
    text-align: justify;
    @media (min-width: 1024px){
        margin: 0 auto;
    }
`

export const ExpArticleUl = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
`