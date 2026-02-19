import "./App.css";
import logo from "./assets/devflix.png";
import lupa from "./assets/search.svg";
import Rodape from "./components/Rodape/Rodape";

const App = () => {
  return (
    <div>
      <img
        className="logo"
        src={logo}
        alt="Texto vermelho escrito 'DEVFLIX', em caixa alta e curvatura em baixo"
      />

      <div className="search">
        <input type="text" placeholder="Pesquise por filmes e séries..." />
        <img src={lupa} alt="Botão de ação para pesquisar em forma de lupa" />
      </div>

      <Rodape link={"https://github.com/PedrUrchella13"}>AlunoUrchella</Rodape>
    </div>
  );
};

export default App;
