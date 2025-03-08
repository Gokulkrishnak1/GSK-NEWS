import React, { useEffect, useState } from 'react'
import '../styles/Hero.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { GeneralContext } from '../context/GeneralContext';
import Spinner from 'react-bootstrap/Spinner';

const Hero = () => {

  const {topNews} = React.useContext(GeneralContext)

  



  return (
    <>
      {topNews.length > 0 ?
      <div className='Hero-container'>

        
            <div className='hero-article-1' onClick={()=> window.open(topNews[3].url, '_blank')}  >
              <img src={topNews[3].urlToImage} alt="" />
              <h3>{topNews[3].title}</h3>
            </div>
            
            <div className='hero-article-2'>
                <div className='hero-article-small' onClick={()=> window.open(topNews[12].url, '_blank')}  >
                  <img src={topNews[12].urlToImage} alt="" />
                  <p>{topNews[12].title}</p>
                </div>
                <div className='hero-article-small' onClick={()=> window.open(topNews[13].url, '_blank')}  >
                  <img src={topNews[13].urlToImage} alt="" />
                  <p>{topNews[13].title}</p>
                </div>
                <div className='hero-article-small' onClick={()=> window.open(topNews[4].url, '_blank')}  >
                  <img src={topNews[4].urlToImage} alt="" />
                  <p>{topNews[4].title}</p>
                </div>
                <div className='hero-article-small' onClick={()=> window.open(topNews[5].url, '_blank')}  >
                  <img src={topNews[5].urlToImage} alt="" />
                  <p>{topNews[5].title}</p>
                </div>
            </div>
          </div>

        :

          <div className="spinners">
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" size="sm" />
          </div>
        
        }
    </>


  )
}

export default Hero