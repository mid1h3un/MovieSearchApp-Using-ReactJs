import React, { useState, useEffect } from "react";
import getMovieData from "./movieapi";

function Movie() {
    const [movie, setMovie] = useState(null);
    const [name, setName] = useState("");

    const getData = async () => {
        if (name.trim() !== "") {
            const searchname = name;
            setName("");
            try {
                const data = await getMovieData(searchname);
                setMovie(data);
                console.log(data)
            } catch (error) {
                console.log(error.message);
            }
        }
    };

    useEffect(() => {
        getData()
    }, [movie]);

    return (
        <div className="app-container">
            <div className="search-app">
                <h1>Movie Search App</h1>
                <div className="search-bar">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Search for a movie..."
                    />
                    <button onClick={getData}>Search</button>
                </div>
                {movie && (
                    <div className="movie-details">
                        <img src={movie.Poster} alt="poster" className="movie-poster" />
                        <div className="movie-info">
                            <h2>{movie.Title}</h2>
                            <div className="movie-meta">
                                <span className="rating">★ {movie.imdbRating}</span>
                                <div>
                                    <span>{movie.Rated}</span>
                                    <span>{movie.Year}</span>
                                    <span>{movie.Runtime}</span>
                                </div>
                            </div>
                            <div id="genres">
                                {movie.Genre && movie.Genre.split(",").map((genre, index) => (
                                    <span key={index}>{genre.trim()}</span>
                                ))}
                            </div>
                            <h3>Plot:</h3>
                            <p className="plot">{movie.Plot}</p>
                            <h3>Cast:</h3>
                            <p className="cast">{movie.Actors}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Movie;
