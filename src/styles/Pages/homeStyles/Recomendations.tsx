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

export const RecomendationDiv = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  height: 100vh;
  max-height: 700px;
`
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
