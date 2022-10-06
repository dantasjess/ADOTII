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
    <Card sx={{ maxWidth: 200, boxShadow: 0, margin: "0 25px", background: "#ECFEFF" }}>
      
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid item>
            <Avatar sx={{height: 150, width: 150 }} src="https://www.petz.com.br/blog/wp-content/uploads/2020/08/cat-sitter-felino-1280x720.jpg" />
        </Grid>

        <Grid item sx={{textAlign: "center", paddingTop: "10px"}} >
            <CardContent sx={{padding:"2px 2px 2px 2px"}}>
                <Typography variant="h6" component="div" sx={{ fontFamily: 'Comfortaa', fontWeight: "bolder", color: "#EC7E31"}}>
                Jubileu
                </Typography>
                <Typography variant = "body2" sx={{ fontFamily: 'Comfortaa', color: "#09237D"}}>
                Jubileu tem 4 anos, adora caçar e está querendo muito uma família!
                </Typography>
            </CardContent>
        </Grid>
        
        <Grid item>
          <CardActions>
                  <Button variant="contained" size="small" sx={{backgroundColor: "#EC7E31", fontFamily: "Comfortaa", fontSize: 15, padding: "2px 20px 2px 20px", textTransform: 'none', borderRadius: "12px"}}>Detalhes</Button>
          </CardActions>
        </Grid>
        </Grid>
    </Card>
  );
}
