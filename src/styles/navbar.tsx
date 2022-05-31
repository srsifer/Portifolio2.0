import styled from "styled-components";

const NavBarStyles = styled.div`
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
        background-color: ${({ theme }) => theme.colors.PacificBlue};

    }
  }
`;

export default NavBarStyles;
