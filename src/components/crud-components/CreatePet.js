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
import { useState } from 'react';
import { FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { database, set, child, ref, push } from '../../firebase';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';

export function SelectSize({ changeSize }) {
  const [size, setSize] = useState('');

  const handleChange = (event) => {
    changeSize(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Porte</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={size}
          label="Porte"
          onChange={handleChange}
        >
          <MenuItem value='small'>Pequeno</MenuItem>
          <MenuItem value='medium'>Médio</MenuItem>
          <MenuItem value='large'>Grande</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export function RadioButtonsGroupGender({ changeGender }) {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Sexo</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        onChange={(e) => changeGender(e.target.value)}
      >
        <FormControlLabel value="female" control={<Radio />} label="Fêmea" />
        <FormControlLabel value="male" control={<Radio />} label="Macho" />
      </RadioGroup>
    </FormControl>
  );
}

export function RadioButtonsGroupCastration({ changeCastrated }) {
    return (
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Castrado?</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          onChange={(e) => changeCastrated(e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Sim" />
          <FormControlLabel value="no" control={<Radio />} label="Não" />
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

    function writePetData(pet) {
        set(push(ref(database, 'pets/')), pet);
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

    const changeSize = (e) => {
        setSize(e.value)
    };

    const changeGender = (e) => {
        setGender(e.value)
    };

    const changeCastrated = (e) => {
        setCastrated(e.value)
    };

    return (
        <>
            <IconButton aria-label="criar" onClick={handleClickOpen}>
                <AddIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Cadastrar Pet</DialogTitle>
                <DialogContent>
                    <DialogContentText>Insira as informações necessárias para o cadastro do pet:</DialogContentText>
                    <TextField onChange={(e) => setName(e.target.value)} margin="dense" id="name" label="Nome" type="text" fullWidth variant="standard" />
                    <RadioButtonsGroupGender changeGender={changeGender} />
                    <TextField onChange={(e) => setAge(e.target.value)} margin="dense" id="age" label="Idade" type="number" fullWidth variant="standard" />
                    <RadioButtonsGroupCastration changeCastrated={changeCastrated} />
                    <SelectSize changeSize={changeSize} />
                    <TextField onChange={(e) => setVaccine(e.target.value)} margin="dense" id="vaccines" label="Vacinas" type="text" fullWidth variant="standard" />
                    <TextField onChange={(e) => setDescription(e.target.value)} multiline rows={4} margin="dense" id="desc" label="Descrição" type="text" fullWidth variant="standard" />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={handleSubmit}>Criar</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}