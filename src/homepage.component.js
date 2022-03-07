import React from 'react'
import './homepage.style.scss'

// Home page de bir life cycle ihtiyacımız yok bu sebepten
// functional component ile homepage componenti oluşturuyoruz
const HomePage = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Hats</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>JACKETS</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>WOMEN</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>MEN</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
)

export default HomePage;
