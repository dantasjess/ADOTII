import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
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
import { RadioButtonsGroupCastration, RadioButtonsGroupGender, SelectSize } from './CreatePet';


export default function EditPet({ id, pet }) {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = useState(pet.name);
    const [gender, setGender] = useState(pet.gender);
    const [age, setAge] = useState(pet.age);
    const [castrated, setCastrated] = useState(pet.castrated);
    const [size, setSize] = useState(pet.size);
    const [vaccine, setVaccine] = useState(pet.vaccine);
    const [description, setDescription] = useState(pet.description);

    function editName() {
        set(ref(database, 'pets/' + id + '/name'), name);
    }

    function editGender() {
        set(ref(database, 'pets/' + id + '/gender'), gender);
    }

    function editAge() {
        set(ref(database, 'pets/' + id + '/age'), age);
    }

    function editCastrated() {
        set(ref(database, 'pets/' + id + '/castrated'), castrated);
    }

    function editSize() {
        set(ref(database, 'pets/' + id + '/size'), size);
    }

    function editVaccine() {
        set(ref(database, 'pets/' + id + '/vaccine'), vaccine);
    }

    function editDescription() {
        set(ref(database, 'pets/' + id + '/description'), description);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    async function handleSubmit(e) {
        e.preventDefault();

        const promises = [];

        if (name !== pet.name) {
            promises.push(editName());
        }
        if (gender !== pet.gender) {
            promises.push(editGender());
        }
        if (age !== pet.age) {
            promises.push(editAge());
        }
        if (castrated !== pet.castrated) {
            promises.push(editCastrated());
        }
        if (size !== pet.size) {
            promises.push(editSize());
        }
        if (vaccine !== pet.vaccine) {
            promises.push(editVaccine());
        }
        if (description !== pet.description) {
            promises.push(editDescription());
        }

        Promise.all(promises);

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
            <IconButton aria-label="editar" onClick={handleClickOpen}>
                <EditIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Editar Pet</DialogTitle>
                <DialogContent>
                    <DialogContentText>Edite as informações necessárias do pet:</DialogContentText>
                    <TextField onChange={(e) => setName(e.target.value)} margin="dense" id="name" label="Nome" type="text" fullWidth variant="standard" defaultValue={pet.name} />
                    <RadioButtonsGroupGender changeGender={changeGender} gender={gender} defaultGender={pet.gender} />
                    <TextField onChange={(e) => setAge(e.target.value)} margin="dense" id="age" label="Idade" type="number" fullWidth variant="standard" defaultValue={pet.age} />
                    <RadioButtonsGroupCastration changeCastrated={changeCastrated} castrated={castrated} defaultCastration={pet.castrated} />
                    <SelectSize changeSize={changeSize} defaultSize={pet.size} />
                    <TextField onChange={(e) => setVaccine(e.target.value)} margin="dense" id="vaccines" label="Vacinas" type="text" fullWidth variant="standard" defaultValue={pet.vaccine} />
                    <TextField onChange={(e) => setDescription(e.target.value)} multiline rows={4} margin="dense" id="desc" label="Descrição" type="text" fullWidth variant="standard" defaultValue={pet.description} />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={handleSubmit}>Editar</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}