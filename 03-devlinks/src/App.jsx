import './App.css'
import Link from './components/Link/Link'
import Perfil from './components/Perfil/Perfil'
import SocialLink from './components/SocialLink/SocialLink'
import Rodape from './components/Rodape/Rodape/Rodape'
import Switch from './components/Switch/Switch'
import { useState } from 'react'
import foto from "./assets"

function App() {
  const [isLight,setIsLight] = useState(true);
  const troca = () => {
    setIsLight(!isLight)
  };

<div className="2"></div>
  return (
    <div id="App" className={isLight ? "light" : ""}>
      
      
      <Perfil fotoPerfil={foto}>PedrUrchella</Perfil>

    <Switch troca={troca} isLight={isLight}/>

      <div id="Link">
      <ul>
        <Link url={""}>Inscreva-se</Link>
        <Link url={"https://open.spotify.com/intl-pt/album/48D1hRORqJq52qsnUYZX56"}>Álbum da Vida!</Link>
        <Link url={"https://www.patreon.com/cw/PedrUrchella"}>Me paga uma Torta de Morango!</Link>
        <Link url={"https://www.sp.senai.br/curso/tecnico-em-desenvolvimento-de-sistemas/102655"}>Conheça o Dev!</Link>
      </ul>
      </div>
      
      <div id='SocialLinks'>
        <SocialLink url={"https://github.com/PedrUrchella13"} icon={"logo-github"} />
        <SocialLink url={"https://instagram.com/pedrourchella"} icon={"logo-instagram"} />
        <SocialLink url={"https://www.youtube.com/watch?v=p0mRIhK9seg&pp=ygUPaHVtYW4gYmVoYXZpb3Vy"} icon={"logo-youtube"} />
        <SocialLink url={"https://www.linkedin.com/in/pedro-urchella-35777935b/"} icon={"logo-linkedin"} />
        <SocialLink url={"https://x.com/pedrourchella"} icon={"logo-twitter"} />
      </div>

      <div className='rodape'>
        <Rodape>AlunoUrchella</Rodape>
      </div>
    </div>
  )
}
0
export default App
