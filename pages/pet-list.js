import TitleSection from '../src/components/TitleSection';
import Card from '../src/components/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';
import CreatePet from '../src/components/crud-components/CreatePet';
import { database, onValue, child, ref } from '../src/firebase';
import { useState, useEffect } from 'react';
import { useAuth } from '../src/contexts/AuthContext';

export default function PetList() {
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

  return currentUser ? (
    <>
      <section className='section'>

        <Grid container alignItems="center">
          <Grid>
            <TitleSection text='Gatos cadastrados'/>
          </Grid>
          <Grid sx={{ marginLeft: "auto"}}>
            <CreatePet />
          </Grid>
        </Grid> 

        <Grid container direction="row">
          {pets.map((pet) => {
            return (
              <Grid item>
                <Card key={pet.id} name={pet.name} desc={pet.description} id={pet.id} pet={pet} logged={currentUser} />
              </Grid>
            );
          })}
        </Grid>

        
      </section>
      
    </>
  ) : <Typography>Acesso Negado</Typography>
}