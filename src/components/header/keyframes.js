import { keyframes } from "styled-components";


export const animImgBorder = color => keyframes`
  0% { border-top-color : ${color}; }
  33% { 
    border-top-color : ${color};
    border-right-color : ${color}; 
  }
  66% { 
    border-top-color : ${color};
    border-right-color : ${color}; 
    border-bottom-color : ${color}; 
  }
  100% { 
    border-top-color : ${color};
    border-right-color : ${color}; 
    border-bottom-color : ${color}; 
    border-left-color : ${color}; 
  }
`

export const buttonBackToNormal = keyframes`
  to { position : unset;  }
`

export const buttonCome = keyframes`
  from { transform: scale(0); } 
  to { transform: scale(1); }
`

export const headerBackToNormal = keyframes`
  to { 
    height: 70px; 
    margin-top: 5%;
  }
`

export const imgBackToNormal = keyframes`
  to {
    height: 60px;
    width: 60px;
    background-size: 60px;
  }
`

export const imgCome = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`

export const linkBorn = color => keyframes`
  from { 
    transform: scale(0.55);
  }
  to { background-color: ${color}; }
`

export const titleCome = keyframes`
  from { 
    line-height: 0 ; 
  }
  to { 
    line-height: 1; 
  }
`