import React, { useState } from "react";
import '../css/Admin/Add_hall.css';
import Admin_Header from "./Admin_Header";

function Add_hall() {
    const [formData, setFormData] = useState({
        hallName: '',
        numberOfSeats: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/halls', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to add hall');
            }

            console.log('Hall added successfully');
            // Clear form fields if needed
        } catch (error) {
            console.error('Error adding hall:', error);
        }
    };

    return (
        <>
            <Admin_Header message="Add Hall"/>
            <div className="bdd">
                <div className="inps">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="hallName" placeholder="Hall Name" value={formData.hallName} onChange={handleChange} />
                        <input type="number" name="numberOfSeats" placeholder="Number of Seats" value={formData.numberOfSeats} onChange={handleChange} />
                        <button type="submit">Upload</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Add_hall;
