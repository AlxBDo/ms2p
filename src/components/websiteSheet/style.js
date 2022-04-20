import styled from 'styled-components'

export const WebsiteDescription = styled.p`
    text-align: justify;
    font-size: smaller;
    transition: all 250ms ease-out;
    &.hidden { 
        height: 0; 
        overflow: hidden; 
        margin-bottom: -50px;
        transform: translateY(-50px);
        transition: all 250ms ease-in;
    }
`

export const WebsiteName = styled.p`
    font-size: x-large; 
    font-weight: bold;
`

export const WebsiteSheetCont = styled.article`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    max-width: 500px;
    width: 48%;
    margin: 1% 0;
    height: 150px;
    overflow: hidden;
    div {
        display: flex;
        width: 100%;
        align-items: center;
    }
    p { 
        margin: 0 1%;
        max-width: 295px;
    }
`

export const WebsiteScreenshot = styled.img`
    width: 35%;
    object-fit: cover;
    border-radius: 5px;
`

export const WebsiteTechnology = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 1%;
`

export const WebsiteTechnologyLi = styled.li`
    list-style: none;
    img { height: 25px; }
`

export const WebsiteUrl = styled.a`
    text-decoration: none;
`

export const WebsiteYear = styled.p`

`