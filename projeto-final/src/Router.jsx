import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './pagesSite/Home'
import Sobre from './pagesSite/Sobre'
import Footer from './components/Footer'


const Router = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre" element={<Sobre/>} />
      </Routes>
      <Footer content="Feito pela Fran com muito amor ♡" />
    </BrowserRouter>
  )
}

export default Router
