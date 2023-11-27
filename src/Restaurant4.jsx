import {Container, Grid, Paper, Stack } from '@mui/material';
import React from 'react';
import Rating from '@mui/material/Rating';

const Restaurant4 = () => {
  return (
    <div>
     <Container>
        <h4>Tanatan Mumbai</h4><br/>
        <hr/>
        <h2>Tanatan</h2><br></br>
        <Rating name="size-medium" defaultValue={4} /> &nbsp;&nbsp;350+people reviews
        &nbsp;&nbsp;| &nbsp;&nbsp;#7 of 8,306 Restaurants in Mumbai&nbsp;&nbsp;|
        &nbsp;&nbsp;&nbsp;&nbsp;₹₹₹₹,IndianVegetarian, FriendlyVegan Options<br/><br/>
        Ground Floor, Vidya Bhavan, Near Sena Bhavan, Dadar Shivaji Park, Mumbai 400028 India&nbsp;&nbsp;&nbsp;&nbsp;+91 99678 05996&nbsp;&nbsp;&nbsp;&nbsp;Website&nbsp;&nbsp;&nbsp;&nbsp;Menu
        <Grid>
            <Grid container spacing={2} padding={15}>

            <Stack direction="row" spacing={0} padding={0}>
              <img src='https://media-cdn.tripadvisor.com/media/photo-s/1b/21/26/9a/img-20200305-wa0060-largejpg.jpg'></img>
              <img src='https://media-cdn.tripadvisor.com/media/photo-s/1a/95/35/ca/img-20200112-052117-459.jpg'></img>
            </Stack>
            <Stack direction="row" spacing={2} padding={1}>
            <img src='https://media-cdn.tripadvisor.com/media/photo-f/0d/6c/88/47/live-starter-counter.jpg'></img>
            <img src='https://media-cdn.tripadvisor.com/media/photo-f/0d/6c/89/d8/buffet-spread.jpg'></img>
            <img src='https://media-cdn.tripadvisor.com/media/photo-f/0d/6c/8b/7c/cold-cuts-and-individual.jpg'></img>
            <img src='https://media-cdn.tripadvisor.com/media/photo-f/0b/58/20/6a/the-earth-plate.jpg'></img>
            </Stack>
            </Grid>
            <Stack direction="row">
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"400px",height:"350px"}}>
                 Food and Ambience<br/><br/><br/>
                 Indian, Vegetarian Friendly, Vegan Options, Halal<br/><br/>
                 “Amazing north indian food”<br/><br/>
                 “... Pappad and Salad Desserts: Sticky K...”<br/><br/><hr/>
                 Special Occasion Dining, Romantic, Groups, Bar 
                 <br/>Scene, Business meetings<br/><br/><br/>
                 “... very romantic outdoor seating as we...”<br/><br/>
“... same place at night looks so romantic.”
                    </Paper>
            </Grid>
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"400px",height:"350px"}}>
                 ABOUT<br/><br/>
                 An upscale resto-bar in the<br/>
                  affluent suburb of Juhu, Mumbai<br/>
                   has made its way to Shivaji Park,<br/>
                    Dadar. Tanatan has redefined <br/>
                    the dining experience serving<br/>
                     avant-garde quality of food and<br/>
                      drinks. True to its name,<br/>
                       Tanatan’s exquisite food, decor,<br/>
                    bar menu, Live music, is all<br/>
                    perfectly curated to culminate a <br/>
                    grandeur vibe.Tanatan has <br/>
                    redefined the dining experience<br/>
                     serving avant-garde quality <br/>
                     of food and drinks. 
            </Paper>
            </Grid>
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"400px",height:"350px"}}>
                 CUISINES<br/><br/>
                 Indian<br/><br/><br/>
                FEATURES<br/><br/>
                Delivery, Reservations, Seating, <br/>
                Validated Parking, Serves<br/>
                 Alcohol, Full Bar, Free Wifi,<br/>
                  Accepts Credit Cards, Table<br/>
                   Service, Wine and Beer, Digital<br/>
                    Payments, Dog Friendly
                  </Paper>
            </Grid>
            </Stack>
            <Stack direction="row">
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"400px",height:"450px"}}>
                 PRICE RANGE<br/><br/>
                 ₹1,500 - ₹5,000<br/><br/><br/>
                 SPECIAL DIETS<br/><br/>
                 Vegetarian Friendly, Vegan<br/>
                  Options, Halal<br/><br/><br/>
                  MEALS<br/><br/>
                  Lunch, Dinner, After-hours, Drinks<br/><br/><br/>
                  JUICES<br/><br/>
                  Mojito,Milkshakes<br/>
                  Rosemilk
                  </Paper>
            </Grid>
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"400px",height:"450px"}}>
                 Ratings and reviews<br/><br/>
                 3.0 <Rating name="size-medium" defaultValue={5} /> 498 reviews<br/><br/>
                 #7 of 8,306 Restaurants in Mumbai<br/><br/>
                 Travellers' Choice 2023<br/><br/><br/><br/><br/><hr/>
                 <br/><br/><br/>
                 RATINGS<br/><br/>
                 Food&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Rating name="size-medium" defaultValue={4} /> <br/>
                 Service&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Rating name="size-medium" defaultValue={3} /> <br/>
                 Atmosphere&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Rating name="size-medium" defaultValue={3} /> 
                 Value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Rating name="size-medium" defaultValue={4} /> 
            </Paper>
            </Grid>
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"400px",height:"450px"}}>
                Location and Contact<br/><br/>
                <img src='https://maps.google.com/maps/api/staticmap?&channel=ta.desktop.restaurant_review&zoom=15&size=347x137&scale=1&client=gme-tripadvisorinc&format=jpg&sensor=false&language=en_IN&center=19.025209,72.840103&maptype=roadmap&&markers=icon:http%3A%2F%2Fc1.tacdn.com%2F%2Fimg2%2Fmaps%2Ficons%2Fcomponent_map_pins_v1%2FR_Pin_Small.png|19.025209,72.840103&signature=NOKiEOPygzQxYMTAOmUu-nsDKGQ='></img><br/>
                <br/><br/>
               
Ground Floor, Vidya Bhavan, Near Sena Bhavan, <br/>
Dadar Shivaji Park, Mumbai 400028 India<br/><br/>

South Mumbai<br/>
1.4 km from Shree Siddhivinayak<br/><br/>
+91 99678 05996
                  </Paper>
            </Grid>
            </Stack>
            
          </Grid>
     </Container>
    </div>
  )
}

export default Restaurant4
