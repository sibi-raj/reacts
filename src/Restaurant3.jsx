import {Container, Grid, Paper, Stack } from '@mui/material';
import React from 'react';
import Rating from '@mui/material/Rating';

const Restaurant3 = () => {
  return (
    <div>
     <Container>
        <h4>Celini Mumbai</h4><br/>
        <hr/>
        <h2>Celini</h2><br></br>
        <Rating name="size-medium" defaultValue={4} /> &nbsp;&nbsp;500+people review
        &nbsp;&nbsp;| &nbsp;&nbsp;#56 of 8,306 Restaurants in Mumbai&nbsp;&nbsp;|
        &nbsp;&nbsp;&nbsp;&nbsp;₹₹₹₹,Sicilian,Italian,Chinese,Indian<br/><br/>
        Bandra Kurla Complex Vicinity, Off Western Express Highway, Santacruz East,, Mumbai 400055 India&nbsp;&nbsp;&nbsp;&nbsp;+91 22 6676 1673&nbsp;&nbsp;&nbsp;&nbsp;Website&nbsp;&nbsp;&nbsp;&nbsp;Menu
        <Grid>
            <Grid container spacing={2} padding={15}>

            <Stack direction="row" spacing={1} padding={0}>
              <img src='https://media-cdn.tripadvisor.com/media/photo-s/17/93/f2/36/img-20190512-162228-largejpg.jpg'></img>
              <img src='https://media-cdn.tripadvisor.com/media/photo-s/02/a3/ee/b4/lotus-cafe-all-day-dining.jpg'></img>
            </Stack>
            <Stack direction="row" spacing={2} padding={1}>
            <img src='https://media-cdn.tripadvisor.com/media/photo-f/05/ad/9c/6f/celini-at-grand-hyatt.jpg'></img>
            <img src='https://media-cdn.tripadvisor.com/media/photo-f/05/ad/9b/ca/celini-at-grand-hyatt.jpg'></img>
            <img src='https://media-cdn.tripadvisor.com/media/photo-f/0d/13/75/f1/ambience.jpg'></img>
            <img src='https://media-cdn.tripadvisor.com/media/photo-f/06/47/74/07/lotus-cafe.jpg'></img>
            </Stack>
            </Grid>
            <Stack direction="row">
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"400px",height:"400px"}}>
                 Food and Ambience<br/><br/>
                 Italian, Pizza, Sicilian, Southern-<br/>Italian, Vegetarian Friendly<br/><br/>
                 “We had salad, Pizza, Risotto and Tiramisu desert.”<br/><br/>
                 Authentic Italian food”<br/><br/><hr/>
                 Special Occasion Dining, Romantic, Groups, Business <br/>meetings<br/><br/>
                 “Went to stay at Grand Hyatt BKC for a very special<br/>
                  occasion and heard good re...”<br/><br/>
                  “Experienced one of the best Christmas brunch <br/>
                  at the restaurant.”
                    </Paper>
            </Grid>
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"400px",height:"400px"}}>
                 ABOUT<br/><br/>
                 Celini Mumbai, the truly Italian restaurant <br/>
                 in Mumbai, with home-style cooking embraces<br/>
                 traditional Italian recipes and presents them<br/>
                 with a modern approach. Exuding understated<br/>
                  elegance, the interiors of Celini Mumbai are<br/>
                contemporary and simple. The Mumbai restaurant <br/>
                 showcases a wood-fired pizza oven, rotisserie,<br/>
                 and charcoal grill – all built into its show<br/>
                  kitchen designed by Molteni of France, where<br/>
                   the sights and smells of Italian cooking <br/>
                   invades all the senses. The restaurant has<br/>
                   an exhaustive list of delectable wines and<br/>
                    multiple seating options like table booths<br/>
                     and lounges. Now experience this Italian<br/>
                      exuberance within the comforts of your<br/>
                       own home with our special Home Delivery service…
            </Paper>
            </Grid>
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"400px",height:"400px"}}>
                 CUISINES<br/><br/>
                 Italian, Pizza, Sicilian, Southern-<br/>
                 Italian<br/><br/>
                FEATURES<br/><br/>
                Reservations, Seating, Parking<br/>
                 Available, Valet Parking, <br/>
                 Highchairs Available, Wheelchair<br/>
                  Accessible, Serves Alcohol, Full<br/>
                   Bar, Accepts Credit Cards, Table<br/>
                    Service, Wine and Beer, Digital <br/>
                    Payments, Live Music, Non-<br/>
                    smoking restaurants, Gift Cards<br/>
                     Available
                  </Paper>
            </Grid>
            </Stack>
            <Stack direction="row">
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"400px",height:"450px"}}>
                 PRICE RANGE<br/><br/>
                 ₹3,000 - ₹5,000<br/><br/><br/>
                 SPECIAL DIETS<br/><br/>
                 Vegetarian Friendly, Vegan <br/>
                 Options, Gluten Free Options<br/><br/><br/>
                  MEALS<br/><br/>
                  Lunch, Dinner, Brunch, After-<br/>hours
                  Lunch,Dinner, Drinks<br/><br/><br/>
                  JUICES<br/><br/>
                  Mojito,Milkshakes<br/>
                  Rosemilk
                  </Paper>
            </Grid>
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"400px",height:"450px"}}>
                 Ratings and reviews<br/><br/>
                 4.0 <Rating name="size-medium" defaultValue={5} /> 498 reviews<br/><br/>
                 #56 of 8,306 Restaurants in Mumbai<br/><br/>
                 Travellers' Choice 2023<br/><br/><br/><br/><br/><hr/>
                 <br/><br/><br/>
                 RATINGS<br/><br/>
                 Food&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Rating name="size-medium" defaultValue={4} /> <br/>
                 Service&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Rating name="size-medium" defaultValue={4} /> <br/>
                 Atmosphere&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Rating name="size-medium" defaultValue={4} /> 
                 Value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Rating name="size-medium" defaultValue={4} /> 
            </Paper>
            </Grid>
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"400px",height:"450px"}}>
                Location and Contact<br/><br/>
                <img src='https://maps.google.com/maps/api/staticmap?&channel=ta.desktop.restaurant_review&zoom=15&size=347x137&scale=1&client=gme-tripadvisorinc&format=jpg&sensor=false&language=en_IN&center=19.076799,72.851753&maptype=roadmap&&markers=icon:http%3A%2F%2Fc1.tacdn.com%2F%2Fimg2%2Fmaps%2Ficons%2Fcomponent_map_pins_v1%2FR_Pin_Small.png|19.076799,72.851753&signature=QQBXgVpiv0pMD8iZqgptR6Dl-hk='></img><br/>
                <br/><br/>
               
                
Bandra Kurla Complex Vicinity, Off Western<br/>
 Express Highway, Santacruz East,, Mumbai<br/>
  400055 India<br/><br/><br/>
Santacruz East<br/><br/><br/>
+91 22 6676 1673
                  </Paper>
            </Grid>
            </Stack>
            
          </Grid>
     </Container>
    </div>
  )
}

export default Restaurant3
