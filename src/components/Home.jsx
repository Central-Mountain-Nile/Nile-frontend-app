import React from 'react'
import ItemsFeed from './ItemsFeed'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  navigate("/itemsfeed/1");

  return (
    <div>
      
    </div>
  )
}

export default Home