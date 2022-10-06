import TitleSection from '../src/components/TitleSection';
import Card from '../src/components/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section>
        <Typography sx={{margin: "0 50px"}}><TitleSection text='Conheça nossos gatinhos'/></Typography>
        <Card />
        <br/>
        <Box sx={{ width: '100%' }}>
            <Grid container direction="row" justifyContent="center" alignItems="center"> 
                <Grid item>
                <Button variant="contained" sx={{backgroundColor: "#09237D", textTransform: 'none', borderRadius: "12px", margin: "0px 50px 40px 0px"}}><Link href="https://docs.google.com/forms/d/e/1FAIpQLSfU5kVmut0bpIO8CXSBYNNsAbIV3xD_Id5M2041SJfavx0m5w/viewform"><Typography sx={{fontFamily: "Comfortaa", fontSize: 18, padding: "1% 200px 1% 200px"}}>Quero adotar</Typography></Link></Button>
                </Grid>
                <Grid>
                    <Button variant="contained" sx={{backgroundColor: "#09237D", textTransform: 'none', borderRadius: "12px", margin: "0px 0px 40px 50px"}}><Typography sx={{fontFamily: "Comfortaa", fontSize: 15, padding: "1% 200px 1% 200px"}}>Quero apadrinhar</Typography></Button>
                </Grid>
            </Grid>
        </Box>
        
      </section>
      
    </>
  );
}