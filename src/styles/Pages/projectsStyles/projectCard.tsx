import styled from "styled-components";

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

export const TollsIconsDiv = styled.div`
  width: 25%;
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
  width: 40%;
  padding: 10px;
  margin: 10px;
  font-size: 20px;
  font-weight: bold;
`

export const DivLinguages = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;

export const Buttons = styled.button`
  border: none;
    padding:4px;
    font-size: 16px;
    font-weight: 700;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.gray};
    border-radius: 10px;
    :hover{
      color: white;
      background-color: rgba(35,181,211, 0.70);
        transform: scale(1.1);
        box-shadow: 0 10px 10px 0 black ;
    }
`;
