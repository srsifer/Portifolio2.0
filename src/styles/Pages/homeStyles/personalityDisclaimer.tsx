import styled from "styled-components";
import { slideXToRight } from "../../animations/keyframes";

export const PersonalityDisclaimer = styled.div`
display: flex;
width: 60%;
margin-left: 20%;
padding: 15px;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 25px;
font-weight: bold;
animation: ${slideXToRight} 2s ;
`;
