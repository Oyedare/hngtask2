import { useEffect, useState } from "react"
import Navbar from "./navbar"
import axios from "axios";
import Imdb from '../assets/imdb.svg'
import Orange from '../assets/orange.svg'
import Play from '../assets/Play.svg'
const Header = () => {
    const [data,setData] = useState()
    useEffect(()=>{

        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/trending/all/day',
            params: {language: 'en-US'},
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDQ4NzQxMjJkZWE0YmMzMWIyYTMzNmM1ZTM2YmEyMCIsInN1YiI6IjY1MDVhNzBjM2NkMTJjMDE0ZWJlOTY4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.at6P337U9-ImqGjUa8KLwW_2lIzN2YnZrIxieGGaDMY'
            }
        };
          
        axios
            .request(options)
            .then(function (response) {
              setData(response.data.results)
            })
            .catch(function (error) {
              console.error(error);
        });
    },[])
  return (
    <>
        {data && (
            <header style={{background:`url(${`https://image.tmdb.org/t/p/w500${data[2].backdrop_path}`})`,backgroundSize: 'cover'}} className="header">
                <div className="container header-container">
                    <Navbar />
                    <div className="description-box">
                        <h3>{data[2].original_title}</h3>
                        <div className="rating">
                            <div className="imdb">
                                <img src={Imdb} alt="imdb" />
                                <p>{`${data[2].vote_average}/10`}</p>
                            </div>
                            <div className="imdb">
                                <img src={Orange} alt="Orange" />
                                <p>{`${data[2].popularity}%`}</p>
                            </div>
                        </div>
                        <p className="overview">{data[2].overview}</p>
                        
                        <div className="header-btn">
                        <img src={Play} alt="play btn" />
                        <p>Watch trailer</p>
                        </div>
                    </div>
                </div>
            </header>
        )}
    </>
  )
}

export default Header