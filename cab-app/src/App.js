import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import RegisterRiderPage from './pages/RegisterRiderPage';
import RegisterDriver from './pages/RegisterDriver';
import UpdateLocation from './pages/UpdateLocation';
import ToggleAvailibility from './pages/ToggleAvailibility';
import BookCab from './pages/BookCab';
import EndRide from './pages/EndRide';
import History from './pages/History';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register-rider" element={<RegisterRiderPage />} />
          <Route path="/register-driver" element={<RegisterDriver />} />
           <Route path="/update-location" element={<UpdateLocation />} />
          <Route path="/toggle-availibility" element={<ToggleAvailibility />} />
           <Route path="/book-cab" element={<BookCab />} />
          <Route path="/end-ride" element={<EndRide />} />
          <Route path="/fetch-history" element={<History />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;