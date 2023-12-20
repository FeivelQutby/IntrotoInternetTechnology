import { useEffect, useState } from 'react';
import axios from 'axios';
import "./App.css"

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const url =
          'https://api.themoviedb.org/3/movie/top_rated?api_key=6b1cddfbafb60d13bcdc52df1b1414f3&language=en-US&page=1';
        const response = await axios.get(url);
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <div>
        <h1 className='Font-Black'>Top Rated Movies</h1>
      </div>
      <divdiv className="Container">
        {movies.map((movie) => (
          <div key={movie.id}>
            <div className="Card">              
              <h2 className='Text-Center'>{movie.title}</h2>
              {movie.backdrop_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt={movie.title}
                />
              )}
              <p>{movie.overview}</p>          
            </div>
          </div>
        ))}
      </divdiv>
    </div>
  );
}

export default App;
