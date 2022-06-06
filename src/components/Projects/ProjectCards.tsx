import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getUrlCards } from '../../Services/ApiCalls'
import { ProjectCardsProps } from '../../utils/types'

export const ProjectCards = ({ data }: ProjectCardsProps) => {
  const [languages, setLanguages] = useState({})

  const { name, homepage, languages_url, created_at, clone_url, commits_url } = data
  useEffect(() => {
    const languageState = async () => {
      setLanguages(await getUrlCards(languages_url))
    }
    languageState()
  }, [data])

  console.log(languages)
  return (
    <div>
      <h2>{name}</h2>
      <h2>{homepage}</h2>
      <h3>linguagens</h3>
      {
        Object.keys(languages).map((element) => {
          return (<p>{element}</p>)
        })
      }

      <p>{created_at}</p>
      <p>{clone_url}</p>
      <p>{commits_url}</p>
      <p>aqui devera ter uma imagem do prjeto</p>
    </div>
  )
}


