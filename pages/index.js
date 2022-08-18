import TitleSection from '../src/components/TitleSection';
import Card from '../src/components/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <>
      <section>
        <TitleSection text='Conheça nossos gatinhos' />
        <Card />
        <br/>
        <Button variant="contained" sx={{backgroundColor: "#EC7E31", fontFamily: "Comfortaa", fontSize: 15, padding: "2px 10px 2px 10px", textTransform: 'none'}}>Ver mais</Button>
      </section>
      
    </>
  );
}