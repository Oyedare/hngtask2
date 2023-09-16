import axios from "axios";
import { useEffect, useState } from "react"
import Favorite from '../assets/Favorite.svg'
import { Link } from "react-router-dom";
const Featured = () => {
    const [data,setData] = useState()

    useEffect(()=>{

        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/top_rated',
            params: {language: 'en-US', page: '1'},
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDQ4NzQxMjJkZWE0YmMzMWIyYTMzNmM1ZTM2YmEyMCIsInN1YiI6IjY1MDVhNzBjM2NkMTJjMDE0ZWJlOTY4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.at6P337U9-ImqGjUa8KLwW_2lIzN2YnZrIxieGGaDMY'
            }
        };
          
        axios
        .request(options)
        .then(function (response) {
            setData(response.data.results.slice(0, 10))
        })
        .catch(function (error) {
            console.error(error);
        });
    },[])
  return (
    <div className="container featured">
        <div className="featured-title">
            <h4>Featured Movie</h4>
            <div className="more">
                <p>See more</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path d="M7.5 4.66668L13.3333 10.5L7.5 16.3333" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>

        {data && (
            <div  className="featured-poster-container">
                {data.map((item)=>(
                    <Link to={`/movie/${item.id}`} key={item.id}>
                        <div data-testid='movie-card' className="featured-poster" >
                            <div data-testid='movie-poster' className="poster">
                                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" />
                                <div className="fav">
                                    <img src={Favorite} alt="favorite" />
                                </div>
                            </div>
                            <div className="poster-text">
                                <h3 data-testid='movie-title'>{item.original_title}</h3>
                                <p data-testid='movie-release-date'>{item.release_date}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        )}
    </div>
  )
}

export default Featured