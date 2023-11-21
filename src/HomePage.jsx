// RestaurantHomePage.jsx
import {Link} from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const HomePage = () => {
  return (
    <div className='susan'>

      <header className="header">
        <h1>Delicious Delights Restaurant</h1>
        <div className="login-button">
          <Link to ='login'>
          <button>Login</button>
        </Link>
        </div>
      </header> 
      <nav className="navbar">
      
          <Button variant='contained'> 
          <Link to="/about" >ABOUT US</Link>
        </Button>
        &nbsp; &nbsp; &nbsp; &nbsp; 
          <Button variant='contained'> 
          Contacts
        </Button>
        &nbsp; &nbsp; &nbsp; &nbsp; 
          <Button variant='contained'> 
         MENU
        </Button>
        &nbsp; &nbsp; &nbsp; &nbsp; 
      </nav>
      <Box className= 'susanimg' style = {{backgroundImage: `url("https://img.freepik.com/free-photo/blur-coffee-cafe-shop-restaurant-with-bokeh-background_1421-472.jpg?w=1060&t=st=1700515202~exp=1700515802~hmac=de4d071716fbc42616423dd6411aa9aa859c824f40691eddccdca7081fb03415")`}}>
  
        </Box>
     
      <Box className= 'susanimg' style = {{backgroundImage: `url("https://img.freepik.com/premium-psd/food-menu-restaurant-web-banner-template_120329-796.jpg?w=1060")`}}>
        <Typography variant='h1'></Typography>
      </Box>
      <Box className= 'susanimg' style = {{backgroundImage: `url("https://img.freepik.com/free-psd/food-menu-restaurant-social-media-cover-template_202595-368.jpg?w=1380&t=st=1700513928~exp=1700514528~hmac=ff26e1a990fbc3fec99c7c0772db0931429c489a8aaddbd4bcc1d245e8f9b82d")`}}></Box>
    
        
      <section id="hero" className="hero-section">
        <div className="hero-image">
        </div>
        <div className="hero-text">
        
        </div>
      </section>
        

      <footer>
      <section id="menu">
        <h2>Our Menu</h2>
        {/* Menu content goes here */}
      </section>

      <section id="about">
        <h2>About Us</h2>
        {/* About Us content goes here */}
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        {/* Contact Us content goes here */}
      </section>


        <p>&copy; 2023 Delicious Delights Restaurant. All rights reserved.</p>
      </footer>
     
    </div>
  );
};
export default HomePage;