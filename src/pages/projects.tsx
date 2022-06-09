import React from 'react';
import axios from "axios";
import NavBar from '../components/NavBar'
import { ProjectList } from '../components/Projects/ProjectList';
import { DivAnimatedTools, DivBody, DivheaderProjects } from '../styles/Pages/projectsStyles/ProjectPageStyle';
import { ListProductsContainer } from '../styles/Pages/projectsStyles/projetList';
import Image from 'next/image';
import catraca from '../assets/catraca.png'
import ferramenta from '../assets/ferramentas.png'
import lampada from '../assets/lampada.png'
import teclado from '../assets/teclado.png'

const Projects = ({ data }) => {
  return (
    <DivBody>
      <NavBar />
      <div>
        <DivheaderProjects>
          <h1> Meus Projetos</h1>
          <DivAnimatedTools>
            <ul>
              <li />
              <li>
                <Image src={catraca} width={50} height={50} placeholder='blur' />
              </li>
              <li />
              <li>
                <Image src={ferramenta} width={50} height={50} placeholder='blur' />
              </li>
              <li />
              <li>
                <Image src={lampada} width={50} height={50} placeholder='blur' />
              </li>
              <li />
              <li>
                <Image src={teclado} width={50} height={50} placeholder='blur' />
              </li>
            </ul>
          </DivAnimatedTools>
        </DivheaderProjects>
        <ListProductsContainer>
          <ProjectList data={data} />
        </ListProductsContainer>
      </div>
    </DivBody>
  )
}

Projects.getInitialProps = async () => {
  const URL = `https://api.github.com/users/srsifer/repos`
  const response = await axios.get(URL);
  return { data: response.data }
}

export default Projects;
