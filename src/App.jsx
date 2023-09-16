import './App.css'
// import Featured from './components/featured'
import Footer from './components/footer'
// import Header from './components/header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Movie from './components/movie';
import Home from './components/home';

function App() {

  return (
    <Router>
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>


      
      <Footer />
    </Router>
  )
}

export default App
