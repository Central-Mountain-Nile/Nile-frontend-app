import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();


  useEffect(()=>{
    navigate("/itemsfeed/1");

  },[])
  return (
    <div>
      
    </div>
  )
}

export default Home