import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {useSelector} from 'react-redux';
import { Fragment } from 'react';
import FlagTwoToneIcon from '@mui/icons-material/FlagTwoTone';
import BadgeTwoToneIcon from '@mui/icons-material/BadgeTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import PaidTwoToneIcon from '@mui/icons-material/PaidTwoTone';
import TravelExploreTwoToneIcon from '@mui/icons-material/TravelExploreTwoTone';
import InterpreterModeTwoToneIcon from '@mui/icons-material/InterpreterModeTwoTone';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';


const MainCountry = function(props){
    const country = useSelector(state => state.selectedCountry.countryObj);
    const initialStage = useSelector(state=>state.initialStage.initialValue);
    let flag = "https://flagcdn.com/in.svg";
    if(!initialStage){
        flag = country.flag;
    }
    return(
        <Fragment>
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
                            <Typography gutterBottom variant="h2" component="div">India <FlagTwoToneIcon /></Typography>
                            <Typography variant="h6" color="text.primary">Capital : New Delhi <BadgeTwoToneIcon /> </Typography>
                            <Typography variant="body1" color="text.secondary">Region : Asia <TravelExploreTwoToneIcon /></Typography>
                            <Typography variant="body1" color="text.secondary">Population : 1.3B <PeopleAltTwoToneIcon /></Typography>
                            <Typography variant="body1" color="text.secondary">Currency : "₹" Indian rupee <PaidTwoToneIcon /> </Typography>
                            <Typography variant="body1" color="text.secondary">Languages Spoken : Hindi and English <InterpreterModeTwoToneIcon /></Typography>
                            <Typography variant="body1" color="text.secondary">Neighbours : Nepal, Pakistan, Bangladesh, Bhutan etc <AccessibilityNewIcon /></Typography>
                        </CardContent>
                    }
                    { !initialStage && 
                        <CardContent>
                            <Typography gutterBottom variant="h2" component="div">{country.name}  <FlagTwoToneIcon /></Typography>
                            <Typography variant="h6" color="text.primary">Capital : {country.capital} <BadgeTwoToneIcon /></Typography>
                            <Typography variant="body1" color="text.secondary">Region : {country.region} <TravelExploreTwoToneIcon /></Typography>
                            <Typography variant="body1" color="text.secondary">Population : {country.population} <PeopleAltTwoToneIcon /></Typography>
                            <Typography variant="body1" color="text.secondary">Currency : {country.currency} <PaidTwoToneIcon /></Typography>
                            <Typography variant="body1" color="text.secondary">Languages Spoken : {country.languages} <InterpreterModeTwoToneIcon /></Typography>
                            <Typography variant="body1" color="text.secondary">Neighbours : {country.borders} <AccessibilityNewIcon /></Typography>
                        </CardContent>
                    }
                    
                

            </CardActionArea>
        </Card>
        </Fragment>
    )
}

export default MainCountry;