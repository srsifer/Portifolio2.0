import React from 'react';
import NavBarStyles from '../styles/navbar';
import Link from 'next/link';


const NavBar = () => {
  return (
    <NavBarStyles>
      <ul>
        <li><Link href="/"><a><button>Home</button></a></Link> </li>
        <li><Link href="/projects"><a><button>Projetos</button></a></Link></li>
        <li><Link href="/about"><a><button>Sobre</button></a></Link></li>
        <li><Link href="/contacts"><a><button>Contatos</button></a></Link></li>
      </ul>
    </NavBarStyles>
  )
}

export default NavBar
