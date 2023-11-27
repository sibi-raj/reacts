import {Container, Grid, Paper, Stack } from '@mui/material';
import React from 'react';
import Rating from '@mui/material/Rating';

const Restaurant5 = () => {
  return (
    <div>
     <Container>
        <h4>Puppys Mumbai</h4><br/>
        <hr/>
        <h2>Puppys</h2><br></br>
        <Rating name="size-medium" defaultValue={4} /> &nbsp;&nbsp;300+people reviews
        &nbsp;&nbsp;| &nbsp;&nbsp;#4 of 8,306 Restaurants in Mumbai&nbsp;&nbsp;|
        &nbsp;&nbsp;&nbsp;&nbsp;₹₹₹₹IndianVegetarian FriendlyVegan Options<br/><br/>
        CTS 215 Andheri Kurla Road Opposite Carnival Cinemas, Andheri East, Courtyard Mumbai International Airport, Mumbai 400059 India<br/>+91 99678 05996&nbsp;&nbsp;&nbsp;&nbsp;Website&nbsp;&nbsp;&nbsp;&nbsp;Menu<br/> Open now: 6:30 PM - 10:00 PM
        <Grid>
            <Grid container spacing={2} padding={15}>

            <Stack direction="row" spacing={0} padding={0}>
              <img src='https://media-cdn.tripadvisor.com/media/photo-s/17/93/f2/36/img-20190512-162228-largejpg.jpg'></img>
              <img src='https://media-cdn.tripadvisor.com/media/photo-s/15/32/cb/03/indian-west-coast-rawas.jpg'></img>
            </Stack>
            <Stack direction="row" spacing={2} padding={1}>
            <img src='https://media-cdn.tripadvisor.com/media/photo-f/15/32/c2/cb/the-private-dining-room.jpg'></img>
            <img src='https://media-cdn.tripadvisor.com/media/photo-f/15/32/c8/d6/purdah-khubhani-tart.jpg'></img>
            <img src='https://media-cdn.tripadvisor.com/media/photo-f/15/32/c5/33/dingri-dolma-button-mushroom.jpg'></img>
            <img src='https://media-cdn.tripadvisor.com/media/photo-f/0b/58/20/6a/the-earth-plate.jpg'></img>
            </Stack>
            </Grid>
            <Stack direction="row">
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"400px",height:"350px"}}>
                 Food and Ambience<br/><br/>
                 Indian, Vegetarian Friendly, Vegan Options, Gluten<br/> Free Options<br/><br/>
                 “The Hyderabadi Dum biryani was great, as was the prawn curry.”<br/><br/>
                 “Achari Jhinga (Pickle and black pepper prawns,<br/>
                  Ummro avatar-e-Ghost Halim) wa...”<br/><br/><hr/>
                  “A bowl of Ummrao’s Aloo Bukhara Kofta Curry was<br/> tantalizes the taste buds.”<br/><br/>
“The second last course was dum biryani which had prawns too.”
                    </Paper>
            </Grid>
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"400px",height:"350px"}}>
                 ABOUT<br/><br/>
                 Puppys is a modern Indian<br/>
                  restaurant with the rich heritage<br/>
                   of the cuisine of the Nawabs of<br/>
                    Awadh, at it's core. Whilst Awadhi<br/>
                     cuisine is, arguably India's only <br/>
                     truly fine kitchen, Ummrao also<br/>
                      draws inspiration from the Royal <br/>
                     kitchens from around the country.
            </Paper>
            </Grid>
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"400px",height:"350px"}}>
                 CUISINES<br/><br/>
                 Indian<br/><br/><br/>
                FEATURES<br/><br/>
                Reservations, Private Dining, <br/>
                Seating, Parking Available,<br/>
                 Validated Parking, Serves<br/>
                  Alcohol, Full Bar, Accepts Credit<br/>
                   Cards, Table Service, Free off-<br/>street parking, Accepts American<br/>
                    Express, Accepts Mastercard, <br/>
                    Accepts Visa, Digital Payments, <br/>
                    Accepts Discover, Beach, Gift<br/>
                     Cards Available
                  </Paper>
            </Grid>
            </Stack>
            <Stack direction="row">
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"400px",height:"450px"}}>
                 PRICE RANGE<br/><br/>
                 ₹1,500 - ₹3,500<br/><br/><br/>
                 SPECIAL DIETS<br/><br/>
                 Vegetarian Friendly, Vegan Options, 
                 <br/>Gluten Free Options<br/><br/><br/>
                  MEALS<br/><br/>
                  Lunch, Dinner<br/><br/><br/>
                  JUICES<br/><br/>
                  Mojito,Milkshakes<br/>
                  Rosemilk
                  </Paper>
            </Grid>
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"400px",height:"450px"}}>
                 Ratings and reviews<br/><br/>
                 3.0 <Rating name="size-medium" defaultValue={4} /> 300+reviews<br/><br/>
                 #4 of 8,306 Restaurants in Mumbai<br/><br/>
                 Travellers' Choice 2023<br/><br/><br/><br/><br/><hr/>
                 <br/><br/><br/>
                 RATINGS<br/><br/>
                 Food&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Rating name="size-medium" defaultValue={5} /> <br/>
                 Service&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Rating name="size-medium" defaultValue={3} /> <br/>
                 Atmosphere&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Rating name="size-medium" defaultValue={3} /> 
                 Value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Rating name="size-medium" defaultValue={4} /> 
            </Paper>
            </Grid>
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"400px",height:"450px"}}>
                Location and Contact<br/><br/>
                <img src='https://maps.google.com/maps/api/staticmap?&channel=ta.desktop.restaurant_review&zoom=15&size=347x137&scale=1&client=gme-tripadvisorinc&format=jpg&sensor=false&language=en_IN&center=19.113707,72.864166&maptype=roadmap&&markers=icon:http%3A%2F%2Fc1.tacdn.com%2F%2Fimg2%2Fmaps%2Ficons%2Fcomponent_map_pins_v1%2FR_Pin_Small.png|19.113707,72.864166&signature=ybk5YT_Uc8Pwd9l_e4kXoj_0kog='></img><br/>
                <br/><br/>
               
                CTS 215 Andheri Kurla Road Opposite Carnival<br/>
                 Cinemas, Andheri East, Courtyard Mumbai <br/>
                 International Airport, Mumbai 400059 India<br/><br/>


                 Western Suburbs<br/>
4.3 km from Juhu Beach<br/><br/>
+91 22 6136 6990
                  </Paper>
            </Grid>
            </Stack>
            
          </Grid>
     </Container>
    </div>
  )
}

export default Restaurant5
