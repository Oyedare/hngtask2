import './App.css'
// import Featured from './components/featured'
import Footer from './components/footer'
// import Header from './components/header'
import {  HashRouter ,Route, Routes } from 'react-router-dom';
import Movie from './components/movie';
import Home from './components/home';

function App() {

  return (
    <HashRouter>
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>


      
      <Footer />
    </HashRouter>
  )
}

export default App
