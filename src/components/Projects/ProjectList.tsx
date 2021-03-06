import React from 'react'
import { ProjectCards } from './ProjectCards'

import deliveryAppImage from '../../assets/deliveryapp.png';
import wineScreen from '../../assets/wineChalleng.png'
import feedget from '../../assets/feedget.png';
import { SiVercel } from "react-icons/si";
import Link from 'next/link';
import Image from 'next/image';
import { DivContentProject } from '../../styles/Pages/projectsStyles/ProjectPageStyle';
import { DescriptionProjectDiv, TollsIconsDiv } from '../../styles/Pages/projectsStyles/projetList';
import { useFetch } from '../../utils/useFetch';


export const ProjectList = ({ data }) => {
  const deliveryAppFrontEnd = data.filter((name) => name.name === 'deliveryAppFrontEnd')[0]
  const WEBNlw = data.filter((name) => name.name === 'WEB-nlw')[0]
  const BlogsAPI = data.filter((name) => name.name === 'Blogs_API')[0]
  const deliveryAppBackEnd = data.filter((name) => name.name === 'deliveryAppBackEnd')[0]
  const Wine = data.filter((id) => id.id === 508873212)[0]
  console.log(Wine)
  return (
    <div>
      <div>
        <DivContentProject>
          <DescriptionProjectDiv>
            <p>O In-tregas delivery é um aplicativos no qual simulamos
              uma distribuidora de bebidas alcoólicas, tendo diversas funcionalidades.
              No aplicativo existem três fluxos sendo eles fluxos pessoa usuária,
              fluxo da pessoa vendedora e fluxo da pessoa administradora
              após o cliente finalizar o seu pedido na tela de checkout
              caberá ao vendedor controlar o status de andamento da entrega
              {'vendedor: (preparando, em trânsito); cliente: (marcar como entregue).'}
            </p>
          </DescriptionProjectDiv>
          <TollsIconsDiv>
            <h2>Principais tecnologias</h2>
            <div>
              <Link href="https://kenzie.com.br/blog/react/"><a target="blank" ><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" /></a></Link>
              <Link href="https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript"><a target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /></a></Link>
              <Link href="https://blog.back4app.com/pt/o-que-e-o-heroku/"><a target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg" /></a></Link>
              <Link href="https://pt.wikipedia.org/wiki/Cascading_Style_Sheets"><a target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" /></a></Link>
              <Link href="https://www.treinaweb.com.br/blog/o-que-e-redux"><a target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" /></a></Link>
            </div>
          </TollsIconsDiv>
          <ProjectCards data={deliveryAppFrontEnd} images={deliveryAppImage} deploy={'https://in-tregasdelivery.herokuapp.com/login'} />
        </DivContentProject>
      </div>
      <div>
        <DivContentProject>
          <ProjectCards data={deliveryAppBackEnd} images={{
            blurDataURL: "",
            height: 0,
            src: "",
            width: 0,
          }} deploy={'/'} />
          <TollsIconsDiv>
            <h2>Principais tecnologias</h2>
            <div>
              <Link href="https://blog.back4app.com/pt/o-que-e-o-heroku/"><a target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg" /></a></Link>
              <Link href="https://www.alura.com.br/artigos/node-js-definicao-caracteristicas-vantagens-usos?gclid=CjwKCAjwkYGVBhArEiwA4sZLuL501Yuf6YpiszpQqIWflCzcsoWhJqMKdAUZPSD2hDvNvWwW2SNKLhoCKFIQAvD_BwE"><a><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" /></a></Link>
              <Link href="https://www.treinaweb.com.br/blog/o-que-e-o-express-js"><a target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" /></a></Link>
              <Link href="https://blog.rocketseat.com.br/nodejs-express-sequelize/#:~:text=O%20Sequelize%20%C3%A9%20um%20ORM,e%20linhas)%20para%20objetos%20Javascript."><a target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg" /></a></Link>
              <Link href="https://www.hostinger.com.br/tutoriais/o-que-e-mysql"><a target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg" /></a></Link>
            </div>
          </TollsIconsDiv>
          <DescriptionProjectDiv>
            <p>
              Se trata de uma API construída para servir o In-tregas Delivery utilizamos o Node.Js
              com a biblioteca express para a construção da mesma avaliamos todas as entradas da requisição
              em JSON com a biblioteca Joi e tratamos os casos de erro com express-rescue por fim para
              abstrairmos o banco de tado e suas tabelas de produtos e pedidos fizemos o uso do ORM sequelize
            </p>
          </DescriptionProjectDiv>
        </DivContentProject>
      </div>
      <div>
        <DivContentProject>
          <DescriptionProjectDiv>
            <p>
              Carinhosamente Chamado de, Feedget,
              Essa aplicação foi desenvolvida em durante o evento NLW-returns 8 da Rocketseat.
              esse projeto foi o meu ponta pé inicial para me aventurar em typeScript e também
              utilizar biblioteca de estilização taillwindCSS.
              Se trata de um widget onde você pode enviar o seu feedback sobre dúvidas,
              sugestões e relatar bugs que serão notificados via email para o responsável do site.
              Vale ressaltar que este aplicativo também tem a sua versão mobile mas que não foi
              hospedada porém seu repositórios está em meu github.
            </p>
          </DescriptionProjectDiv>
          <TollsIconsDiv>
            <h2>Principais tecnologias</h2>
            <div>
              <Link href="https://gabrielcordeiro.dev/blog/como-fazer-deploy-na-vercel/"><a target="blank"><SiVercel /></a></Link>
              <Link href="https://pt.wikipedia.org/wiki/TypeScript"><a target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" /></a></Link>
              <Link href="https://danieldcs.com/introducao-e-como-usar-o-tailwind-css/#:~:text=O%20que%20%C3%A9%20o%20Tailwind,sem%20precisar%20fazer%20tudo%20manualmente."><a target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" /></a></Link>
              <Link href="https://kenzie.com.br/blog/react/"><a target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" /></a></Link>
            </div>
          </TollsIconsDiv>
          <ProjectCards data={WEBNlw} images={feedget} deploy={'https://web-nlw-igor-fernandes.vercel.app'} />
        </DivContentProject>
      </div>
      <div>
        <DivContentProject>
          <ProjectCards data={BlogsAPI} images={{
            blurDataURL: "",
            height: 0,
            src: "",
            width: 0,
          }} deploy={'/'} />
          <TollsIconsDiv>
            <h2>Principais tecnologias</h2>
            <div>
              <Link href="https://gabrielcordeiro.dev/blog/como-fazer-deploy-na-vercel/"><a target="blank"><SiVercel /></a></Link>
              <Link href="https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript"><a target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /></a></Link>
              <Link href="https://www.treinaweb.com.br/blog/o-que-e-o-express-js"><a target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" /></a></Link>
              <Link href="https://blog.rocketseat.com.br/nodejs-express-sequelize/#:~:text=O%20Sequelize%20%C3%A9%20um%20ORM,e%20linhas)%20para%20objetos%20Javascript."><a target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg" /></a></Link>
              <Link href="https://www.hostinger.com.br/tutoriais/o-que-e-mysql"><a target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg" /></a></Link>
            </div>
          </TollsIconsDiv>
          <DescriptionProjectDiv>
            <p>
              O blogs API foi o meu primeiro contato com ORM'S.
              Se trata de uma API rest com altenticação ultilizando
              JSON WEB TOKEN construido na arquitetura msc {'(model, service, controler)'}
              essa API te possibilita fazer um CRUD {"(create, read, update, delete)"}
              tanto de posts quanto de Usuarios
            </p>
          </DescriptionProjectDiv>

        </DivContentProject>
      </div>
      <div>
        <DivContentProject>
        <DescriptionProjectDiv>
            <p>
              100% inspirado na maior plataforma e-commerce de vinhos da america latina (Wine). <br />
              tentei replicar a UI,  você pode ver o resultado clicando em demonstração
              E tiveram as seguintes funcionalidades implementadas:<br />
              Catálogo de produtos com paginação <br />
              Filtragem de produtos por preço <br />
              Busca por nome do produto <br />
              Adicionar e remover produtos do carrinho
            </p>
          </DescriptionProjectDiv>
          <TollsIconsDiv>
            <h2>Principais tecnologias</h2>
            <div>
              <Link href="https://gabrielcordeiro.dev/blog/como-fazer-deploy-na-vercel/"><a target="blank"><SiVercel /></a></Link>
              <Link href="https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript"><a target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /></a></Link>
              <Link href="https://pt.wikipedia.org/wiki/TypeScript"><a target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" /></a></Link>
              <Link href="https://kenzie.com.br/blog/react/"><a target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" /></a></Link>
            </div>
          </TollsIconsDiv>
          <ProjectCards data={Wine} images={wineScreen} deploy={'https://wine-iota.vercel.app/'} />
        </DivContentProject>
      </div>
    </div>
  )
}

