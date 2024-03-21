import React from 'react';
import './css/First.css';

function First() {
    return (
        <>

                <div class="headd">
                    <h1>Booking App</h1>
                    <div class="line"></div>
                </div>
                <div class="main">
                    <div class="col_1">
                        <h1>MOVIE TICKETS</h1>
                        <a href="/Home">Book now</a>
                    </div>
                    <div class="col_2">
                        <img src="img.png" alt=""></img>
                    </div>  
                </div>
        </>
    );
}
export default First;