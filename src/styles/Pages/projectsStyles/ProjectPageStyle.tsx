import styled from "styled-components";
import { infiniteSpinning, vanishIn } from "../../animations/keyframes";

export const DivBody = styled.div`

`;


export const DivheaderProjects = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  h1 {
    font-size: 80px;
    font-weight: bolder;
    color: ${({ theme }) => theme.colors.PacificBlue};
    animation: ${vanishIn} 1s;
}
`

export const DivAnimatedTools = styled.div`
  width: 200px;
  height:200px;
  text-align: center;
  animation: ${infiniteSpinning} 20s linear infinite;
  ul{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas: none;
    justify-content: center;
    height: 80%;
    width: 80%;
    align-items: center;
    list-style: none;
    margin: 15px;
    padding: 15px;
    animation: ${vanishIn} 1s;
  }

  img {
    animation: ${infiniteSpinning} 20s linear infinite reverse ;
    width: 65px;
    height: 65px;
    padding: 15px;
    margin: 15px;
  }

  div {
    transform: scale(2.1);
    img {
      border-radius: 150%;
    }
  }
`;

export const DivContentProject = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 50px;
padding: 10px;
border-radius: 20px;
background-color: #242424;


`;
