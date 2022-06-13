import React from 'react'
import NavBar from '../components/NavBar'
import emailIcon from '../assets/email.png'
import instagramIcon from '../assets/instagram.png'
import linkedInIcon from '../assets/linkedin.png'
import whatsAppIcon from '../assets/whatsapp.png'
import { DiGithubBadge } from "react-icons/di";
import Image from 'next/image'
import { ContactDivCards, ContactList, ContactsDivBody, DivIconsText } from '../styles/Pages/contactsStyles/contactStyles'
import Link from 'next/link'

const { src: email }: any = emailIcon;
const { src: instagram }: any = instagramIcon;
const { src: linkedIn }: any = linkedInIcon;
const { src: whatsApp }: any = whatsAppIcon;

const Contacts = () => {
  return (
    <ContactsDivBody>
      <NavBar />
      <ContactList>
        <ContactDivCards>
          <div>
            <h2>Email</h2>
          </div>
          <DivIconsText>
            <Image src={email} alt="IMAGEM DE EMAIL" width="100" height="100" />
            <p>igorsife80@gmail.com</p>
          </DivIconsText>
        </ContactDivCards>
        <Link href="https://linkedin.com/in/sifer-igor-fernandes/">
          <ContactDivCards>
            <div>
              <h2>linkedIn</h2>
            </div>
            <a target="blank">
              <DivIconsText>
                <Image src={linkedIn} alt="icone do linked-IN" width="100" height="100" />
                <p>linkedin.com/in/sifer-igor-fernandes/</p>
              </DivIconsText>
            </a>
          </ContactDivCards>
        </Link>
        <Link href="https://github.com/srsifer">
          <ContactDivCards>
            <div>
              <h2>gitHub</h2>
            </div>
            <a target="blank">
              <DivIconsText>
                <DiGithubBadge />
                <p>github.com/srsifer</p>
              </DivIconsText>
            </a>
          </ContactDivCards>
        </Link>
        <Link href="https://www.instagram.com/sr.sifer/">
          <ContactDivCards>
            <div>
              <h2>Instagra</h2>
            </div>
            <a target="blank">
              <DivIconsText>
                <Image src={instagram} alt="icone do instagram" width="100" height="100" />
                <p>www.instagram.com/sr.sifer/</p>
              </DivIconsText>
            </a>
          </ContactDivCards>
        </Link>
        <Link href="https://api.whatsapp.com/send?phone=5531995624892 " target='blank'>
          <ContactDivCards>
            <div>
              <h2>whatsApp</h2>
            </div>
            <a target='blank'>
              <DivIconsText>
                <Image src={whatsApp} alt="icone do whats app" width="100" height="100" />
                <p>Converse comigo</p>
              </DivIconsText>
            </a>
          </ContactDivCards>
        </Link>
      </ContactList>
    </ContactsDivBody >
  )
}

export default Contacts;
