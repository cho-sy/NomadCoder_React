// home routes 

import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home(){
  //App에 있는 코드들 가져올것
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await ( 
      await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      )
      ).json();
    setLoading(false);
    setMovies(json.data.movies);
  };
  
  useEffect(()=>{
    getMovies()
  }, []);


  return ( <div className={styles.container}>
    {loading? (
    <h1>Loading...</h1>
    ) : (
      <div className={styles.movies}>
        {movies.map((movie) => (
          <Movie 
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            year={movie.year}
            summary={movie.summary}
            genres={movie.genres}
          />
          
          ))}
          
      </div>
    )}
  </div>
  );
}

export default Home;