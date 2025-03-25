import React, { useState } from 'react'
import BASE_URL from '../Config/config';
import axios from 'axios';

import"../CSS/Register.css"
import { useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Register() {
  const [input, setInput] = useState({});
  const navigate =useNavigate();
  const handleInput = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInput((prevInput)=>({...prevInput,[name]:value}));
    console.log(input);
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    let api = `${BASE_URL}/customer/register`
  try {
  
    const res = await axios.post(api , input)
    toast.success("successfully registered")
    navigate('/lr')
  } catch (error) {
    // toast.error(error.res.data.msg) 
    toast.error(error.message); 
    console.log(error)
  }
  
  }


  return (
    <>
    <video className='videoTag' autoPlay loop muted>
        <source src='https://cdn.pixabay.com/video/2022/03/16/110923-689949643_large.mp4' type='video/mp4' />
      </video>
      <div className="welcome-message">
        <form>
          <h2>Register to continue</h2>
          <label>
          <br />
           Full Name: 
            <input required type="text" name='name' onChange={handleInput} />
          </label>
          <br />
          <label>
           Phone:
            <input required type="text" name='phone' onChange={handleInput}/>
          </label>
          <br />
          <label>
            Email:
            <input required type="email" name='email' onChange={handleInput} />
          </label>
          <br />
          <label>
            Password:
            <input required type="password" name='password' onChange={handleInput}/>
          </label>
          <br />
          <button onClick={handleSubmit} type="button">Register</button>
        </form>
      </div>
      <ToastContainer />
    </>
  )
}

export default Register;