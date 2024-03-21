import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import '../css/Admin/Admin_Header.css';

function Admin_Header({ message }) {
    return (
        <div className="h">
            <div className="he">
                <div className="col-11"> 
                    <Link to="/Home"><h1>Booking App</h1></Link> 
                    <div className="line"></div>
                </div>
                <div className="col-22">
                    <h1>{message}</h1>
                </div>
                <div className="col-33">
                    <Link to="/add_movie">Add Movie</Link>
                    <Link to="/add_price">Add Price</Link>
                    <Link to="/add_hall">Add Hall</Link>
                </div>
            </div>
        </div>
    );
}

export default Admin_Header;
