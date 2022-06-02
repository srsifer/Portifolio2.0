import React from 'react'
import { DevIconsAnimate, LiPositionGridBottom, LiPositionGridLeft, LiPositionGridRight, LiPositionGridTop } from '../../styles/Pages/homeStyles/wellCome'
import igor from '../../assets/igorfoto.jpg';
import Image from 'next/image';

export const AnimateTolls = () => {
  return (
    <DevIconsAnimate>
      <ul>
        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" /></li>
        <LiPositionGridTop><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" /></LiPositionGridTop>
        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" /></li>
        <LiPositionGridLeft><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" /></LiPositionGridLeft>
        <div>
          <Image src={igor} width={300} height={300} placeholder='blur'></Image>
        </div>
        <LiPositionGridRight><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" /></LiPositionGridRight>
        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" /></li>
        <LiPositionGridBottom><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" /></LiPositionGridBottom>
        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" /></li>
      </ul>
    </DevIconsAnimate >
  )
}
