import {Link} from 'react-router-dom';
import { Button } from '@mui/material';
export default function Navbar()
{
    return (<nav className="nav">
        <Button variant="outlined" size="small" style={{backgroundColor:'white',opacity:'80%',color:'black'}}>
          Home
        </Button>
        <Button variant="outlined" size="small" style={{backgroundColor:'white',opacity:'80%',color:'black'}}>
          About Us
        </Button>
        <Button variant="outlined" size="small" style={{backgroundColor:'white',opacity:'80%',color:'black'}}>
          Conatct
        </Button>
        <Button variant="outlined" size="small" style={{backgroundColor:'white',opacity:'80%',color:'black'}}>
          Feedback
        </Button>
        
        <Link to = '/login'>
            <Button variant="contained"style={{backgroundColor:'black',color:'white'}}>Log In</Button>

        </Link>

    </nav>
    );
}