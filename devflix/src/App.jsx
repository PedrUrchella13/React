import { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/devflix.png";
import lupa from "./assets/search.svg";
import Rodape from "./components/Rodape/Rodape";
import MovieCard from "./components/MovieCard/MovieCard";

const App = () => {
  const [movies, setMovies] = useState([]);
  //Chave da API do arquivo .env
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;
  //Criando conexão com a API e trazendo informações
  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Star Wars");
  }, []);
  return (
    <div id="App">
      <img
        id="Logo"
        src={logo}
        alt="Texto vermelho escrito 'DEVFLIX', em caixa alta e curvatura em baixo"
      />

      <div className="search">
        <input type="text" placeholder="Pesquise por filmes e séries..." />
        <img src={lupa} alt="Botão de ação para pesquisar em forma de lupa" />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard key={index} {...movie} />
          ))}
        </div>
      ) : ( <h2>Filme não encontrado ＞︿＜</h2>)}

      <Rodape link={"https://github.com/PedrUrchella13"}>AlunoUrchella</Rodape>
    </div>
  );
};

export default App;
