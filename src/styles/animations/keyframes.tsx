import styled, { keyframes } from "styled-components";

export const slideXToRight = keyframes`
  from {
    transform: translateX(-100vh);

  }

  to {
    transform: translateX(0vh);
  }
`
export const riseUp = keyframes`
  from {
    transform: translateY(30vh);
    display: hidden;
  }

  to {
    transform: translateY(0vh);
    opacity: 1;
  }
  `;

export const fall = keyframes`
  from {
    transform: translateY(0vh);
    opacity: 1;
  }

  to {
    transform: translateY(30vh);
    display: hidden
  }
  `;

export const vanishIn = keyframes`
  from {
    opacity: 0;
    transform-origin: 50 % 50 % 0 0;
    transform: scale(2, 2);
    filter: blur(90px);
  }
to {
  opacity: 1;
  transform-origin: 50 % 50 % 0 0;
  transform: scale(1, 1);
  filter: blur(0px);
  }
`
export const vanishOut = keyframes`
  0% {
    opacity: 1;
    transform-origin: 50% 50% 0 0;
    transform: scale(1, 1);
    filter: blur(0px);
  }
  100% {
    opacity: 0;
    transform-origin: 50% 50% 0 0;
    transform: scale(2, 3);
    filter: blur(20px);
  }
`

export const rise = keyframes`
  from {
    transform: translateY(-100vh);
    opacity: 0;
  }

  to {
    transform: translateY(0vh);
    opacity: 1;
  }
`;

export const infiniteSpinning = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
