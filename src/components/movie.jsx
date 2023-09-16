import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [utcDate, setUtcDate] = useState(null);
  const [runTime, setRunTime] = useState(null);
  useEffect(()=>{

    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${id}?api_key=a260692c0d621b7427901892eb3562d0`,
        params: {language: 'en-US', page: '1'},
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDQ4NzQxMjJkZWE0YmMzMWIyYTMzNmM1ZTM2YmEyMCIsInN1YiI6IjY1MDVhNzBjM2NkMTJjMDE0ZWJlOTY4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.at6P337U9-ImqGjUa8KLwW_2lIzN2YnZrIxieGGaDMY'
        }
    };
      
    axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
        setMovieDetails(response.data)
        const [year, month, day] = response.data.release_date.split('-').map(Number);

    // Create a new Date object in UTC using Date.UTC()
    const utcDate = new Date(Date.UTC(year, month - 1, day));

    // Set the UTC date in the state
    setUtcDate(utcDate.toISOString());
    const hours = Math.floor(response.data.runtime / 60);
    const minutes = response.data.runtime % 60;

    setRunTime(`${hours} hours ${minutes} minutes`);
    })
    .catch(function (error) {
        console.error(error);
    });
},[id])

    if (!movieDetails) {
      return <div>Loading...</div>;
    }
  return (
    <div className="container details">
      <div className="detail-img ">
        <img src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`} alt="" />
      </div>
      <h1>{movieDetails.original_title}</h1>
      <h3>Release Date(in UTC): {utcDate}</h3>
      <h3>Runtime(in minutes): {runTime}</h3>
      <div>
        <h2>Overview</h2>
        <p>{movieDetails.overview}</p>
      </div>
    </div>
  )
}

export default Movie