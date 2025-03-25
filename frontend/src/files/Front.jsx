import React from 'react'
import "../CSS/Front.css"
import { useNavigate } from 'react-router-dom'

function Front() {
  const navigate = useNavigate();
  return (
    <>
      <video onClick={() => {
        navigate("/lr")
      }} className='videoTag' autoPlay loop muted>
        <source src='https://cdn.pixabay.com/video/2024/04/15/208082_large.mp4' type='video/mp4' />
      </video>
      <div className="welcome-message">
        <h1>Welcome to the Indian National Bank</h1>
        <p>Click anywhere to visit  the website</p>

      </div>
    </>
  )
}

export default Front