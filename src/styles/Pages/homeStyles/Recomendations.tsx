import styled, { keyframes } from "styled-components";

const riseUp = keyframes`
  from {
    transform: translateY(30vh);
    display: hidden;
  }

  to {
    transform: translateY(0vh);
    opacity: 1;
  }
  `;

const fall = keyframes`
  from {
    transform: translateY(0vh);
    opacity: 1;
  }

  to {
    transform: translateY(30vh);
    display: hidden
  }
  `;

const vanishIn = keyframes`
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
const vanishOut = keyframes`
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
    filter: blur(0px);
  }
  100% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(2, 3);
    filter: blur(20px);
  }
`

export const RecomendationDiv = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  margin-top: 40px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: 100vh;
  max-height: 700px;
`

interface ButtonProjectDivProps {
  state: boolean
}

export const ButtonProjecDiv = styled.div<ButtonProjectDivProps>`
background-color: #f7f7f7;
width: 15%;
margin-bottom: 2%;
display: flex;
justify-content: center;
align-items: center;
a {
    color: #f7f7f7;
    text-decoration: none;
    font-style: none;
    width: 100%;
    height: 100%;
    padding: 20%;
  }

button {
  width: 95%;
  height: 95%;
  border-style: none;
  border-radius: 15px;
  background-color:${({ theme }) => theme.colors.PacificBlue};
  font-size: larger;
  font-weight: 700;
  color: #f7f7f7;
  box-shadow: rgba(5, 70, 136, 0.664) 0px 8px 24px;
  opacity: ${({ state }) => state === true ? 1 : 0};
  animation: ${({ state }) => state ? vanishIn : vanishOut} 1s;
  :hover {
    transform: scale(1.1);
    box-shadow: rgba(6, 77, 158, 0.75) 0px 25px 50px -10px, rgba(0, 0, 0, 0.50) 0px 15px 30px -15px;
  }
}
`;

interface RecomendationCardsDivProps {
  state: boolean,
}

export const RecomendationCardsDiv = styled.div<RecomendationCardsDivProps>`
  opacity: ${({ state }) => state === true ? 1 : 0};
  animation: ${({ state }) => state ? riseUp : fall} 2s ;
  display:flex;
  width: 30%;
  height: 65%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 50px;
  text-align: center;
  border-radius: 15px;
  background-color: white;
  box-shadow:  0 0 1em  10px #d3d3d3;
  color: ${({ theme }) => theme.colors.background};

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

`;

