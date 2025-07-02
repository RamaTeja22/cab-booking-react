import React, { useState } from 'react'
import './RegisterDriver.css'
import { registerDriver } from '../../services/api';

function RegisterDriver() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('')
    const [vehicleNo, setVehicleNo] = useState('')
    const [success,setSuccess] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async(e) => {
        e.preventDefault()
        setLoading(true)
        try{
            await registerDriver({name, phone, vehicleNo})
            setSuccess('Driver Registered Successfuly')
            setName('')
            setPhone('')
            setVehicleNo('')
        }
        catch(err){
            setError(err?.message || err)
        }
        finally{
            setLoading(false)
        }
    }

  return (
    <div>
        <h2>Register Driver</h2>
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder='name'
        value={name}
        onChange={(e)=>setName(e?.target?.value)}
        required
        />
        <br/>
         <input
        type="text"
        placeholder='mobile'
        value={phone}
        onChange={(e)=>setPhone(e?.target?.value)}
        required
        />
        <br/>
         <input
        type=""text
        placeholder='vehicle number'
        value={vehicleNo}
        onChange={(e)=>setVehicleNo(e?.target?.value)}
        required
        />
        <br/>
        <button type="submit" disabled={loading}> 
            {loading? 'Registering...' : 'Register' }
        </button>
      </form>
    </div>
  )
}

export default RegisterDriver
