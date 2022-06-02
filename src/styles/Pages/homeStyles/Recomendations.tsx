import styled from "styled-components";

export const RecomendationDiv = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  height: 550px;
  max-height: 700px;
`
export const RecomendationCardsDiv = styled.div`
  display:flex;
  width: 30%;
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
