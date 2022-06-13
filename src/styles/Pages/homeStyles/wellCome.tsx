import styled from "styled-components";
import { infiniteSpinning, rise } from "../../animations/keyframes";
import gif from '../../../assets/giftec.gif'
const { src }: any = gif;

export const BackgroudgifDiv = styled.div`
  background-color: #e8f0f7;
  background-clip: border-box;
  background-image: url(${src});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
padding: 10px;
width: 100%;
height: max-content;
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
    font-size: 80px;
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
    justify-content: space-between;
    height: 100%;
    align-items: center;
    list-style: none;
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
