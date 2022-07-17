import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import FlagTwoToneIcon from '@mui/icons-material/FlagTwoTone';
import BadgeTwoToneIcon from '@mui/icons-material/BadgeTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import PaidTwoToneIcon from '@mui/icons-material/PaidTwoTone';
import TravelExploreTwoToneIcon from '@mui/icons-material/TravelExploreTwoTone';
import InterpreterModeTwoToneIcon from '@mui/icons-material/InterpreterModeTwoTone';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

const NeighbourCountry = function(props){
    
    return(
        <Card sx={{ maxWidth: 400, height:'75%', backgroundColor:'#3C415C'}} className={props.cssClass}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="210"
                    image={props.flag}
                    alt={props.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h3" component="div">{props.name} <FlagTwoToneIcon /></Typography>
                    <Typography variant="h6" color="text.primary">Capital : {props.capital} <BadgeTwoToneIcon /></Typography>
                    <Typography variant="body1" color="text.secondary">Region : {props.region} <TravelExploreTwoToneIcon /></Typography>
                    <Typography variant="body1" color="text.secondary">Population : {props.population} <PeopleAltTwoToneIcon /></Typography>
                    <Typography variant="body1" color="text.secondary">Currency : {props.currency} <PaidTwoToneIcon /></Typography>
                    <Typography variant="body1" color="text.secondary">Languages Spoken : {props.languages} <InterpreterModeTwoToneIcon /> </Typography>
                    <Typography variant="body1" color="text.secondary">Neighbours : {props.borders} <AccessibilityNewIcon /></Typography>
                </CardContent>

            </CardActionArea>
        </Card>
      
    )
};

export default NeighbourCountry;