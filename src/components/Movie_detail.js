import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams hook
import './css/Movie_detail.css';

function Movie_detail() {
    const [movieData, setMovieData] = useState(null);
    const { id } = useParams(); 

    useEffect(() => {
        fetchData();
    }, [id]); 

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/movies/${id}`); 
            if (!response.ok) {
                throw new Error('Failed to fetch movie details');
            }
            const data = await response.json();
            setMovieData(data["data"]);
        } catch (error) {
            console.error('Error fetching movie details:', error);
        }
    };

    return (
        <>
            <div className="main_body">
                {movieData ? (
                    <>
                        <div className="item-1">
                            <img src={movieData.poster} alt="Movie Poster"></img>
                            <a href={`/Schedules/${movieData.id}`}>Book now</a>
                        </div>
                        <div className="item-2">
                            <p className="Movie_title">{movieData.name}</p>
                            <p>{movieData.description}</p>
                            <p>{movieData.genre}</p>
                            <p>Available in: 1080p.BluRay</p>
                            <p>{movieData.dimension}</p>
                            <p>{movieData.duration}H</p>
                            <p>{movieData.producer}</p>
                            <p>IDMB {movieData.raiting} / 10</p>
                            <p>{movieData.language}</p>
                        </div>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    );
}

export default Movie_detail;
