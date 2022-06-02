import Image from 'next/image';
import React from 'react';
import NavBar from '../components/NavBar';

import { WellComeDiv, WellComeTextDiv } from '../styles/Pages/homeStyles/wellCome';
import { AnimateTolls } from '../components/home/AnimateToll';
import { PersonalityDisclaimer } from '../styles/Pages/homeStyles/personalityDisclaimer';
import { RecomendationDiv } from '../styles/Pages/homeStyles/Recomendations';
import CardRecomendation from '../components/home/CardRecomendation';
const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <WellComeDiv>
        <AnimateTolls />
        <WellComeTextDiv>
          <h1>IGOR SILVA FERNANDES</h1>
          <h3>Desenvolvedor full-stack Javascript</h3>
          <h4>Seja bem vindo ao meu portifólio</h4>
        </WellComeTextDiv>
      </WellComeDiv>
      <PersonalityDisclaimer>
        <p>Sou apaixonado por pessoas e tecnologia</p>
        <p>adoro trabalhar em emquipe e o meu ponto forte é a comunicação</p>
        <p>recentetemente me formei na Trybe onde aprendi o desenvolvimento web full-stack Javascript</p>
        <p>tendo o React como principal framework de Front-end</p>
        <p>e node.Js mais express e sequelizer como ferramentas de construção de API's</p>
      </PersonalityDisclaimer>
      <RecomendationDiv>
        <CardRecomendation />
      </RecomendationDiv>
    </>
  )
}

export default Home
