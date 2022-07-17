import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useSelector } from 'react-redux';

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
                    <Typography gutterBottom variant="h3" component="div">{props.name}</Typography>
                    <Typography variant="h6" color="text.primary">Capital : {props.capital}</Typography>
                    <Typography variant="body1" color="text.secondary">Region : {props.region}</Typography>
                    <Typography variant="body1" color="text.secondary">Population : {props.population}</Typography>
                    <Typography variant="body1" color="text.secondary">Currency : {props.currency}</Typography>
                    <Typography variant="body1" color="text.secondary">Languages Spoken : {props.languages} </Typography>
                    <Typography variant="body1" color="text.secondary">Neighbours : {props.borders}</Typography>
                </CardContent>

            </CardActionArea>
        </Card>
      
    )
};

export default NeighbourCountry;