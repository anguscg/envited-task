

import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './Home.css'
import image1 from './images/landing.png';

function Home() {
    
    return (
        <header className="header">
        <img src={image1} alt="" className="card-img" />
        <div className="title-section">
          <h1 className="heading-text1">Imagine if </h1>
          <h1 className="heading-text2">Snapchat</h1>
          <h1 className="heading-text1">had events.</h1>
          <p className="title-subtxt">Easily host and share events with your friends across any social media.</p>
          <img src={image1} alt="" className="card-img2" />
          <div className="create-button"><Link to="/create" style={{ textDecoration: 'none', color: '#fff' }}>🎉 Create my event</Link></div>
        </div>
        
      </header>
    )
}

export default Home