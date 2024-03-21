// import React from "react";
// import './css/Schedule.css';
// // import Image from './public/img.png';
// function Banner () {
//     return (
//       <>
//         <div class="bodi">
//             <div class="main">
//                 <div class="item1">
//                     <img src="/img.png" alt=""></img>
//                     <a href="/Seats">Book now</a>
//                 </div>
//                 <div class="item2">
//                     <div class="row1">
//                         <h1>Schedules</h1>
//                     </div>
//                     <div class="row2">
                    //     <div class="box">
                    //         <div class="inner">
                    //             <p>March 24</p>
                    //             <p>6pm / Hall 1 <input type="checkbox"></input> </p> 
                    //             <p>9pm / Hall 2 <input type="checkbox"></input></p>
                    //         </div>
                    //     </div>
                    //     <div class="box">
                    //         <div class="inner">
                    //             <p>March 25</p>
                    //             <p>6pm / Hall 1 <input type="checkbox"></input> </p> 
                    //             <p>9pm / Hall 2 <input type="checkbox"></input></p>
                    //         </div>
                    //     </div>
                    //     <div class="box">
                    //         <div class="inner">
                    //             <p>March 26</p>
                    //             <p>6pm / Hall 1 <input type="checkbox"></input> </p> 
                    //             <p>9pm / Hall 2 <input type="checkbox"></input></p>
                    //         </div>
                    //     </div>
                    //     <div class="box">
                    //         <div class="inner">
                    //             <p>March 27</p>
                    //             <p>6pm / Hall 1 <input type="checkbox"></input> </p> 
                    //             <p>9pm / Hall 2 <input type="checkbox"></input></p>
                    //         </div>
                    //     </div>
                    //     <div class="box">
                    //         <div class="inner">
                    //             <p>March 28</p>
                    //             <p>6pm / Hall 1 <input type="checkbox"></input> </p> 
                    //             <p>9pm / Hall 2 <input type="checkbox"></input></p>
                    //         </div>
                    //     </div>
                    // </div>
//                 </div>
//             </div>
//         </div>
//       </>
//     );
//   }
//   export default Banner;


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './css/Schedule.css';

function Schedule() {
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
        <div className="bodi">
            <div className="main">
            {schedules ? (
                <>
                <div className="item1">
                    <img src={schedules.poster} alt="Poster Image"></img>
                    <a href={`/Seats/${schedules.id}`}>Book now</a>
                </div>
                <div className="item2">
                    <div className="row1">
                        <h1>Schedules</h1>
                    </div>
                    <div className="row2">
                                                <div class="box">
                            <div class="inner">
                                <p>March 24</p>
                                <p>6pm / Hall 1 <input type="checkbox"></input> </p> 
                                <p>9pm / Hall 2 <input type="checkbox"></input></p>
                            </div>
                        </div>
                        <div class="box">
                            <div class="inner">
                                <p>March 25</p>
                                <p>6pm / Hall 1 <input type="checkbox"></input> </p> 
                                <p>9pm / Hall 2 <input type="checkbox"></input></p>
                            </div>
                        </div>
                        <div class="box">
                            <div class="inner">
                                <p>March 26</p>
                                <p>6pm / Hall 1 <input type="checkbox"></input> </p> 
                                <p>9pm / Hall 2 <input type="checkbox"></input></p>
                            </div>
                        </div>
                        <div class="box">
                            <div class="inner">
                                <p>March 27</p>
                                <p>6pm / Hall 1 <input type="checkbox"></input> </p> 
                                <p>9pm / Hall 2 <input type="checkbox"></input></p>
                            </div>
                        </div>
                        <div class="box">
                            <div class="inner">
                                <p>March 28</p>
                                <p>6pm / Hall 1 <input type="checkbox"></input> </p> 
                                <p>9pm / Hall 2 <input type="checkbox"></input></p>
                            </div>
                        </div>
                    </div>
                        {/* {schedules.map((schedule, index) => (
                            <div className="box" key={index}>
                                <div className="inner">
                                    <p>{schedule.date}</p>
                                    {schedule.showtimes.map((showtime, index) => (
                                        <p key={index}>{showtime.time} / {showtime.hall} <input type="checkbox"></input></p>
                                    ))}
                                </div>
                            </div>
                        ))} */}

                    </div>
                
                </>  
            ) : (
                <p>Loading...</p>
            )}
            </div>
        </div>
    );
}

export default Schedule;
