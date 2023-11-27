import React from 'react'
import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
export const Book1 = () => {
  return (
    <>
    <h1>Restaurant Booking Form</h1>
    Personal Information<br/><br/>
Full Name:

[                            ]<br/><br/>
Contact Number:

[                   ]<br/><br/>
Email Address:

[                           ]<br/><br/>
Address:

[]<br/><br/><br/>
Reservation Details<br/><br/>
Reservation Date:

[                                 ]<br/><br/>
Reservation Time:

[                     ]<br/><br/>
Number of Guests:

[                                       ]<br/><br/>
Special Requests:

[                                    ]<br/><br/>
Dining Preferences<br/><br/>
Seating Preference:

[                                     ]<br/><br/>
Occasion:

[                                       ]<br/><br/>
Confirmation Method
Preferred Confirmation Method:
[                        ]<br/><br/>
Additional Information
How did you hear about us?
[                                    ]<br/><br/>
Terms and Conditions
[          ] I have read and agree to the Terms and Conditions.
Submit Your Reservation
<br/><br/>

Thank you for choosing [Delicious Restaurant]. We look forward to creating a memorable dining experience for you!<br/><br/><br/>
<Button variant="contained" endIcon={<SendIcon />}><center>SUBMIT NOW</center></Button>

    </>
  )
}
