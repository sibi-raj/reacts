import {Container, Grid, Paper, Stack } from '@mui/material';
import React from 'react';
import Rating from '@mui/material/Rating';
import SendIcon from '@mui/icons-material/Send';
import {Button} from '@mui/material';
import {Link} from 'react-router-dom';

const Restaurant1 = () => {
  return (
    <div>
     <Container>
        <h4>Asia  India Maharashtra  Mumbai  Mumbai Restaurants Mabruk</h4><br/>
        <hr/>
        <h2>Mabruk</h2><br></br>
        <Rating name="size-medium" defaultValue={5} /> &nbsp;&nbsp;700+people review
        &nbsp;&nbsp;| &nbsp;&nbsp;#1 of 8,010 Restaurants &nbsp;&nbsp;|
        &nbsp;&nbsp;&nbsp;&nbsp;Lebanese, Mediterranean in mumbai <br/><br/>Domestic Airport Western Express Highway Hotel Sahara Star, Mumbai 400099 India,&nbsp;&nbsp;&nbsp;&nbsp;+91 86574 11561,&nbsp;&nbsp;&nbsp;&nbsp;Website
 Closed now:  See all hours
        <Grid>
            <Grid container spacing={2} padding={15}>

            <Stack direction="row" spacing={0} padding={0}>
              <img src='https://media-cdn.tripadvisor.com/media/photo-s/0d/27/e7/64/inside-view-of-lagoon.jpg'></img>
              <img src='https://media-cdn.tripadvisor.com/media/photo-s/0d/27/e6/c7/authentic-medeterrian.jpg'></img>
            </Stack>
            <Stack direction="row" padding={2} spacing={2}>
            <img src='https://media-cdn.tripadvisor.com/media/photo-f/0d/27/e6/15/ambience.jpg'></img>
            <img src='https://media-cdn.tripadvisor.com/media/photo-f/0d/70/0f/b7/shwarma-d-jaj-by-our.jpg'></img>
            <img src='https://media-cdn.tripadvisor.com/media/photo-f/0d/27/e5/56/mabruk-medeterrian-restaurant.jpg'></img>
            <img src='https://media-cdn.tripadvisor.com/media/photo-f/0b/55/a9/05/mabruk-the-mediterranean.jpg'></img>
            </Stack>
      
            </Grid>
            <Stack direction="row">
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"400px",height:"450px"}}>
                 Food and ambience<br/><br/>
Lebanese, Mediterranean, Middle Eastern, Vegetarian<br/>
Friendly, Vegan Options<br/><br/>
“The best hummus in town with a world class chef & <br/>
experience”<br/><br/>
“had couscous in mains.”<br/><br/>
“... us he suggested mezze platter and lamb dish it 
<br/>was amazing...a must visit...”<br/><br/>
<hr></hr><br/>
Special Occasion Dining, Romantic, Business meetings<br/><br/>
“Pleasant ambience and great food & overall<br/>
 romantic and amazing vibes.”
                                     </Paper>
            </Grid>
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"380px",height:"450px"}}>
                 ABOUT<br/><br/>
Mabruk - The Mediterranean<br/>restaurant, This Lebanese offing<br/> 
sets the mood with its casual low<br/> 
seating on a wooden deck and a <br/>
spectacular view of the lagoon<br/> area, the pillar less clear-to-the<br/>
   Mediterranean, nine-time award <br/>winner for the "Best Lebanese <br/>Restaurant" by Times Food Guide<br/> offers rich Lebanese culture with<br/> soulful Mediterranean sounds <br/>and mouth-watering cuisine <br/>conjured by Chef Jihad. Chef <br/>Jihad creates a repertoire of<br/> traditional mezzeh's <br/>complimented by carefully <br/>picked soups, main courses and desserts,…
 sky dome as well as the other<br/> restaurants.and subtleties of<br/>
  Mediterranean cuisines with the <br/>
  exotic ingredients of the Middle <br/>
  and Far East
            </Paper>
            </Grid>
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"400px",height:"450px"}}>
                 CUISINES<br/><br/>
                 Lebanese, Mediterranean,<br/> Middle Eastern<br/><br/>
                 FEATURES<br/><br/>
                 Reservations, Parking Available,<br/>
                  Wheelchair Accessible, Full Bar,<br/>
                   Takeout, Seating, Validated<br/>
                    Parking, Valet Parking, Serves <br/>Alcohol, Accepts American<br/>
                     Express, Accepts Mastercard,<br/> Accepts Visa, Free Wifi, Accepts<br/>
                      Credit Cards, Table Service, <br/>Non-smoking restaurants


                  </Paper>
            </Grid>
            </Stack>
            <Stack direction="row">
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"400px",height:"450px"}}>
                 PRICE RANGE<br/><br/>
                 ₹1,100 - ₹2,500<br/><br/><br/>
                 SPECIAL DIETS<br/><br/>
                 Vegetarian Friendly, Vegan<br/>
                  Options, Halal, Gluten Free <br/>
                  Options<br/><br/><br/>
                  MEALS<br/><br/>
                  Dinner, Drinks<br/><br/><br/>
                  JUICES<br/><br/>
                  Mojito,Fresh Juices,Milkshakes<br/>
                  Rosemilk,Jigarthanda
                  </Paper>
            </Grid>
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"380px",height:"450px"}}>
                 Ratings and reviews<br/><br/>
                 5.0 <Rating name="size-medium" defaultValue={5} /> 765 reviews<br/><br/>
                 #1 of 8,306 Restaurants in Mumbai<br/><br/>
                 Travellers' Choice 2023<br/><br/><br/><br/><br/><hr/>
                 <br/><br/><br/>
                 RATINGS<br/><br/>
                 Food&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Rating name="size-medium" defaultValue={5} /> <br/>
                 Service&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Rating name="size-medium" defaultValue={4} /> <br/>
                 Atmosphere&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Rating name="size-medium" defaultValue={4} /> 
                 Value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Rating name="size-medium" defaultValue={4} /> 
            </Paper>
            </Grid>
            <Grid container spacing={4} padding={4}>
                 <Paper sx={{width:"400px",height:"450px"}}>
                Location and Contact<br/><br/>
                <img src='https://maps.google.com/maps/api/staticmap?&channel=ta.desktop.restaurant_review&zoom=15&size=347x137&scale=1&client=gme-tripadvisorinc&format=jpg&sensor=false&language=en_IN&center=19.096565,72.853867&maptype=roadmap&&markers=icon:http%3A%2F%2Fc1.tacdn.com%2F%2Fimg2%2Fmaps%2Ficons%2Fcomponent_map_pins_v1%2FR_Pin_Small.png|19.096565,72.853867&signature=aFYIqLSIUcIPwU1IDTEGc5Wdhu8='></img><br/>
                <br/><br/>

                
Domestic Airport Western Express Highway Hotel<br/> Sahara Star, Mumbai 400099 India<br/><br/><br/>

Vile Parle East<br/>
3.3 km from Juhu Beach<br/><br/>
Contact:9876543210
                  </Paper>
            </Grid>
            </Stack>
            </Grid>
     </Container>
     <Link to='/boo1'>
     <Button variant="contained" endIcon={<SendIcon />}><center>BOOK NOW</center></Button>
     </Link>
     
    </div>
  )
}

export default Restaurant1