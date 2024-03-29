import TitleSection from '../src/components/TitleSection';
import Card from '../src/components/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { database, onValue, child, ref } from '../src/firebase';
import { useState, useEffect } from 'react';
import { useAuth } from '../src/contexts/AuthContext';

export default function Home() {
  const { currentUser } = useAuth();
  const [pets, setPets] = useState([]);
  useEffect(() => {
    const petsRef = ref(database, 'pets/');
    onValue(petsRef, (snapshot) => {
        let snap = [];
        snapshot.forEach((child) => {
            var pet = child.val();
            pet.id = child.key;
            snap.push(pet);
        });
        setPets(snap);
    });
  }, []);

  return (
    <>
      <section className='section'>
        <TitleSection text='Conheça nossos gatinhos'/>
        <Grid container direction="row">
          {pets.map((pet) => {
            return (
              <Grid item key={pet.id}>
                <Card name={pet.name} desc={pet.description} id={pet.id} pet={pet} logged={currentUser} />
              </Grid>
            );
          })}
        </Grid>
        <br/>
        <Box sx={{ width: '100%' }}>
            <Grid container direction="row" justifyContent="center" alignItems="center"> 
                <Grid item>
                <Button variant="contained" sx={{backgroundColor: "#09237D", textTransform: 'none', borderRadius: "12px", margin: "0px 50px 40px 0px"}}>
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfU5kVmut0bpIO8CXSBYNNsAbIV3xD_Id5M2041SJfavx0m5w/viewform">
                    <Typography sx={{fontFamily: "Comfortaa", fontSize: 18, padding: "1% 200px 1% 200px"}}>Quero adotar</Typography>
                  </Link>
                </Button>
                </Grid>
                <Grid>
                    <Button variant="contained" sx={{backgroundColor: "#09237D", textTransform: 'none', borderRadius: "12px", margin: "0px 0px 40px 50px"}}>
                      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeZQNnp7uHCu27DdWsfj4c1Y6VTro8ETGTRopeZrNJBA1aOdw/viewform">
                        <Typography sx={{fontFamily: "Comfortaa", fontSize: 15, padding: "1% 200px 1% 200px"}}>Quero apadrinhar</Typography>
                      </Link>
                    </Button>
                </Grid>
            </Grid>
        </Box>
        
      </section>
      
    </>
  );
}