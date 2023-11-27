// RestaurantHomePage.jsx
import {Link} from 'react-router-dom';
import { Box, Button, Stack} from '@mui/material';
import Grid from '@mui/material/Grid';
import Container, { containerClasses } from '@mui/material/Container';
import Paper from'@mui/material/Paper';
import SendIcon from '@mui/icons-material/Send';
import React, { useContext } from 'react';
import Rating from '@mui/material/Rating';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import './style.css';
import { userContext } from './Context';

const HomePage = () => {
  const[user,setuser]=useContext(userContext);
  return (
    <div className='susan'>

      <header className="header">
        <h1>Delicious Delights Restaurants</h1>
        <div className="login-button">
          <Link to ='login'>
          <button>Login</button>
        </Link>
        <h4 style={{color: 'white'}}>{user}</h4>
        </div>
      </header> 
      <nav className="navbar">
      
          <Button variant='contained'> 
          <Link to="/about" >ABOUT US</Link>
        </Button>
        &nbsp; &nbsp; &nbsp; &nbsp; 
        <Link to='/contact'>
          <Button variant='contained'> 
          Contacts
        </Button>
        </Link>
        &nbsp; &nbsp; &nbsp; &nbsp; 
        <Link to='men'>
          <Button variant='contained'> 
         MENU
        </Button>
        </Link>

        &nbsp; &nbsp; &nbsp; &nbsp; 
      </nav>
      <Box className= 'susanimg' style = {{backgroundImage: `url("https://img.freepik.com/free-photo/blur-coffee-cafe-shop-restaurant-with-bokeh-background_1421-472.jpg?w=1060&t=st=1700515202~exp=1700515802~hmac=de4d071716fbc42616423dd6411aa9aa859c824f40691eddccdca7081fb03415")`}}>
        </Box>
        <marquee><h3>Any Time Booking from our website</h3> </marquee>
        <br></br> <br></br> <br></br> <br></br> 

         <Box className='sudharshan'>
            <Container > 
              <Grid container spacing={8} padding={15}  className='sudharshan'>
            
                <Stack direction="row">
                <Grid item xs={4} spacing={15} padding={3}>
                  <Paper sx={{width:"500px",height:"328px",color:"black",backgroundColor:"Whitesmoke"}}>
                  <img src='https://wallpaperaccess.com/full/3014694.jpg' style={{width:"100%",height:"328px"}}></img>
                  </Paper>
                  <Link to="/res1">
                  <Button variant="contained" endIcon={<SendIcon />}><center>RESERVE</center></Button>
                </Link>
                </Grid>

                <Grid item xs={4} spacing={8} padding={0.7}>
                  <Paper sx={{width:"500px",height:"328px",color:"black",backgroundColor:"Whitesmoke"}}>
                    <h3>1)Mabruk Restaurant</h3><br></br>
                    <Rating name="size-medium" defaultValue={5} />&nbsp;&nbsp;&nbsp;&nbsp;Reviews:100+&nbsp;&nbsp;&nbsp;&nbsp;Open Now<br/><br/>
                     <h7>Lebanese, Mediterranean</h7><br></br><br></br><br></br>
                     <hr/>
                     "had couscous in mains."<br/>
                     "Best lebanese food and excellent service" 
                     <br></br><br/><hr/>
                     ₹1000 - ₹10,000<br></br><br></br>
                     <AddIcCallIcon></AddIcCallIcon>Call&nbsp;&nbsp;&nbsp;&nbsp;
                     <AddLocationIcon></AddLocationIcon>Location
                  </Paper>
                </Grid>
                
                </Stack>
                <Stack direction="row">
                <Grid item xs={4} spacing={15} padding={3}>
                  <Paper sx={{width:"500px",height:"328px",color:"black",backgroundColor:"Whitesmoke"}}>
                  <img src='https://wallpaperaccess.com/full/261576.jpg' style={{width:"100%",height:"328px"}}></img>
                  </Paper>
                  <Link to='/res2'>
                  <Button variant="contained" endIcon={<SendIcon />}><center>RESERVE</center></Button>
                  </Link></Grid>

                <Grid item xs={4} spacing={8} padding={0.7}>
                  <Paper sx={{width:"500px",height:"328px",color:"black",backgroundColor:"Whitesmoke"}}>
                    <h3>2)Fiona Restaurant</h3><br></br>
                    <Rating name="size-medium" defaultValue={3} />&nbsp;&nbsp;&nbsp;&nbsp;Reviews:10+&nbsp;&nbsp;&nbsp;&nbsp;Open Now<br/><br/>
                     <h7>Italian, Chinese₹₹₹₹</h7><br></br><br></br>
                     <hr/>

                     The in room dining staff is excellent Total commitment and professionalism...<br/><br/>
                   Excellent 
                     <br></br><hr/>
                     ₹100 - ₹1000<br></br><br></br>
                     <AddIcCallIcon></AddIcCallIcon>Call&nbsp;&nbsp;&nbsp;&nbsp;
                     <AddLocationIcon></AddLocationIcon>Location
                  </Paper>
                </Grid>

                </Stack>
                <Stack direction="row">
                <Grid item xs={4} spacing={15} padding={3}>
                  <Paper sx={{width:"500px",height:"328px",color:"black",backgroundColor:"Whitesmoke"}}>
                  <img src='https://wallpaperaccess.com/full/261648.jpg' style={{width:"100%",height:"328px"}}></img>
                  </Paper>
                  <Link to='/res3'>
                  <Button variant="contained" endIcon={<SendIcon />}><center>RESERVE</center></Button>
                  </Link>  </Grid>

                <Grid item xs={4} spacing={8} padding={0.7}>
                  <Paper sx={{width:"500px",height:"328px",color:"black",backgroundColor:"Whitesmoke"}}>
                    <h3>3)Celini Restaurant</h3><br></br>
                    <Rating name="size-medium" defaultValue={3} />&nbsp;&nbsp;&nbsp;&nbsp;Reviews:50+&nbsp;&nbsp;&nbsp;&nbsp;Open Now<br/><br/>
                     <h7>Italian, Pizza ₹₹-₹₹₹₹</h7><br></br><br></br>
                     <hr/>
                     "First I got to know about this place was through a Doctor, I Googled and found..."<br/>
