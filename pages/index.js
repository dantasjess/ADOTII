import TitleSection from '../src/components/TitleSection';
import Card from '../src/components/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <>
      <section>
        <TitleSection text='Conheça nossos gatinhos' />
        <Card />
        <br/>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <Button variant="contained" sx={{backgroundColor: "#EC7E31", fontFamily: "Comfortaa", fontSize: 15, padding: "2px 10px 2px 10px", textTransform: 'none'}}>Ver mais</Button>
        </Grid>
        <br/>
        <Grid container direction="row" justifyContent="center" alignItems="center"> 
          <Grid item sx={4}>
            <Button variant="contained" sx={{backgroundColor: "#09237D", textTransform: 'none'}}><Typography sx={{fontFamily: "Comfortaa", fontSize: 15,}}>Quero adotar</Typography></Button>
          </Grid>
          <Grid>
            <Button variant="contained" sx={{backgroundColor: "#09237D", textTransform: 'none'}}><Typography sx={{fontFamily: "Comfortaa", fontSize: 15,}}>Quero apadrinhar</Typography></Button>
          </Grid>
        </Grid>
      </section>
      
    </>
  );
}