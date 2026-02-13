import './App.css'
import Link from './components/Link/Link'
import Perfil from './components/Perfil/Perfil'
import SocialLink from './components/SocialLink/SocialLink'
import Rodape from './components/Rodape/Rodape/Rodape'
import Switch from './components/Switch/Switch'
import { useState } from 'react'

function App() {
  const [isLight,setIsLight] = useState(true);
  const troca = () => {
    setIsLight(!isLight)
  };

<div className="2"></div>
  return (
    <div id="App" className={isLight ? "light" : ""}>
      
      
      <Perfil fotoPerfil={"https://placehold.co/100x100"}>PedrUrchella</Perfil>

    <Switch troca={troca} isLight={isLight}/>

      <div id="Link">
      <ul>
        <Link url={""}>Inscreva-se</Link>
        <Link url={""}>Minha Playlist</Link>
        <Link url={""}>Me paga uma Torta de Morango!</Link>
        <Link url={""}>Conheça o Dev!</Link>
      </ul>
      </div>
      
      <div id='SocialLinks'>
        <SocialLink url={"https://github.com"} icon={"logo-github"} />
        <SocialLink url={"https://instagram.com"} icon={"logo-instagram"} />
        <SocialLink url={"https://youtube.com"} icon={"logo-youtube"} />
        <SocialLink url={"https://br.linkedin.com/"} icon={"logo-linkedin"} />
        <SocialLink url={"https://vk.com"} icon={"logo-vk"} />
      </div>

      <div className='rodape'>
        <Rodape>AlunoUrchella</Rodape>
      </div>
    </div>
  )
}
0
export default App
