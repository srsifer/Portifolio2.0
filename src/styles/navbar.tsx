import styled from "styled-components";

const NavBarStyles = styled.div`
background-color: ${({ theme }) => theme.colors.background} ;
border-radius: 0 0px 10px 10px;
display: flex;
flex-direction: row;
padding: 10px;
padding-top: 20px;

width: 100%;
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: space-between;
    width: 30%;
    margin-left: 3%;
  }

  button{
    border: none;
    padding:4px;
    font-size: 16px;
    font-weight: 700;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.gray};
    border-radius: 10px;
    :hover{
        background-color: rgba(35,181,211, 0.70);
        color: white;
        transform: scale(1.1);
        box-shadow: 0 10px 10px 0 black ;
    }
  }
`;

export default NavBarStyles;
