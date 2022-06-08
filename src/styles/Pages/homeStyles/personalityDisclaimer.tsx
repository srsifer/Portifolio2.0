import styled from "styled-components";
import { slideXToRight } from "../../animations/keyframes";

export const PersonalityDisclaimer = styled.div`
display: flex;
width: max-content;
margin-left: 20%;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 25px;
font-weight: bold;
animation: ${slideXToRight} 2s ;
`;
