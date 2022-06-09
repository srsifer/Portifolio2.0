import styled from "styled-components";

export const CardDiv = styled.div`
background-color: #4a35aab5;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
width: max-content;
height: max-content;
margin: 10px;
padding: 10px;
border-radius: 15px;

img{
  border-radius: 15px;
}
`;

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
