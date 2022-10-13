import TitleSection from '../src/components/TitleSection';
import Card from '../src/components/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';
import CreatePet from '../src/components/crud-components/CreatePet';

export default function PetList() {
  return (
    <>
      <section className='section'>
        <TitleSection text='Administração dos Gatos'/>
        <CreatePet />
        <Card />   
        
      </section>
      
    </>
  );
}