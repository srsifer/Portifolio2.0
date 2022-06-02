import styled, { keyframes } from "styled-components";

const rise = keyframes`
  from {
    transform: translateY(-100vh);
    opacity: 0;
  }

  to {
    transform: translateY(0vh);
    opacity: 1;
  }
`;

const infiniteSpinning = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const WellComeDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 4em;
  max-width: 100%;
  animation: ${rise} 1s ;
  height: -100vh;
  z-index: 2;
`;

export const WellComeTextDiv = styled.div`
  display: flex;
  margin: 5%;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  font-size: 30px;
  font-weight:bold;
  h1 {
    margin: 15px;
    color:  ${({ theme }) => theme.colors.PacificBlue};
  }
  h3 {
    margin: 15px;
    color: ${({ theme }) => theme.colors.gray};
  }
  h4{
    margin: 15px;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const DevIconsAnimate = styled.div`
  width: 500px;
  height:500px;
  text-align: center;
  animation: ${infiniteSpinning} 20s linear infinite;
  ul{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas: offset;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  img {
    animation: ${infiniteSpinning} 20s linear infinite reverse ;
    width: 65px;
    height: 65px;
  }

  div {
    transform: scale(2.1);
    img {
      border-radius: 150%;
    }
  }
`;


export const LiPositionGridTop = styled.li`
 margin-bottom: auto;
`;
export const LiPositionGridLeft = styled.li`
  margin-right: auto;
`;
export const LiPositionGridRight = styled.li`
  margin-left: auto;
`;
export const LiPositionGridBottom = styled.li`
  margin-top: auto;
`;
