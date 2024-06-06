import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Movie_Detail from './pages/Movie_Detail';
import SChedules from './pages/Schedules';
import Seats from './pages/Seats';
import Tickets from './pages/Tickets';
import Admin_Header from './components/Admin/Admin_Header';
import Add_movie from './components/Admin/Add_movie';
import Add_price from './components/Admin/Add_price';
import Add_hall from './components/Admin/Add_hall';

function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route index element={<Welcome/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Movie_Detail/:id" element={<Movie_Detail/>} />
        <Route path="/SChedules/:id" element={<SChedules/>} />
        <Route path="/Seats/:id" element={<Seats/>} />
        <Route path="/Tickets/:id" element={<Tickets/>} />
        <Route path="/add_movie" element={<Add_movie/>} />
        <Route path="/add_price" element={<Add_price/>} />
        <Route path="/add_hall" element={<Add_hall/>} />
      </Routes>
    </BrowserRouter>
      {/* <Welcome/> */}
      {/* <Home/> */}
      {/* <Movie_Detail/> */}
      {/* <SChedules/> */}
      {/* <Seats/> */}
      {/* <Tickets/> */}
   </>
  );
}

export default App;
