import React, { useState, useEffect } from 'react';
import './css/Browse.css';

function Browse() {
    const [movies, setMovies] = useState([{}]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/movies');
            if (!response.ok) {
                throw new Error('Failed to fetch movies');
            }
            const data = await response.json();
            setMovies(data["data"]);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    return (
        <div className="main">
            <div className="body">
                {movies && movies.map(movie => (
                    <div key={movie.id} className="cards">
                        <img src={movie.poster} alt={movie.title}></img>
                        <a href={`/Movie_Detail/${movie.id}`} className="button">View</a>
                        <p className='movie_name'>{movie.name}</p>
                        <p className='genre'>{movie.genre}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Browse;
