import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';

import { BackgroudgifDiv, WellComeDiv, WellComeTextDiv } from '../styles/Pages/homeStyles/wellCome';
import { AnimateTolls } from '../components/home/AnimateToll';
import { PersonalityDisclaimer } from '../styles/Pages/homeStyles/personalityDisclaimer';
import { ButtonProjecDiv, RecomendationDiv } from '../styles/Pages/homeStyles/Recomendations';
import CardRecomendation from '../components/home/CardRecomendation';
import Link from 'next/link';


const Home: React.FC = () => {
  const [stateAnimationButton, setStateAnimationButton] = useState(null);
  useEffect(() => {
    window.addEventListener('scroll', animateScroll)
  }, [])

  const animateScroll = () => {
    if (scrollY > 510) {
      setStateAnimationButton(true)
    }
    if (scrollY < 510) {
      setStateAnimationButton(null)
    }

  }
  return (
    <>
      <NavBar />
      <BackgroudgifDiv>
        <WellComeDiv>
          <AnimateTolls />
          <WellComeTextDiv>
            <h1>IGOR SILVA FERNANDES</h1>
            <h3>Desenvolvedor full-stack Javascript</h3>
            <h4>Seja bem vindo ao meu portifólio</h4>
          </WellComeTextDiv>
        </WellComeDiv>
        <PersonalityDisclaimer>
          <p> Um jovem programador que acredita, genuinamente, que o sucesso de uma equipe está atrelado a uma comunicação empática.
            Fascinado por ideias que tornam mais prática a vida das pessoas, procuro por um ambiente descontraído e com forte senso
            de responsabilidade para exercer a função de desenvolvedor web.
            Recentemente me formei na Trybe onde aprendi o desenvolvimento web full-stack Javascript, Tendo o React como principal
            framework de Front-end e node.Js mais express e sequelize como ferramentas de construção de API's.
          </p>
        </PersonalityDisclaimer>
      </BackgroudgifDiv>
      <RecomendationDiv>
        <CardRecomendation />

        <ButtonProjecDiv state={stateAnimationButton}>
          <button><Link href='/projects'><a>Meus Projetos</a></Link></button>
        </ButtonProjecDiv>

      </RecomendationDiv>
    </>
  )
}

export default Home
