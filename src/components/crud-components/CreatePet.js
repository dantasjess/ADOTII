import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from 'react';
import { FormControl } from '@mui/material';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { database, set, child, ref, push, storage } from '../../firebase';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import {
  ref as refStorage,
  uploadBytes
} from "firebase/storage";

export function SelectSize({ changeSize, defaultSize }) {
  const [size, setSize] = useState('');

  return (
    <Box sx={{ minWidth: 240 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={defaultSize}
          onChange={(e) => changeSize(e.target.value)}
        >
          <MenuItem value='Pequeno'>Pequeno</MenuItem>
          <MenuItem value='Médio'>Médio</MenuItem>
          <MenuItem value='Grande'>Grande</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export function RadioButtonsGroupGender({ changeGender, gender, defaultGender }) {
  return (
    <Box sx={{minWidth:100}}>
    <FormControl fullWidth sx={{margin:"7px 5px 0.2px 5px"}}>
      <FormLabel sx={{fontSize:"15px", fontFamily:"Comfortaa"}} id="demo-radio-buttons-group-label">Sexo</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        value={gender}
        defaultValue={defaultGender}
        onChange={(e) => { changeGender(e.target.value) }}
      >
        <FormControlLabel value="Fêmea" control={<Radio />} label="Fêmea" />
        <FormControlLabel value="Macho" control={<Radio />} label="Macho" />
      </RadioGroup>
    </FormControl>
    </Box>
  );
}

export function RadioButtonsGroupCastration({ changeCastrated, castrated, defaultCastration }) {
    return (
        <FormControl sx={{margin:"7px 5px 0.2px 5px"}}>
          <FormLabel sx={{fontSize:"15px", fontFamily:"Comfortaa"}} id="demo-radio-buttons-group-label">Castrado?</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={castrated}
            defaultValue={defaultCastration}
            onChange={(e) => changeCastrated(e.target.value)}
          >
            <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
            <FormControlLabel value="Não" control={<Radio />} label="Não" />
          </RadioGroup>
        </FormControl>
    );
  }

export default function CreatePet() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState();
    const [gender, setGender] = useState();
    const [age, setAge] = useState();
    const [castrated, setCastrated] = useState();
    const [size, setSize] = useState();
    const [vaccine, setVaccine] = useState();
    const [description, setDescription] = useState();
    const [imageUpload, setImageUpload] = useState(null);

    const uploadFile = (catID) => {
      if (imageUpload == null) return;
      const imageRef = refStorage(storage, `images/${catID}/${imageUpload.name}`);
      uploadBytes(imageRef, imageUpload);
    };

    function writePetData(pet) {
      let newref = push(ref(database, 'pets/'));
      set(newref, pet).then(uploadFile(newref.key));
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    async function handleSubmit(e) {
        e.preventDefault();
        var pet = {
            name: name,
            gender: gender,
            age: age,
            castrated: castrated,
            size: size,
            vaccine: vaccine,
            description: description
        };
        await writePetData(pet);
        handleClose();
    }

    const changeSize = (value) => {
        setSize(value)
    };

    const changeGender = (value) => {
        setGender(value)
    };

    const changeCastrated = (value) => {
        setCastrated(value)
    };

    return (
    <>
        <Button variant="contained" sx={{backgroundColor: "#09237D", fontFamily: "Comfortaa", fontSize: 18, textTransform: 'none',  borderRadius: "12px", margin: "20px 0px 80px 0px"}} startIcon={<AddIcon />} onClick={handleClickOpen}>
          Adicionar novo
        </Button>
        <Dialog open={open} onClose={handleClose}>
        <Box sx={{flexGrow:2}}>
                <Grid container direction="row" justifyContent="center" alignItems="flex-start">
                    <Grid item xs>
                            <Grid container alignItems="center" sx={{marginBottom:"0.2px"}}>
                                <Grid>
                                  <DialogTitle sx={{color:"#817979", fontFamily:"Comfortaa"}}>Cadastrar Pet</DialogTitle>
                                </Grid>
                                <Grid sx={{ marginLeft: "auto"}} xs={1}>
                                    <IconButton onClick={handleClose}><CloseIcon /></IconButton>
                                </Grid>
                            </Grid> 
                    </Grid>
            <DialogContent>
                <Grid item xs={6} sx={{display: "inline-block"}}>
                <DialogContentText sx={{marginLeft:"1px", color:"#817979", fontSize:"15px", fontFamily:"Comfortaa"}}>Nome:</DialogContentText>
                <TextField onChange={(e) => setName(e.target.value)} margin="dense" id="name" type="text" fullWidth variant="outlined" sx={{margin:"0.2px 5px 0.2px 1px"}} />
                </Grid>
                
                <Grid item xs={6} sx={{display: "inline-block", float:"right", fontFamily:"Comfortaa"}}>
                <DialogContentText sx={{marginLeft:"1px", color:"#817979", fontSize:"15px", fontFamily:"Comfortaa"}}>Idade:</DialogContentText>
                <TextField onChange={(e) => setAge(e.target.value)} margin="dense" id="age" type="number" fullWidth variant="outlined" sx={{margin:"0.2px 5px 0.2px 1px"}}/>
                </Grid>

                <Grid sx={{display:"inline-block", marginLeft:"1px", fontFamily:"Comfortaa"}}>
                <RadioButtonsGroupGender changeGender={changeGender} gender={gender} />
                </Grid>
                <Grid sx={{display:"inline-block",marginLeft:"40%"}}>
                  <RadioButtonsGroupCastration changeCastrated={changeCastrated} castrated={castrated} />
                </Grid>

                <Grid item xs={6} sx={{display:"inline-block"}}>
                  <DialogContentText sx={{marginLeft:"1px", color:"#817979", fontSize:"15px", fontFamily:"Comfortaa"}}>Porte:</DialogContentText>
                  <SelectSize changeSize={changeSize} />
                </Grid>
                <Grid item xs={6} sx={{display:"inline-block", float:"right"}}>
                <DialogContentText sx={{marginLeft:"1px", color:"#817979", fontSize:"15px", fontFamily:"Comfortaa"}}>Vacinas:</DialogContentText>
                <TextField multiline rows={2} onChange={(e) => setVaccine(e.target.value)} margin="dense" id="vaccines" type="text" fullWidth variant="outlined" sx={{margin:"1px 20px 10px 1px"}}/>
                </Grid>

                <Grid item xs>
                <DialogContentText sx={{marginLeft:"1px", marginTop:"10px", color:"#817979", fontSize:"15px", fontFamily:"Comfortaa"}}>Descrição:</DialogContentText>
                <TextField onChange={(e) => setDescription(e.target.value)} multiline rows={4} margin="dense" id="desc" type="text" fullWidth variant="outlined" />
                </Grid>
            </DialogContent>
            
            <input
              type="file"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />

            <DialogActions sx={{paddingRight: 3}}>
                <Button onClick={handleClose} variant="contained" sx={{fontFamily: "Comfortaa", fontSize: 18, textTransform: 'none', backgroundColor: "red"}}>Cancelar</Button>
                <Button onClick={handleSubmit} variant="contained" sx={{fontFamily: "Comfortaa", fontSize: 18, textTransform: 'none', backgroundColor: "#09237D"}}>Criar</Button>
            </DialogActions>
                  </Grid>
                </Box>
              </Dialog>
          </>
      );
}