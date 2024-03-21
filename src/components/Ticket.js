import React from 'react';
import './css/Ticket.css';

function Ticket() { 
    return (
        <>  
            <div class="ticking">
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
                                <p>The Beekeeper</p>
                                <p>March 24, 2024</p>
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
            </div>
        </>
    );
 }
 export default Ticket;