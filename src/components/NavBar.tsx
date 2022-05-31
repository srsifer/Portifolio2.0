import React from 'react'
import NavBarStyles from '../styles/navbar'

const NavBar = () => {
  return (
    <NavBarStyles>
      <ul>
        <li><button>Home</button></li>
        <li><button>Projetos</button></li>
        <li><button>Sobre</button></li>
        <li><button>Contatos</button></li>
        <li><button>Github</button></li>
      </ul>
    </NavBarStyles>
  )
}

export default NavBar
