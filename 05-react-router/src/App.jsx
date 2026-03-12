import { Route, Routes } from "react-router"
import './App.css'
import Sobre from "./pages/Sobre"

function App() {

  return (
    <>
    <h1>Home</h1>
      <Routes>   {/* Identifica todas as rotas do sistema */}
        <Route path="/" element={<Home/>} />
        <Route path="/sobre" element={<Sobre />} />  {/* Uma rota apenas do sistema */}
      </Routes>
    </>
  )
}

export default App
