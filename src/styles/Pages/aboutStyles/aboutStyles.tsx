import styled from 'styled-components';

export const DivAboutBody = styled.div`
  min-height: 100vh;
`;

export const MainAboutDiv = styled.div`
  border: 1px solid white;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;

  margin-top: 5%;
  margin-bottom: 1%;

  h1 {
     font-size: 100px;
    font-weight: bolder;
  }

  br {
    margin: 10px;
  }

  p {
    font-size: x-large;
    font-weight: bolder;
  }


  h2 {
    font-weight: lighter;
    font-style: italic;
  }

`;

export const DivImages = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
    img {
    transform: scale(0.8);
    margin: 15px;
    border-radius: 20px;
  }

`
