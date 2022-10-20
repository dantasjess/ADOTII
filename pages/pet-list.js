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
        <TitleSection text='Administração dos Gatos'/>
        <CreatePet />
        {pets.map((pet) => {
          return (
            <Card key={pet.id} name={pet.name} desc={pet.description} id={pet.id} pet={pet} logged={currentUser} />
          );
        })}

        
      </section>
      
    </>
  ) : <Typography>Acesso Negado</Typography>
}