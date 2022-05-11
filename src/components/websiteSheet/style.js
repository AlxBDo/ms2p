import styled from 'styled-components'
import { largeWSBtn, largeWSUrl, openWSCtn, openWSItemHide } from './keyframes'


export const WSDiplayBtn = styled.button`
    position: absolute;
    transition: all 250ms ease-out;
    cursor: pointer;
}
`

export const WebsiteDescription = styled.div`
    flex-wrap: wrap;
    align-items: center;
    text-align: justify;
    transition: all 250ms ease-out;
    p, ul { width: 100%; } 
    ul {
        justify-content: space-between;
        margin: 5px 10px; 
        font-size: small;
        color: var(--color-secondary);
        li {
            width: 45%;
            margin-bottom: 5px;
        }
    }
`

export const WebsiteName = styled.p`
    font-size: xx-large; 
    font-weight: bold;
    color: var(--color-link);
`

export const WebsiteSheetCont = styled.article`
    display: flex;
    flex-direction: column;
    position: relative;
    p {  
        margin: 0 1%; 
        transition: all 250ms ease-in; 
    }
    ul { 
        padding: 0; 
        list-style: none;
        display: flex;
    }
    &.small {
        width: 250px;
        height: 250px;
        margin: 5% 3%;
        text-align: center;
        background-color: var(--bg-color-secondary);
        border: 3px solid white;
        border-radius: 2%;
        justify-content: center;
        align-items: center;
        a {
            top: 42%;
            left: 43%;
        }
        button {
            top: 42%;
            right: -4.5%;
            padding: 1px 7px 4px;
            background-color: white;
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAD80lEQVRoge2YzW8bRRjGn5lZJ5VrkfTQFhDi44AQ4kOqxJeQUL12SPMho1zomX8gW9lxcs6tpntYyZUq5Yw45QJxEseumghuHJAAIZqQAk1aIFE5IKQG2d6dl0McKQpF2XdmXQkpv6O9j9/38ew7M3qAE07oCcL2Bwpzs2m9l/kEhAtSY6xWLq8n0RgXKyNdE58DGOp+tKsVcnWv/IN9azyMjRTmZtP6YWYBAvkjX+0Cyl0qFm9b9sZCmogKc7Np2svUHmECAM5DRKvjQfCyZW8s2CtSmJtN678ziyC4xzx6X5F0F0qlO4a9sWAZGfb906mUqMUwccB9rXS27s38ZNAbC9arlXLkpwwTAPCMjNRq4br/ArMvNswZoRa/BD2rQ7E2EgTP87XxYRlJk/wIhFsGdZ5T0F/0cmWMhp32MjUCcgbltqWjs7XJ6V/42mN+2URkZwZbEVR2pVi8a1L7v7A7EONtw48icTNJXFGWAGQN5HcEyexiqfSrTQ8HWF8ah33/tONgSUBcNJBvCpJuEmaMriiHaU5PPwxDjAP40kD+Igm99sH1j5+27cPaCLBvphPSGAzNRKGyNmP9ah1mtFp9QkbtJoC3DRrZ6EC5jWLxd5PaiazIAXXP+6vVCi8B+IqrJeClFKK1S0HwlEntRFfkgKFKZaC/32kCeIstFlintnaXZ2Z2eLIeMVSpDPT1OzcF8CZbbGCmZ0YAYCIIBtuImiZmCPhORcjXyuU/4jyf6Iwc5bNi8c+I5AiAb7haAbyuFVZAFOvP7qkRAJCOE4KwZyg//+H8fKwee2pkqFIZULrdgMC7BvJdSXJk/vLlKM7DPR32U6ecFSK8wxYL7GiJPCdWcthFYtDdfhtE/IMRAjsglat7vDhJsQsdw0QQDApHGJ3u2E9eLi6WSj9yhYnOyEQQDHYQNWBwEBJwzyY+SmxGLM+Me6S0axMbJfJqjd+4ekZHuCkg+Kc4xDYpnbPNvqyHffzG1TNoOU1AvMFXi21AunVv6mfbPqxWZLRaPYsOVgXEBQP5lnTIXbwylUiiYjwjo9XqWRm1bwF4zUC+JR1yk4yFjFZk2PfPOUKbmrgbQbnLV6YSjYPY2++w759LOcLUxKZW0XtJZ1oAc9gPmXjVoNamIOnWvXIi8c9RWEZSjmjAwIQANqQT5RYmy79xtXHhbr/8NF5gvUMq15gsG4UKceHNSH9nFMDXcR8XwIZSUd40GeHA3n5jb7sC6yGp3OMwsV/OgGPNPGYTgOHtt+55D7TqywP4/t/f0m1qa+OgzRSr2293O14F8Er3o2+16nu/7nkP7FvjYX2NH7t27UnZJ5cBtESIQtz45oQT/if8A0xQencR1NjCAAAAAElFTkSuQmCC");
            background-size: 25px;
            height: 35px;
            width: 45px;
            background-repeat: no-repeat;
            background-position: 7px center;
            border: none;
            border-radius: 25px 0px 0 25px;
        }
        p, div { display: none; }
        img:not(li img) {
            width: 150px;
            border-radius: 80px;
            height: 150px;
            opacity: 0.75;
            margin: auto;
            border: 2px solid var(--bg-color-secondary);
        }
        ul {
            width: 70%;
            position: absolute;
            text-align: center;
            height: 28px;
            bottom: 4%;
            transform: scale(0.85);
            li:first-child, li:last-child {
                margin-top: -15px;
            }
            li {
                width: 27px;
                overflow: hidden;
                border-radius: 25px;
                height: 27px;
                margin: 1px auto;
                margin-top: 1px;
                img {
                    height: 27px;
                    object-fit: contain;
                }
            }
          }
        }
    }
    &.large {
        justify-content: space-between;
        background-color: var(--bg-color-secondary);
        margin: 5% 0;
        padding: 1%;
        border-radius: 10px;
        border: 1px solid white;
        overflow: hidden;
        animation: ${openWSCtn} 250ms 250ms ease-in-out backwards;
        a { animation: ${largeWSUrl} 250ms ease-in-out; }
        button {
            padding: 0px 15px;
            text-align: center;
            background-color: var(--bg-color-primary);
            border-radius: 25px;
            font-size: large;
            font-weight: bold;
            border: 2px solid;
            box-shadow: 1px 1px 1px var(--bg-color-primary);
            color: var(--color-link);
            animation: ${largeWSBtn} 250ms ease-in-out;
        }
        div {
            display: flex;
            &:not(:first-of-type) { margin-bottom: 15px; }
            animation: ${openWSItemHide} 200ms 350ms ease-in-out backwards;
        }
        img:not(li img) {
            border-radius: 5px;
            min-height: 225px;
        }
        ul {
            flex-wrap: wrap;
            animation: ${openWSItemHide} 200ms 350ms ease-in-out backwards;
            &:not(div){ margin: 5px auto 0; }
            li { 
                margin-right: 10px;
                color: var(--color-valid);
                img { height: 25px; }
            }
        }
    }
    @media (max-width: 1023px){
        align-items: center;
        width: 90%;
        a { 
            left: 5%;
            top: 2%;
        }
        button {
            right: 5%;
            top: 3%;
        }
        div {
            justify-content: space-between;
            margin: 5% auto;
        }
        div, img:not(li img) { width: 90%; }
        img:not(li img) { margin: 20% auto 1%; }
    }
    @media (min-width: 1024px) {
        &.large {
            flex-wrap: wrap;
            height: 260px;
            a { right: 115px; }
            button {
                right: 56px;
                top: 18px;
            }
            div { width: 70%; }
            img:not(li img) {
                width: 25%;
                margin: auto;
            }
            ul {
                flex-wrap: wrap;
                animation: ${openWSItemHide} 200ms 350ms ease-in-out backwards;
                &:not(div){  max-width: 650px; }
                li { 
                    margin-right: 10px;
                    color: var(--color-valid);
                    img { height: 25px; }
                }
            }
        }
    }
`

