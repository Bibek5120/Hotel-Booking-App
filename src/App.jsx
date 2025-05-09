import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home';
import Footer from './Components/Footer';
import AllRooms from './Pages/AllRooms';
import RoomDetails from "./Pages/RoomDetails";
import MyBookings from './pages/MyBookings';
import HotelReg from './Components/HotelReg';
import Layout from './Pages/hotelOwner/Layout';
import Dashboard from './Pages/hotelOwner/Dashboard';
import AddRoom from './Pages/hotelOwner/AddRoom';
import ListRoom from './Pages/hotelOwner/ListRoom';


const App = () => {

const isOwnerpath=useLocation().pathname.includes("owner");

  return (
    <div>
     {! isOwnerpath && <Navbar></Navbar>}
     {false && <HotelReg />}
     <div className='min-h[700vh]'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/rooms' element={<AllRooms/>} />
        <Route path='/rooms/:id' element={<RoomDetails/>} />
        <Route path='/my-bookings' element={<MyBookings/>} />
        <Route path='/owner' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="add-room" element={<AddRoom />} />
        <Route path="list-room" element={<ListRoom />} />

        </Route>
      </Routes>
     </div>
     <Footer />
    </div>
  )
}

export default App
