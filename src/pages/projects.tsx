import React from 'react';
import axios from "axios";
import NavBar from '../components/NavBar'
import { ProjectList } from '../components/Projects/ProjectList';


const Projects = ({ data }) => {
  return (
    <div>
      <NavBar />
      <div>
        <h2>projetos feitos</h2>
        <iframe src='https://github-readme-stats.vercel.app/api?username=srsifer&include_all_commits=true&count_private=true&show_icons=true&line_height=20&title_color=7A7ADB&icon_color=2234AE&text_color=D3D3D3&bg_color=0,000000,130F40' />
        <div>
          <h2> lista de projetos</h2>
          <ProjectList data={data} />
        </div>
      </div>
    </div>
  )
}

Projects.getInitialProps = async () => {
  const URL = `https://api.github.com/users/srsifer/repos`
  const response = await axios.get(URL);
  return { data: response.data }
}

export default Projects;
