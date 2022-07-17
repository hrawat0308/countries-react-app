import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const NeighbourCountry = function(props){
    return(
        
        <Card sx={{ maxWidth: 400, height:'75%', backgroundColor:'#3C415C'}} className={props.cssClass}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="210"
                    image="https://flagcdn.com/np.svg"
                    alt="Nepal"
                />
                <CardContent>
                    <Typography gutterBottom variant="h3" component="div">Nepal</Typography>
                    <Typography variant="h6" color="text.primary">Capital : Kathmandu</Typography>
                    <Typography variant="body1" color="text.secondary">Region : Asia</Typography>
                    <Typography variant="body1" color="text.secondary">Population : 1100000</Typography>
                    <Typography variant="body1" color="text.secondary">Currency : "₹" Nepali Rupee </Typography>
                    <Typography variant="body1" color="text.secondary">Languages Spoken : Hindi, English, Nepali </Typography>
                    <Typography variant="body1" color="text.secondary">Neighbours : Nepal, Bangladesh</Typography>
                </CardContent>

            </CardActionArea>
        </Card>
      
    )
};

export default NeighbourCountry;