// src/components/ToggleAvailability.jsx

import React, { useState } from 'react';
import { toggleDriverAvailability } from '../../services/api';

function ToggleAvailability() {
  const [driverId, setDriverId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [availabilityStatus, setAvailabilityStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const updatedDriver = await toggleDriverAvailability(parseInt(driverId));
      setSuccess(`Driver ${updatedDriver.name} is now ${updatedDriver.available ? 'available' : 'unavailable'}`);
      setAvailabilityStatus(updatedDriver.available);
      setDriverId('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Toggle Driver Availability</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Driver ID"
          value={driverId}
          onChange={(e) => setDriverId(e.target.value)}
          required
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Updating...' : 'Toggle Availability'}
        </button>
      </form>
    </div>
  );
}

export default ToggleAvailability;