import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import RegisterRiderPage from './pages/RegisterRiderPage';
import RegisterDriverPage from './pages/RegisterDriverPage';
import ToggleAvailibilityPage from './pages/ToggleAvailibilityPage';
import UpdateLocationPage from './pages/UpdateLocationPage';
import BookCab from './components/BookCab/BookCab';
import EndRide from './components/EndRide/EndRide';
import RideHistory from './components/RideHistory/RideHistory';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register-rider" element={<RegisterRiderPage />} />
          <Route path="/register-driver" element={<RegisterDriverPage />} />
           <Route path="/update-location" element={<UpdateLocationPage />} />
          <Route path="/toggle-availibility" element={<ToggleAvailibilityPage />} />
           <Route path="/book-cab" element={<BookCab />} />
          <Route path="/end-ride" element={<EndRide />} />
          <Route path="/fetch-history/:riderId" element={<RideHistory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;