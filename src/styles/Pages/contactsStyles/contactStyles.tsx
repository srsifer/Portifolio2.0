import styled from 'styled-components'
import gif from '../../../assets/giftec.gif'

const { src }: any = gif;

export const ContactsDivBody = styled.div`
  background-image: url(${src});
  background-repeat: no-repeat;
  background-size: 100%;
  min-width: auto;
  height: 100vh;

 h2 {
   color: ${({ theme }) => theme.colors.gray}
 }

 img {
   width: 100px;
   height: 100px;
   border-radius: 10px;

 }

 p {
      margin: 15px;
 }
 svg {
  width: 100px;
   height: 100px;
   border-radius: 10px;
 }
`;

export const ContactDivCards = styled.div`
  background-color: #1f7fb676;
  border-radius: 15px;
  display:flex ;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 35%;
  margin: 20px;
  padding: 15px;
    :hover {
    background-color: #1d5cb9e1;
    transform: scale(1.1);
    box-shadow: 0 10px 10px 0 #012235 ;
    border-radius: 10px;
    }
`;

export const ContactList = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const DivIconsText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  font-size: x-large;
  font-weight: bold;
`;
