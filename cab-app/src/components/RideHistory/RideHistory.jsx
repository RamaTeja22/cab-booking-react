import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getRideHistory } from '../../services/api';

function RideHistory() {
  const { riderId } = useParams();
  const navigate = useNavigate();

  const [rides, setRides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await getRideHistory(parseInt(riderId));
        setRides(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, [riderId]);

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <div>
      <h2>Ride History for Rider ID: {riderId}</h2>
      <button onClick={handleBack}>Go Back</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && (
        <ul>
          {rides?.map(ride => (
            <li key={ride.id}>
              Started at: {new Date(ride.startTime).toLocaleString()}
              {ride.endTime ? `, Ended at: ${new Date(ride.endTime).toLocaleString()}` : ', Ongoing'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RideHistory;