import React, { useState } from 'react'
import { registerRider } from '../../services/api';
import './RegisterRider.css'

function RegisterRider() {
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true)
        setError('')
        setSuccess('')
        try{
            await registerRider({name, email, phone});
            setSuccess('Rider Registered Successfully')
            setName('')
            setEmail('')
            setPhone('')
        }
        catch(err){
            setError(err?.message || err)
        }
        finally{
            setLoading(false)
        }
    }

  return (
    <div className='register-rider-container'>
        {error && <p>{error}</p>}
        {success && <p>{success}</p>}
      <h2>Register Rider</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <input
        className='form-input'
        type="text"
        placeholder='Name'
        value={name}
        onChange={(e)=>setName(e?.target?.value)}
        required/>
        <br/>
        <input
        className='form-input'
        type="email"
        placeholder='Email'
        value={email}
        onChange={(e)=>setEmail(e?.target?.value)}
        required/>
        <br/>
        <input
        className='form-input'
        type="number"
        placeholder='Mobile Number'
        value={phone}
        onChange={(e)=>setPhone(e?.target?.value)}
        required/>
        <br/>

        <button className="submit-button" type="submit" disabled={loading}>
            {loading ? 'Registering ...' : 'Register'}
        </button>
      </form>
    </div>
  )
}

export default RegisterRider
