import React, { useState } from "react";
import '../css/Admin/Add_price.css';
import Admin_Header from "./Admin_Header";

function Add_price() {
    const [formData, setFormData] = useState({
        movieId: '',
        date: '',
        time: '',
        vipPrice: '',
        normalPrice: '',
        hall: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/prices', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to add price');
            }

            console.log('Price added successfully');
            // Clear form fields if needed
        } catch (error) {
            console.error('Error adding price:', error);
        }
    };

    return (
        <>
            <Admin_Header message="Add Price"/>
            <div className="bd">
                <div className="inps">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="movieId" placeholder="Movie Id" value={formData.movieId} onChange={handleChange} />
                        <input type="date" name="date" placeholder="Date" value={formData.date} onChange={handleChange} />
                        <input type="text" name="time" placeholder="Time" value={formData.time} onChange={handleChange} />
                        <input type="number" name="vipPrice" placeholder="VIP Price" value={formData.vipPrice} onChange={handleChange} />
                        <input type="number" name="normalPrice" placeholder="Normal Price" value={formData.normalPrice} onChange={handleChange} />
                        <input type="number" name="hall" placeholder="Hall" value={formData.hall} onChange={handleChange} />
                        <button type="submit">Upload</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Add_price;
