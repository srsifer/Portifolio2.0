import styled from "styled-components";
import { infiniteSpinning, vanishIn } from "../../animations/keyframes";
import gif from '../../../assets/giftec.gif'


export const DivBody = styled.div`

`;

const { src }: any = gif;

export const DivheaderProjects = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #e8f0f7;
  background-clip: border-box;
  background-image: url(${src});
  -webkit-text-fill-color: #00aeff8f;
  -webkit-background-clip:text;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  animation: ${vanishIn} 1s;
  h1 {
    font-size: 150px;
    font-weight: bolder;
    color: aliceblue;

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
