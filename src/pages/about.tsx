import React from 'react'
import NavBar from '../components/NavBar'
import { DivAboutBody, MainAboutDiv, DivImages } from '../styles/Pages/aboutStyles/aboutStyles';
import familiaIgor from '../assets/familiaIgor.webp'
import amigosIgor from '../assets/igoramigos.webp'
import Image from 'next/image';

const { src: familia }: any = familiaIgor;
const { blur: familiaBlur }: any = familiaIgor;
const { width: familiaWidth }: any = familiaIgor;
const { height: familiaHeight }: any = familiaIgor;



const { src: amigos }: any = amigosIgor;
const { blur: amigosBlur }: any = amigosIgor;
const { width: amigosWidth }: any = amigosIgor;
const { height: amigosHeight }: any = amigosIgor;

const About = () => {
  return (
    <DivAboutBody>
      <NavBar />
      <MainAboutDiv>
        <h1>Sobre mim </h1>
        <p>
          Me encantei pelos games desde cedo, a tecnologia sempre foi o conceito de semi-mágica que me fascinou desde o primeiro contato.
          <br />
          <br />
          No final de ano de 2012 um  tio veio nos visitar para passar as férias, logo percebi que um dia após chegar ele permanecia trabalhando meio período estando em minha casa devido as festas de fim de ano naquele momento eu pensei
          “que emprego massa! ele está aqui na praia trabalhando online com seus colegas de equipe”.
          <br />
          <br />
          Em 2013  ganhei minha primeira guitarra onde fiz uso de sites para aprender a tocar. Mais uma vez a tecnologia que alguém criou estava tornando meu aprendizado mais prático e sem precisar pagar por aulas
          <br />
          <br />
          Vindo de família simples, aprendi desde cedo a importância do trabalho.
          Após 3 anos trabalhando como garçom, larguei os estudos e abri meu próprio negócio,
          um bar esotérico na avenida principal de restaurantes de Praia Grande {"(SP)"}.
          Porém me faltava visão de mercado, por falta de público esse bar não se pagou e tive que fechar em 6 meses .
          <br />
          <br />
          Meus pais se mudaram para Minas Gerais em 2018, um novo lugar e sem amigos, percebi que o tempo avançava e eu ainda não tinha terminado o ensino médio, então decidi focar nos meus estudos e me formar no EJA (Educação de Jovens e Adultos).
          <br />
          <br />
          Com a chegada da pandemia em 2020, o escritório em que eu trabalhava foi fechado por corte de gastos. Sem ter onde trabalhar vi a obra civil como uma saída. porém me faltava condicionamento físico para exercer a função. Após um tempo percebi que nunca iria ser bem sucedido igual as pessoas pra qual eu trabalhava, e que algo a mais além do ensino médio precisava ser feito.
          <br />
          <br />
          Sentindo a falta do ciclo social e cultural no qual eu cresci, retornei à Praia Grande {"(SP)"}. em 2021. Onde trabalhei novamente como garçom e após trabalhar por 16 horas diárias durante os meses de Dezembro e Janeiro, cheguei a  conclusão de que estava na hora de mudar de carreira. Nesse ponto, tive como inspiração amigos que conseguiram entrar na área da tecnologia e estavam muito bem estruturados e satisfeitos com seus respectivos empregos.
          <br />
          <br />
          No dia do meu aniversário 05/04/2021 iniciei o curso da trybe, onde aprendi diversas tecnologias e como estruturar um bom site de maneira escalável.
          Confesso que foi difícil e em certos momentos pensei que não iria conseguir. Superei minhas inseguranças e fui capaz de me formar um ano depois em 22/06/2022.
          <br />
          <br />
          Para o futuro, pretendo fazer a faculdade de analise e desenvolvimento de sistemas
          juntamente ao curso de inglês. Nessa jornada aprendi comigo mesmo que a minha realidade é a minha dedicação tenho alcançado hoje oque antes era apenas um sonho.
          <br />
          <br />

        </p>
        <h2>"O lance não é quanto tempo você tem, é como voce usa" - Ekko</h2>
        <DivImages>
          <Image src={familia} alt="familia de igor" width={familiaWidth} height={familiaHeight} placeholder={familiaBlur} />
          <Image src={amigos} alt="amigos de igor" width={amigosWidth} height={amigosHeight} placeholder={amigosBlur} />
        </DivImages>
      </MainAboutDiv>
    </DivAboutBody>
  )
}

export default About;
