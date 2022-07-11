import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getUrlCards } from '../../Services/ApiCalls';
import { Buttons, DivLinguages } from '../../styles/Pages/projectsStyles/projectCard';
import { CardDiv } from '../../styles/Pages/projectsStyles/projectCard';
import { ProjectCardsProps } from '../../utils/types';
import { DiGithubBadge, DiReact } from "react-icons/di";
import Image from 'next/image';


export const ProjectCards = (props: ProjectCardsProps) => {
  const [languages, setLanguages] = useState({})
  const { data, images, deploy } = props;

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
          href={deploy}
        ><a target='blank'><Buttons>Demostração <DiReact /></Buttons></a></Link>
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
            return (<p key={element}>{element}</p>)
          })
        }
      </DivLinguages>
      {
        images.src === "" ? null : <Image src={images.src} width="400" height="250" />
      }
    </CardDiv >
  )
}
