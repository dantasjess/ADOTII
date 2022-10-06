import TitleSection from '../src/components/TitleSection';
import Card from '../src/components/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className='section'>
        <TitleSection text='Conheça nossos gatinhos'/>
        <Card />
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <Button variant="contained" sx={{backgroundColor: "#EC7E31", fontFamily: "Comfortaa", fontSize: 18, padding: "0.2% 20px 0.2% 20px", textTransform: 'none',  borderRadius: "12px", margin: "20px 0px 80px 0px"}}><Link href={"/gatos"}>Ver mais</Link></Button>
        </Grid>
        <Grid container direction="row" justifyContent="center" alignItems="center"> 
          <Grid item>
              <Button variant="contained" sx={{backgroundColor: "#09237D", textTransform: 'none', borderRadius: "12px", margin: "0px 50px 40px 0px"}}><Link href="https://docs.google.com/forms/d/e/1FAIpQLSfU5kVmut0bpIO8CXSBYNNsAbIV3xD_Id5M2041SJfavx0m5w/viewform"><Typography sx={{fontFamily: "Comfortaa", fontSize: 18, padding: "1% 200px 1% 200px"}}>Quero adotar</Typography></Link></Button>
          </Grid>
          <Grid>
              <Button variant="contained" sx={{backgroundColor: "#09237D", textTransform: 'none', borderRadius: "12px", margin: "0px 0px 40px 50px"}}><Typography sx={{fontFamily: "Comfortaa", fontSize: 18, padding: "1% 200px 1% 200px"}}>Quero apadrinhar</Typography></Button>
          </Grid>
        </Grid>
        <TitleSection text="Por que adotar?"/>
      </section>
      
    </>
  );
}