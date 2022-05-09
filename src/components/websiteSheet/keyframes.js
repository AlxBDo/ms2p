import { keyframes } from 'styled-components'


export const largeWSBtn = keyframes`
    0% {
        top: 42%;
        right: -4.5%;
        padding: 1px 7px 4px;
        background-color: var(--color-primary);
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAD80lEQVRoge2YzW8bRRjGn5lZJ5VrkfTQFhDi44AQ4kOqxJeQUL12SPMho1zomX8gW9lxcs6tpntYyZUq5Yw45QJxEseumghuHJAAIZqQAk1aIFE5IKQG2d6dl0McKQpF2XdmXQkpv6O9j9/38ew7M3qAE07oCcL2Bwpzs2m9l/kEhAtSY6xWLq8n0RgXKyNdE58DGOp+tKsVcnWv/IN9azyMjRTmZtP6YWYBAvkjX+0Cyl0qFm9b9sZCmogKc7Np2svUHmECAM5DRKvjQfCyZW8s2CtSmJtN678ziyC4xzx6X5F0F0qlO4a9sWAZGfb906mUqMUwccB9rXS27s38ZNAbC9arlXLkpwwTAPCMjNRq4br/ArMvNswZoRa/BD2rQ7E2EgTP87XxYRlJk/wIhFsGdZ5T0F/0cmWMhp32MjUCcgbltqWjs7XJ6V/42mN+2URkZwZbEVR2pVi8a1L7v7A7EONtw48icTNJXFGWAGQN5HcEyexiqfSrTQ8HWF8ah33/tONgSUBcNJBvCpJuEmaMriiHaU5PPwxDjAP40kD+Igm99sH1j5+27cPaCLBvphPSGAzNRKGyNmP9ah1mtFp9QkbtJoC3DRrZ6EC5jWLxd5PaiazIAXXP+6vVCi8B+IqrJeClFKK1S0HwlEntRFfkgKFKZaC/32kCeIstFlintnaXZ2Z2eLIeMVSpDPT1OzcF8CZbbGCmZ0YAYCIIBtuImiZmCPhORcjXyuU/4jyf6Iwc5bNi8c+I5AiAb7haAbyuFVZAFOvP7qkRAJCOE4KwZyg//+H8fKwee2pkqFIZULrdgMC7BvJdSXJk/vLlKM7DPR32U6ecFSK8wxYL7GiJPCdWcthFYtDdfhtE/IMRAjsglat7vDhJsQsdw0QQDApHGJ3u2E9eLi6WSj9yhYnOyEQQDHYQNWBwEBJwzyY+SmxGLM+Me6S0axMbJfJqjd+4ekZHuCkg+Kc4xDYpnbPNvqyHffzG1TNoOU1AvMFXi21AunVv6mfbPqxWZLRaPYsOVgXEBQP5lnTIXbwylUiiYjwjo9XqWRm1bwF4zUC+JR1yk4yFjFZk2PfPOUKbmrgbQbnLV6YSjYPY2++w759LOcLUxKZW0XtJZ1oAc9gPmXjVoNamIOnWvXIi8c9RWEZSjmjAwIQANqQT5RYmy79xtXHhbr/8NF5gvUMq15gsG4UKceHNSH9nFMDXcR8XwIZSUd40GeHA3n5jb7sC6yGp3OMwsV/OgGPNPGYTgOHtt+55D7TqywP4/t/f0m1qa+OgzRSr2293O14F8Er3o2+16nu/7nkP7FvjYX2NH7t27UnZJ5cBtESIQtz45oQT/if8A0xQencR1NjCAAAAAElFTkSuQmCC");
        background-size: 25px;
        height: 35px;
        width: 45px;
        background-repeat: no-repeat;
        background-position: 7px center;
        border: none;
        border-radius: 25px 0px 0 25px;
    }
    25% { 
        border-radius: 25px;
        transform: rotate(-90deg);
    }
    35%{ background-image: none; }
    50% {
        height: auto;
        width: auto;
        background-color: var(--bg-color-primary);
    }
    100% {
        right: 56px;
        top: 18px;
        padding: 0px 15px;
        text-align: center;
        background-color: var(--bg-color-primary);
        border-radius: 25px;
        font-size: large;
        font-weight: bold;
        border: 2px solid;
        box-shadow: 1px 1px 1px var(--bg-color-primary);
        color: var(--color-link);
    }
`

export const largeWSUrl = keyframes`
    from {
        top: 42%;
        left: 43%;
    }
    to { 
        top: 0%; 
        right: 115px 
    }
`

export const openWSCtn = keyframes`
    0% {
        width: 250px;
        height: 250px;
        margin: 5% 3%;
        text-align: left;
        justify-content: start;
        align-items: left;
    }
    75% {
        width: 100%;
    }
    100%{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: space-between;
        align-items: left;
        height: 260px;
        margin: 5% 0;
        padding: 1%;
        border-radius: 10px;
        border: 1px solid var(--bg-color-ternary);
    }
`

export const openWSItemHide = keyframes`
    0% {
        width: 0%;
        height: 0%;
        overflow: hidden;
        margin: 0; 
        padding: 0; 
        opacity: 0;
    }
    50% {
        width: auto; 
        height: auto;
        opacity: 0;
    }
    100% {
        opacity:1;
    }
`