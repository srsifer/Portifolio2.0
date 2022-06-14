import styled from 'styled-components';

export const ListProductsContainer = styled.div`
background-color: #121212;
  padding: 15px;
`

export const TollsIconsDiv = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;
  img {
    width: 50px;
    height: 50px;
    padding: 5px;
    margin: 5px;
    :hover {
    color: ${({ theme }) => theme.colors.PacificBlue};
    background-color: #575757;
    transform: scale(1.1);
    box-shadow: 0 10px 10px 0 black ;
    border-radius: 10px;
    }
  }
  svg {
    width: 50px;
    height: 50px;
    padding: 5px;
    margin: 5px;
    color: black;
    :hover {
    color: ${({ theme }) => theme.colors.PacificBlue};
    transform: scale(1.1);
    box-shadow: 0 10px 10px 0 black ;
    border-radius: 10px;
    }
  }

  h2 {
    font-size: x-large;
    font-weight: bolder;
    margin: 10px;
    padding: 10px;
    color: ${({ theme }) => theme.colors.PacificBlue}
  }
`

export const DescriptionProjectDiv = styled.div`
  width: 35%;
  padding: 10px;
  margin: 10px;
  font-size: 20px;
  font-weight: bold;

`
