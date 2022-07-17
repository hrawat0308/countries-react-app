import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {useSelector} from 'react-redux';
import flag from '../images/worldmap.jpg';

const MainCountry = function(props){
    const country = useSelector(state => state.selectedCountry.countryObj);
    console.log(country);
    const initialStage = useSelector(state=>state.initialStage.initialValue);
    if(!initialStage){
        flag = country.flag;
    }
    return(
         
        <Card sx={{ maxWidth: 400, height: '90%', backgroundColor: '#1D2D50' }} className={props.cssClass}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="210"
                    image={flag}
                    alt={country.name}
                />
                
                    {initialStage && 
                        <CardContent>
                            <Typography gutterBottom variant="h2" component="div">Country Name</Typography>
                            <Typography variant="h6" color="text.primary">Capital : ......</Typography>
                            <Typography variant="body1" color="text.secondary">Region : ......</Typography>
                            <Typography variant="body1" color="text.secondary">Population : ......</Typography>
                            <Typography variant="body1" color="text.secondary">Currency : ......</Typography>
                            <Typography variant="body1" color="text.secondary">Languages Spoken : ......</Typography>
                            <Typography variant="body1" color="text.secondary">Neighbours : ......</Typography>
                        </CardContent>
                    }
                    { !initialStage && 
                        <CardContent>
                            <Typography gutterBottom variant="h2" component="div">{country.name}</Typography>
                            <Typography variant="h6" color="text.primary">Capital : {country.capital}</Typography>
                            <Typography variant="body1" color="text.secondary">Region : {country.region}</Typography>
                            <Typography variant="body1" color="text.secondary">Population : {country.population}</Typography>
                            <Typography variant="body1" color="text.secondary">Currency : {country.currency}</Typography>
                            <Typography variant="body1" color="text.secondary">Languages Spoken : {country.languages} </Typography>
                            <Typography variant="body1" color="text.secondary">Neighbours : {country.borders}</Typography>
                        </CardContent>
                    }
                    
                

            </CardActionArea>
        </Card>
       
    )
}

export default MainCountry;