import { keyframes } from "styled-components";


export const buttonCome = keyframes`
  from { transform: scale(0); } 
  to { transform: scale(1); }
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
    transform: scale(0.9);
    background-color: var(--bg-color-primary);
  }
  to {
    transform: scale(1);
    background-color: ${color};
  }
`

export const titleCome = keyframes`
  from { 
    line-height: 0 ; 
  }
  to { 
    line-height: 1; 
  }
`