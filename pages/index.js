import TitleSection from '../src/components/TitleSection';
import Card from '../src/components/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

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
        if (snap.length >= 6) setPets(snap.slice(0, 5));
        else (setPets(snap));
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
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <Button variant="contained" sx={{backgroundColor: "#EC7E31", fontFamily: "Comfortaa", fontSize: 18, padding: "0.2% 20px 0.2% 20px", textTransform: 'none',  borderRadius: "12px", margin: "20px 0px 80px 0px"}}><Link href={"/gatos"}>Ver mais</Link></Button>
        </Grid>
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
                  <Typography sx={{fontFamily: "Comfortaa", fontSize: 18, padding: "1% 200px 1% 200px"}}>Quero apadrinhar</Typography>
                </Link>
              </Button>
          </Grid>
        </Grid>
        <TitleSection text="Por que adotar?"/>

        <Box sx={{ flexGrow: 2}}>
        <Grid container spacing={15}>
          <Grid item xs={12} md={4}>
            <Typography sx={{ mt: 4, mb: 2, fontSize: 20, color:"#EC7E31", fontWeight:"bold", fontFamily:"Comfortaa"}} component="div">
              O som do ronronar é mágico
            </Typography>
              <List>
                  <ListItem>
                    <ListItemAvatar>
                      <img src='item1.png' widht="100px" height="100px"/>
                    </ListItemAvatar>
                    <Typography fontSize="12" color="#09237D" fontFamily="Comfortaa">O som do ronronar cura, relaxa os músculos e normaliza a pressão.</Typography>
                  </ListItem>
              </List>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{ mt: 4, mb: 2, fontSize: 20, color:"#EC7E31", fontWeight:"bold", fontFamily:"Comfortaa" }} component="div">
              São tão quentinhos...
            </Typography>
              <List>
                  <ListItem>
                    <ListItemAvatar>
                      <img src='item2.png' widht="100px" height="100px"/>
                    </ListItemAvatar>
                    <Typography fontSize="12" color="#09237D" fontFamily="Comfortaa" marginLeft="10px">Os gatos aquecem, eles são literalmente quentinhos. Sua temperatura corporal é de 39 graus celsius!</Typography>
                  </ListItem>
              </List>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{ mt: 4, mb: 2, fontSize: 20, color:"#EC7E31", fontWeight:"bold", fontFamily:"Comfortaa" }} component="div">
              Terapia pra que?
            </Typography>
              <List>
                  <ListItem>
                    <ListItemAvatar>
                      <img src='item3.png' widht="100px" height="100px"/>
                    </ListItemAvatar>
                    <Typography fontSize="12" color="#09237D" fontFamily="Comfortaa">Acariciar um gato tranquiliza e tira o estresse.</Typography>
                  </ListItem>
              </List>
          </Grid>
        </Grid>
    </Box>
      </section>
    </>
  );
}