import React from 'react'
import "../CSS/LR.css"
import { useNavigate } from 'react-router-dom'
import BASE_URL from '../Config/config';
import axios from 'axios';
import { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LR() {
  const[email , setEmail] = useState("")
  const [password , setPassword] = useState("")

  const submitHandler = async(e)=>{
    e.preventDefault();
    console.log(email);
    console.log(password);
    let api = `${BASE_URL}/customer/login`
    try {

      const res = await axios.post(api , {email : email , password : password});

      localStorage.setItem("token" , res.data.token)
      alert("Login successful");
      navigate("/layout")
      
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        toast.error(error.response.data.msg);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        toast.error("No response received from server");
      } else {
        // Something happened in setting up the request that triggered an Error
        toast.error("Error setting up request");
      }
    }
  }


  const navigate = useNavigate();
  return (
    <>

      <video className='videoTag' autoPlay loop muted>
        <source src='https://cdn.pixabay.com/video/2023/11/02/187588-880665640_large.mp4' type='video/mp4' />
      </video>
      <div className="welcome-message">
        <form>
          <h2>Login to continue</h2>
          <label>
            Email:
            <input type="email" name='email' onChange={(e)=>{setEmail(e.target.value)}} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name='password' onChange={(e)=>{setPassword(e.target.value)}}/>
          </label>
          <br />
          <button type="submit" onClick={submitHandler}>Login</button>
          <button type="button" onClick={()=>{
            navigate("/register")
          }}>Register</button>
        </form>
        <ToastContainer />
      </div>
      
    </>
  )
}

export default LR