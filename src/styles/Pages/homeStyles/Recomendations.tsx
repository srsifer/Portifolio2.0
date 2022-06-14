import styled from "styled-components";
import { fall, riseUp, vanishIn, vanishOut } from "../../animations/keyframes";

export const RecomendationDiv = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  padding-top: 40px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: 100vh;
  min-height: max-content;

`;

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
min-width: max-content;
min-height: max-content;

a {
    color: #f7f7f7;
    text-decoration: none;
    font-style: none;
    width: 100%;
    height: 100%;
    padding: 20%;
    min-width: max-content;
    min-height: max-content;
  }

button {
  width: 100%;
  height: 100%;
  min-height: max-content;
  min-height: max-content;
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
  min-height: 65%;
  min-width: 30%;
  width: min-content;
  height: min-content;
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
    border-radius: 50%;
  }

`;

