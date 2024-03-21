
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './css/Seat.css';
import Schedule from "./Schedule";


function Seat() {
    const [schedules, setSchedules] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchData();
    }, [id]);

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/movies/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch schedules');
            }
            const data = await response.json();
            setSchedules(data["data"]);
        } catch (error) {
            console.error('Error fetching schedules:', error);
        }
    };
    return (
        <>
        <div class="main_bodi">
            <div class="item--1">
                <img src={schedules.poster} alt="Moive Image"></img>
                <a href="/Tickets">Book now</a>
            </div>
            <div class="item--2">
                <div class="p">
                    <p>{schedules.name}</p>
                </div>
                <div class="img">
                    <img src="/Screen.jpg" alt="Cinama Seat Arrangement"></img>
                </div>
            </div>
            <div class="item--3">
                <input type="number" placeholder="Enter Seat Number"></input>
            </div>
    </div>
        </>
    );
}
export default Seat;