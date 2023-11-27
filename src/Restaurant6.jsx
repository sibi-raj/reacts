import {Container, Grid, Paper, Stack } from '@mui/material';
import React from 'react';
import Rating from '@mui/material/Rating';

const Restaurant6 = () => {
  return (
    <div>
     <Container>
        <h4>Gallery Cafe Mumbai</h4><br/>
        <hr/>
        <h2>Gallery Cafe</h2><br></br>
        <Rating name="size-medium" defaultValue={4} /> &nbsp;&nbsp;500+people review
        &nbsp;&nbsp;| &nbsp;&nbsp;#15 of 8,306 Restaurants in Mumbai&nbsp;&nbsp;|
        &nbsp;&nbsp;&nbsp;&nbsp;₹₹ - ₹₹₹IndianInternationalAsian<br/><br/>
        X-22, MIDC Central Road, Andheri East, Mumbai, Maharashtra, 400 093, India, Mumbai 400093 India&nbsp;&nbsp;&nbsp;&nbsp;+91 22 5005 0130&nbsp;&nbsp;&nbsp;&nbsp;Website&nbsp;&nbsp;&nbsp;&nbsp;Menu<br/>
        Open now: 12:00 AM - 11:59 PM
        <Grid>
            <Grid container spacing={2} padding={15}>

            <Stack direction="row" spacing={1} padding={0}>
              <img src='https://media-cdn.tripadvisor.com/media/photo-s/17/f8/0f/22/gallery-cafe-kitchen.jpg'></img>
              <img src='https://media-cdn.tripadvisor.com/media/photo-s/19/3c/c2/49/interiors-at-k-k.jpg'></img>
            </Stack>
            <Stack direction="row" spacing={2} padding={1}>
            <img src='https://media-cdn.tripadvisor.com/media/photo-f/17/f8/0f/ef/gallery-cafe.jpg'></img>
            <img src='https://media-cdn.tripadvisor.com/media/photo-f/17/f8/11/99/gallery-cafe.jpg'></img>
            <img src='https://media-cdn.tripadvisor.com/media/photo-f/1a/10/12/3d/gallery-cafe-a-chef-s.jpg'></img>
            <img src='https://media-cdn.tripadvisor.com/media/photo-f/1d/7b/01/55/kebabs-kurries.jpg'></img>
            </Stack>
            </Grid>
            <Stack direction="row">
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"400px",height:"380px"}}>
                 Food and Ambience<br/><br/>
                 Indian, Asian, Healthy, International, Vegetarian<br/>
                  Friendly, Vegan Options<br/><br/>
                  “The dessert had a huge spread of yummies such as <br/>
                  blueberry cake, hot chocolat...”<br/><br/>
                  “A special mention to Bunty, Omkar and Abhishake for<br/>
                   their service.”<br/><br/><hr/>
                   “The meat of the wings felt a bit on the overcooked <br/>part though.”<br/><br/>
                   “Chicken Wings Tossed in BBQ sauce - The Best of all.”
                    </Paper>
            </Grid>
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"400px",height:"380px"}}>
                 ABOUT<br/><br/>
                 'Gallery Café' the global-cuisine<br/>
                  all-day dining restaurant offers<br/>
                   distinctive delicacies from<br/>
                    around the world. It also has a <br/>
                    chef's counter where guests can <br/>
                    watch culinary choreography in<br/>
                     motion, as their dishes are <br/>cooked and plated with skill and<br/>
                      care.
            </Paper>
            </Grid>
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"400px",height:"380px"}}>
                 CUISINES<br/><br/>
                 Indian, Asian, Healthy,<br/>
                  International<br/><br/>
                FEATURES<br/><br/>
                Delivery, Reservations, Seating,<br/>
                 Parking Available, Validated <br/>
                 Parking, Valet Parking, Television,<br/>
                  Wheelchair Accessible, Accepts <br/>
                  Credit Cards, Table Service,<br/>
                   Buffet, Digital Payments, Cash<br/>
                    Only, Family style, Non-smoking<br/>
                     restaurants

                  </Paper>
            </Grid>
            </Stack>
            <Stack direction="row">
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"400px",height:"450px"}}>
                 PRICE RANGE<br/><br/>
                 ₹1,200 - ₹1,500<br/><br/><br/>
                 SPECIAL DIETS<br/><br/>
                 Vegetarian Friendly, Vegan 
                 <br/>Options, Gluten Free Options<br/><br/><br/>
                  MEALS<br/><br/>
                  Breakfast, Lunch, Dinner, Brunch<br/><br/><br/>
                  JUICES<br/><br/>
                  Mojito,Milkshakes<br/>
                  Rosemilk
                  </Paper>
            </Grid>
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"400px",height:"450px"}}>
                 Ratings and reviews<br/><br/>
                 4.0 <Rating name="size-medium" defaultValue={4} /> 600+reviews<br/><br/>
                 #15 of 8,306 Restaurants in Mumbai<br/><br/>
                 Travellers' Choice 2023<br/><br/><br/><br/><br/><hr/>
                 <br/><br/><br/>
                 RATINGS<br/><br/>
                 Food&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Rating name="size-medium" defaultValue={5} /> <br/>
                 Service&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Rating name="size-medium" defaultValue={4} /> <br/>
                 Atmosphere&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Rating name="size-medium" defaultValue={4} /> 
                 Value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Rating name="size-medium" defaultValue={3} /> 
            </Paper>
            </Grid>
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"400px",height:"450px"}}>
                Location and Contact<br/><br/>
                <img src='https://maps.google.com/maps/api/staticmap?&channel=ta.desktop.restaurant_review&zoom=15&size=347x137&scale=1&client=gme-tripadvisorinc&format=jpg&sensor=false&language=en_IN&center=19.117508,72.864761&maptype=roadmap&&markers=icon:http%3A%2F%2Fc1.tacdn.com%2F%2Fimg2%2Fmaps%2Ficons%2Fcomponent_map_pins_v1%2FR_Pin_Small.png|19.117508,72.864761&signature=aJk9QGKwvz2hwg8jjj9klvkiWAw='></img><br/>
                <br/><br/>
               
                
                X-22, MIDC Central Road, Andheri East, Mumbai, Maharashtra, 400 093, India, Mumbai
                 400093 <br/>India<br/><br/>
                 
Western Suburbs<br/>
4.5 km from Juhu Beach<br/><br/>
+91 22 5005 0130
                  </Paper>
            </Grid>
            </Stack>
            
          </Grid>
     </Container>
    </div>
  )
}

export default Restaurant6
