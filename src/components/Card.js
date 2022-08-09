import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 300, boxShadow: 0 }}>
      
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid item>
            <Avatar sx={{height: 200, width: 200 }} src="https://www.petz.com.br/blog/wp-content/uploads/2020/08/cat-sitter-felino-1280x720.jpg" />
        </Grid>

        <Grid item sx={{textAlign: "center"}} >
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Comfortaa', fontWeight: "bolder", color: "#EC7E31"}}>
                Lizard
                </Typography>
                <Typography variant = "body2" sx={{ fontFamily: 'Comfortaa', color: "#09237D"}}>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" size="medium" sx={{backgroundColor: "#EC7E31"}}>Detalhes</Button>
            </CardActions>
        
        </Grid>
      </Grid>
    </Card>
    
  );
}
