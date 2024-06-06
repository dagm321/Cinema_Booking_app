
import './css/Ticket.css';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Ticket() { 
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
            <div class="ticking">
            {movieData ? (
                    <>
                <div class="ticket">
                    <div class="tick">
                        <h1>Movie Ticket</h1>
                        <div class="ticket_information">
                            <div class="left">
                                <p>Movie Name</p>
                                <p>Show Date</p>
                                <p>Time</p>
                                <p>Seat Number</p>
                                <p>Price</p>
                                <p>Hall</p>
                                <p>Ticket ID</p>
                                <p>Date</p>
                            </div>
                            <div class="right">
                                <p>{movieData.name}</p>
                                <p>{movieData.description}</p>
                                <p>6 PM</p>
                                <p>24</p>
                                <p>200 ETB</p>
                                <p>01</p>
                                <p>0012921</p>
                                <p>21/03/2024</p>
                            </div>
                        </div>
                    </div>
                    <div class="buttons">
                        <a href="">Place Ticket</a>
                        <a href="/Seats" id="cancel">x Cancel</a>
                    </div>
                </div>
                    </>
                ) : (
                    <p>Loading...</p>
                )}

            </div>
        </>
    );
 }
 export default Ticket;