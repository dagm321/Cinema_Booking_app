import React, { useState } from "react";
import '../css/Admin/Add_movie.css';
import Admin_Header from "./Admin_Header";

function Add_movie() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        duration: '',
        raiting: '',
        genre: '',
        dimension: '',
        producer: '',
        writer: '',
        language: '',
        poster: '',
        trailer_link: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/movies', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({payload: formData})
            });

            if (!response.ok) {
                throw new Error('Failed to add movie');
            }

            console.log('Movie added successfully');

        } catch (error) {
            console.error('Error adding movie:', error);
        }
    };

    return (
        <>
            <Admin_Header message="Add Movie"/>
            <div className="bd">
                <div className="inps">
                    <form onSubmit={handleSubmit}>
                        <input type="text" autoComplete="off" name="name" placeholder="Title" value={formData.title} onChange={handleChange} />
                        <input type="text" autoComplete="off" name="description" placeholder="Release Date" value={formData.description} onChange={handleChange} />
                        <input type="text" autoComplete="off" name="duration" placeholder="Duration" value={formData.duration} onChange={handleChange} />
                        <input type="text" autoComplete="off" name="raiting" placeholder="Rating" value={formData.rating} onChange={handleChange} />
                        <input type="text" autoComplete="off" name="genre" placeholder="Genre" value={formData.genre} onChange={handleChange} />
                        <input type="text" autoComplete="off" name="dimension" placeholder="Dimension" value={formData.dimension} onChange={handleChange} />
                        <input type="text" autoComplete="off" name="producer" placeholder="Producer" value={formData.producer} onChange={handleChange} />
                        <input type="text" autoComplete="off" name="writer" placeholder="Writer" value={formData.writer} onChange={handleChange} />
                        <input type="text" autoComplete="off" name="language" placeholder="Language" value={formData.language} onChange={handleChange} />
                        <input type="text" autoComplete="off" name="poster" placeholder="Poster path" value={formData.poster_path} onChange={handleChange} />
                        <input type="text" autoComplete="off" name="trailer_link" placeholder="Trailer Link" value={formData.trailer_link} onChange={handleChange} />
                        <button type="submit">Upload</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Add_movie;
