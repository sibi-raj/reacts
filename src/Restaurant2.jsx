import {Container, Grid, Paper, Stack } from '@mui/material';
import React from 'react';
import Rating from '@mui/material/Rating';

const Restaurant2 = () => {
  return (
    <div>
     <Container>
        <h4>Fiona Mumbai</h4><br/>
        <hr/>
        <h2>Fiona</h2><br></br>
        <Rating name="size-medium" defaultValue={5} /> &nbsp;&nbsp;700+people review
        &nbsp;&nbsp;| &nbsp;&nbsp;#2 of 8,306 Restaurants in Mumbai&nbsp;&nbsp;|
        &nbsp;&nbsp;&nbsp;&nbsp;₹₹₹₹,Italian,Chinese,Indian<br/><br/>
        Juhu Tara Road JW Marriott, Mumbai 400049,  India,&nbsp;&nbsp;&nbsp;&nbsp;+91 22 6693 3344,&nbsp;&nbsp;&nbsp;&nbsp;Website&nbsp;&nbsp;&nbsp;&nbsp;Menu
Closes in 6 min:  See all hours
        <Grid>
            <Grid container spacing={2} padding={15}>

            <Stack direction="row" spacing={1} padding={0}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS0AS1GqEVn-B44QuWBCnuNmpnhC_KbQnCaQ&usqp=CAU'></img>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Dsru9H94PdZL8viqt_KOszNxMSthc78Hrw&usqp=CAU'></img>
            <img src='https://media-cdn.tripadvisor.com/media/photo-f/24/1a/3a/69/saffron-interiors.jpg'></img>
            </Stack>
            <Stack direction="row" spacing={2} padding={2}>
            <img src='https://media-cdn.tripadvisor.com/media/photo-f/24/1a/3a/e8/64-cocoa-mousse.jpg'></img>
            <img src='https://media-cdn.tripadvisor.com/media/photo-f/24/1a/3b/c0/saffron-interiors.jpg'></img>
            <img src='https://media-cdn.tripadvisor.com/media/photo-f/02/a3/ee/b6/restaurants-in-mumbai.jpg'></img>
            </Stack>
            </Grid>
            <Stack direction="row">
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"400px",height:"400px"}}>
                 Food and Ambience<br/><br/>
                 Local cuisine, Indian, Vegetarian Friendly, Vegan<br/>
                  Options, Halal<br/><br/>
                  “Great place for good Indian food”<br/><br/>
                  “North indian restaurant in Juhu”<br/><br/><br/>
                  “The fish and the lamb meat was succulent.”<br/><br/><br/>
                  IndianVegetarian FriendlyVegan Options
                    </Paper>
            </Grid>
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"400px",height:"400px"}}>
                 ABOUT<br/><br/>
Located in the heart of Mumbai,<br/>
 Saffron is named after the<br/>
  world’s most precious spice,<br/>
     serving handcrafted, passed<br/>
     -down and reimagined Indian<br/> flavors in an intimate and<br/>
     contemporary setting.<br/>the world’s most precious spice, <br/>serving handcrafted, <br/>
     passed-down and reimagined<br/> Indian flavors in an intimate<br/> and contemporary setting.
            </Paper>
            </Grid>
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"400px",height:"400px"}}>
                 CUISINES<br/><br/>
                Indian<br/><br/>
                FEATURES<br/><br/>
Takeout, Reservations, Private<br/>
 Dining, Seating, Parking<br/>
  Available, Validated Parking,<br/>
   Valet Parking, Highchairs<br/>
    Available, Wheelchair<br/>
     Accessible, Serves Alcohol, Full <br/>
     Bar, Free Wifi, Accepts Credit<br/> Cards, Table Service, Live Music
                  </Paper>
            </Grid>
            </Stack>
            <Stack direction="row">
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"400px",height:"450px"}}>
                 PRICE RANGE<br/><br/>
                 ₹2,500 - ₹4,000<br/><br/><br/>
                 SPECIAL DIETS<br/><br/>
                 Vegetarian Friendly, Vegan<br/>
                  Options, Halal, Gluten Free <br/>
                  Options<br/><br/><br/>
                  MEALS<br/><br/>
                  Lunch,Dinner, Drinks<br/><br/><br/>
                  JUICES<br/><br/>
                  Mojito,Fresh Juices,Milkshakes<br/>
                  Rosemilk
                  </Paper>
            </Grid>
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"400px",height:"450px"}}>
                 Ratings and reviews<br/><br/>
                 4.0 <Rating name="size-medium" defaultValue={5} /> 765 reviews<br/><br/>
                 #2 of 8,306 Restaurants in Mumbai<br/><br/>
                 Travellers' Choice 2023<br/><br/><br/><br/><br/><hr/>
                 <br/><br/><br/>
                 RATINGS<br/><br/>
                 Food&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Rating name="size-medium" defaultValue={4} /> <br/>
                 Service&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Rating name="size-medium" defaultValue={4} /> <br/>
                 Atmosphere&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Rating name="size-medium" defaultValue={4} /> 
                 Value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Rating name="size-medium" defaultValue={5} /> 
            </Paper>
            </Grid>
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"400px",height:"450px"}}>
                Location and Contact<br/><br/>
                <img src='https://maps.google.com/maps/api/staticmap?&channel=ta.desktop.restaurant_review&zoom=15&size=347x137&scale=1&client=gme-tripadvisorinc&format=jpg&sensor=false&language=en_IN&center=19.102060,72.826004&maptype=roadmap&&markers=icon:http%3A%2F%2Fc1.tacdn.com%2F%2Fimg2%2Fmaps%2Ficons%2Fcomponent_map_pins_v1%2FR_Pin_Small.png|19.102060,72.826004&signature=EloA8Y8PzD2Sm70rsdBXYrT9OZo='></img><br/>
                <br/><br/>
                Juhu Tara Road JW Marriott, Mumbai <br/>400049 India<br/><br/><br/>


                Juhu<br/>
0.4 km from Juhu Beach<br/><br/><br/>
Contact:9876543210
                  </Paper>
            </Grid>
            </Stack>
            
          </Grid>
     </Container>
    </div>
  )
}

export default Restaurant2