"After Dinner"
                     <br></br><br/><hr/>
                     ₹1000 - ₹10,000<br></br><br></br>
                     <AddIcCallIcon></AddIcCallIcon>Call&nbsp;&nbsp;&nbsp;&nbsp;
                     <AddLocationIcon></AddLocationIcon>Location
                  </Paper>
                </Grid>
                </Stack>
                <Stack direction="row">
                <Grid item xs={4} spacing={15} padding={3}>
                  <Paper sx={{width:"500px",height:"328px",color:"black",backgroundColor:"Whitesmoke"}}>
                  <img src='https://wallpaperaccess.com/full/261604.jpg' style={{width:"100%",height:"328px"}}></img>
                  </Paper>
                  <Link to='/res4'>
                  <Button variant="contained" endIcon={<SendIcon />}><center>RESERVE</center></Button>
                  </Link>   </Grid>

                <Grid item xs={4} spacing={8} padding={0.7}>
                  <Paper sx={{width:"500px",height:"328px",color:"black",backgroundColor:"Whitesmoke"}}>
                    <h3>4)Tanatan Restaurant</h3><br></br>
                    <Rating name="size-medium" defaultValue={4} />&nbsp;&nbsp;&nbsp;&nbsp;Reviews:150+&nbsp;&nbsp;&nbsp;&nbsp;Open Now<br/><br/>
                     <h7>Indian, Bar₹₹ - ₹₹₹</h7><br></br><br></br><br></br>
                     <hr/>
                     "... fresh pepper, hint of green chili, citrus, salt & a splash of soda made i..."
                      "In dessert we ordered Matka rabdi gulab..."
                     <br></br><br/><hr/>
                     ₹500 - ₹2,000<br></br><br></br>
                     <AddIcCallIcon></AddIcCallIcon>Call&nbsp;&nbsp;&nbsp;&nbsp;
                     <AddLocationIcon></AddLocationIcon>Location
                  </Paper>
                </Grid>
                </Stack>
                <Stack direction="row">
                <Grid item xs={4} spacing={15} padding={3}>
                  <Paper sx={{width:"500px",height:"328px",color:"black",backgroundColor:"Whitesmoke"}}>
                  <img src='https://wallpaperaccess.com/full/4834863.jpg' style={{width:"100%",height:"328px"}}></img>
                  </Paper>
                  <Link to='/res5'>
                  <Button variant="contained" endIcon={<SendIcon />}><center>RESERVE</center></Button>
                  </Link>  </Grid>

                <Grid item xs={4} spacing={8} padding={0.7}>
                  <Paper sx={{width:"500px",height:"328px",color:"black",backgroundColor:"Whitesmoke"}}>
                    <h3>5)Puppys Restaurant</h3><br></br>
                    <Rating name="size-medium" defaultValue={5} />&nbsp;&nbsp;&nbsp;&nbsp;Reviews:100+&nbsp;&nbsp;&nbsp;&nbsp;Open Now<br/><br/>
                     <h7>Indian, InternationalIndian,₹₹-₹₹₹₹</h7><br></br><br></br><br></br>
                     <hr/>
                     
                    "Street food dinner"<br/>
                    "... is good , Special thanks to miss Ra..."
                     <br></br><br/><hr/>
                     ₹1000 - ₹6000<br></br><br></br>
                     <AddIcCallIcon></AddIcCallIcon>Call&nbsp;&nbsp;&nbsp;&nbsp;
                     <AddLocationIcon></AddLocationIcon>Location
                  </Paper>
                </Grid>
                </Stack>
                <Stack direction="row">
                <Grid item xs={4} spacing={15} padding={3}>
                  <Paper sx={{width:"500px",height:"328px",color:"black",backgroundColor:"Whitesmoke"}}>
                  <img src='https://wallpaperaccess.com/full/4834850.jpg' style={{width:"100%",height:"328px"}}></img>
                  </Paper>
                  <Link to='/res6'>
                  <Button variant="contained" endIcon={<SendIcon />}><center>RESERVE</center></Button>
              </Link>  </Grid>

                <Grid item xs={4} spacing={8} padding={0.7}>
                  <Paper sx={{width:"500px",height:"328px",color:"black",backgroundColor:"Whitesmoke"}}>
                    <h3>6)Almas Restaurant</h3><br></br>
                    <Rating name="size-medium" defaultValue={5} />&nbsp;&nbsp;&nbsp;&nbsp;Reviews:100+&nbsp;&nbsp;&nbsp;&nbsp;Open Now<br/><br/>
                     <h7>Indian, Asian₹₹ - ₹₹₹</h7><br></br><br></br><br></br>
                     <hr/>
                     "Thai, is a dish made with succulent prawns cooked in a fragrant and creamy cu..."
                      "... a bit taste of chili and in Cocktai..." 
                     <br></br><br/><hr/>
                     ₹1000 - ₹8,000<br></br><br></br>
                     <AddIcCallIcon></AddIcCallIcon>Call&nbsp;&nbsp;&nbsp;&nbsp;
                     <AddLocationIcon></AddLocationIcon>Location
                  </Paper>
                </Grid>
                </Stack>
                

                
              </Grid>
            </Container>
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