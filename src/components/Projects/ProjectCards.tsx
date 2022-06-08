import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getUrlCards } from '../../Services/ApiCalls'
import { Buttons, DivLinguages } from '../../styles/Pages/projectsStyles/projectCard'
import { CardDiv } from '../../styles/Pages/projectsStyles/projetList'
import { ProjectCardsProps } from '../../utils/types'
import { DiGithubBadge, DiReact } from "react-icons/di"
import Image from 'next/image'


export const ProjectCards = ({ data }: ProjectCardsProps, { images }: ProjectCardsProps) => {
  const [languages, setLanguages] = useState({})

  console.log(images);

  const { name, homepage, languages_url, clone_url } = data
  useEffect(() => {
    const languageState = async () => {
      setLanguages(await getUrlCards(languages_url))
    }
    languageState()
  }, [data])



  return (
    <CardDiv>
      <h2>{name}</h2>
      <DivLinguages>
        <Link
          href={homepage || clone_url}
        ><a><Buttons>Demostração <DiReact /></Buttons></a></Link>
        <Link
          href={clone_url}
        >
          <a>
            <Buttons>
              GITHUB
              <DiGithubBadge />
            </Buttons>
          </a>
        </Link>
      </DivLinguages>
      <DivLinguages>
        {
          Object.keys(languages).map((element) => {
            return (<p>{element}</p>)
          })
        }
      </DivLinguages>
      {
        images ? <Image src={images.src} width={images.width} height={images.height} placeholder='blur' /> :
          <img src={images} alt="falha na imagem" />

      }
    </CardDiv>
  )
}
