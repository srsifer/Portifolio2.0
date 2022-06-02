import React, { useEffect, useState } from 'react';
import { RecomendationCardsDiv } from '../../styles/Pages/homeStyles/Recomendations'

function CardRecomendation() {
  const [stateAnimation, setStateAnimation] = useState(null);
  useEffect(() => {
    window.addEventListener('scroll', animateScroll)
  }, [])

  const animateScroll = () => {
    if (scrollY > 150) {
      setStateAnimation(true)
    }
    if (scrollY < 150) {
      setStateAnimation(null)
    }

  }

  return (
    <>
      <RecomendationCardsDiv state={stateAnimation}>
        <img src="https://media-exp1.licdn.com/dms/image/D4E35AQEdleoFGwyY_Q/profile-framedphoto-shrink_800_800/0/1632004191789?e=1654729200&v=beta&t=4_g9gpQWo_RZxxfEndK2oWZgEgtvZkHR0NsZ_cFFbzU" alt="foto colega de trabalho igor" />
        <h2>Johann Munzlinger</h2>
        <h3>Desenvolvedor Web Full Stack | Front-end | Back-end | JavaScript | React.js | Node.js</h3>
        <p>Igor foi um de meus parceiros no projeto que viria a nos outorgar o título de desenvolvedor full stack.</p>
        <p>Destaco sua comunicação, pró-atividade e resiliência. Sempre com alto astral e bom humor, Igor liderou </p>
        <p>tecnicamente o front-end com leveza, escuta ativa e forte comprometimento. Ávido para aprender </p>
        <p>e ensinar, sua contribuição fora indispensável para a conclusão desse software.</p>
        <p>Me sinto afortunado em ter atuado e assistido em sua radiante campanha pelo universo da Tecnologia da Informação!</p>
      </RecomendationCardsDiv >
      <RecomendationCardsDiv state={stateAnimation}>
        <img src="https://media-exp1.licdn.com/dms/image/C5603AQHo0tGQOEZ6nQ/profile-displayphoto-shrink_800_800/0/1645449141813?e=1659571200&v=beta&t=EYtCvk5yYTta9Oh6peQw5d98MtTYt0sdNXMAoHGhEHU" alt="foto colega de trabalho igor" />
        <h2>Henrique Alarcon</h2>
        <h3>Analista Jr fullstack</h3>
        <p>Trabalhamos juntos durante um projeto cujo objetivo era desenvolver uma aplicação de delivery no curso</p>
        <p>Full Stack da Trybe. O Igor se mostrou bastante habilidoso com as hard skills e também uma pessoa com</p>
        <p>bastante responsabilidade e proatividade. Se propôs a tomar a dianteira de um assunto que ele tinha</p>
        <p>domínio além dos outros integrantes. Isso por si só já faz dele uma ótima pessoa desenvolvedora para se</p>
        <p>ter em um grupo, alinhado a isso tem uma excelente comunicação. Por conta de tudo isso acredito que será</p>
        <p>um profissional brilhante da área de tecnologia.</p>
      </RecomendationCardsDiv >
      <RecomendationCardsDiv state={stateAnimation}>
        <img src="https://media-exp1.licdn.com/dms/image/C5603AQFzf6CcDp3izg/profile-displayphoto-shrink_800_800/0/1648652649687?e=1659571200&v=beta&t=URcx0P6BUnV56Js8CGQ37YTlFEPd1c2OD4pUHjUAa9A" alt="foto colega de trabalho igor" />
        <h2>Gabriel Viana</h2>
        <h3>Publicitário - PUC/SP | Desenvolvedor Web Full Stack - Trybe/Turma12 </h3>
        <p>Tive o prazer de desenvolver um projeto em grupo com o Igor na Trybe. </p>
        <p>Durante esse período destaco sua proatividade em buscar soluções para o desenvolvimento do projeto e</p>
        <p>sua comunicação sempre respeitosa, empática e descontraída que contribuíram muito para que o ambiente</p>
        <p>se mantivesse leve, harmonioso e divertido.</p>

      </RecomendationCardsDiv >
    </>
  )
}

export default CardRecomendation