export const WebsiteSheetHeader = styled.div`
    align-items: baseline;
    margin-top: 1%;
    border-bottom: 2px solid var(--color-link);
    padding-bottom: 1%;
    @media (min-width: 1024px) {
        p:first-child { width: 50%; }
    }
`

export const WebsiteScreenshot = styled.img`
    object-fit: cover;
    transition: all 150ms 100ms ease-out;
    width: 60%;
`

export const WebsiteTechnology = styled.ul`
    justify-content: center;
    align-item: center;
    transition: all 50ms 150ms ease-out;
    margin: 5px 10px;
    font-size: small;
    color: var(--color-secondary);
`

export const WebsiteTechnologyLi = styled.li`
    list-style: none;
    transition: all 50ms 200ms ease-out;
`

export const WebsiteUrl = styled.a`
    text-decoration: none;
    background-image: url(https://img.icons8.com/external-line-zulfa-mahendra/48/000000/external-website-online-study-line-zulfa-mahendra.png);
    width: 35px;
    height: 35px;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    background-size: cover;
    background-color: var(--color-link);
    border-radius: 20px;
    box-shadow: 1px 1px 2px var(--bg-color-primary);
    border: 2px solid var(--bg-color-primary);
    &:hover { transform: scale(1.2); }
  }
`

export const WebsiteYear = styled.p`

`