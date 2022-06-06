import React from 'react'
import axios from "axios";
import { ProjectCardsProps } from '../../utils/types'
import { ProjectCards } from './ProjectCards'

export const ProjectList = ({ data }) => {
  console.log(data)
  const deliveryAppFrontEnd = data.filter((name) => name.name === 'deliveryAppFrontEnd')[0]
  const WEBNlw = data.filter((name) => name.name === 'WEB-nlw')[0]
  const BlogsAPI = data.filter((name) => name.name === 'Blogs_API')[0]
  const deliveryAppBackEnd = data.filter((name) => name.name === 'deliveryAppBackEnd')[0]
  const numberProjects = data.length
  return (
    <div>
      <h1>Lista de projetos</h1>
      <div>
        <p>descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição <br />
          descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição <br />
          descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição <br />
          descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição <br />
        </p>
        <ProjectCards data={deliveryAppFrontEnd} />
      </div>
      <div>
        <p>descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição <br />
          descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição <br />
          descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição <br />
          descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição <br />
        </p>
        <ProjectCards data={deliveryAppBackEnd} />
      </div>
      <div>
        <p>descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição <br />
          descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição <br />
          descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição <br />
          descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição <br />
        </p>
        <ProjectCards data={WEBNlw} />
      </div>
      <div>
        <p>descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição <br />
          descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição <br />
          descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição <br />
          descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição <br />
        </p>
        <ProjectCards data={BlogsAPI} />
      </div>
    </div>
  )
}

