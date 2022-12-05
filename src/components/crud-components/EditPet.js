import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';
import { database, set, ref, storage} from '../../firebase';
import {
    ref as refStorage,
    getDownloadURL,
    list
  } from "firebase/storage";
import { RadioButtonsGroupCastration, RadioButtonsGroupGender, SelectSize } from './CreatePet';
import DeletePet from './DeletePet';
import { Typography } from '@mui/material';


export default function EditPet({ id, pet }) {
    // Carregar imagem
    const [imgUrl, setImgUrl] = useState();

    useEffect(() => {
      const func = async () => {
          const imgRef = refStorage(storage, `images/${id}/`);
          const firstPage = await list(imgRef, { maxResults: 1 }).then((response) => {
              response.items.forEach((item) => {
                  getDownloadURL(item).then((url) => {
                      setImgUrl(url);
                  });
              });
          });
          
      }
  
      if (imgUrl == undefined) {func()};
    }, []);

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
            <Button onClick={handleClickOpen} variant="contained" size="small" sx={{backgroundColor: "#EC7E31", fontFamily: "Comfortaa", fontSize: 18, width: 120, textTransform: 'none', borderRadius: "12px"}}>Editar</Button>
            <Dialog open={open} onClose={handleClose} fullWidth="md" maxWidth="md" > 
                <Grid container direction="row" justifyContent="center" alignItems="flex-start" sx={{marginBottom:"2px"}}>
                    <Grid item xs={5}>
                        <img src={imgUrl} style={{width: "380px", height: "100%", objectFit: "cover", position:"absolute"}}/>
                    </Grid>
                    <Grid item xs>
                            <Grid container alignItems="center">
                                <Grid>
                                    <DialogTitle sx={{marginBottom:"0.2px"}}>Editar Pet</DialogTitle>
                                </Grid>
                                <Grid sx={{ marginLeft: "auto"}} xs={1}>
                                    <IconButton onClick={handleClose}><CloseIcon /></IconButton>
                                </Grid>
                            </Grid> 
                            <DialogContent>
                                <DialogContentText sx={{marginLeft:"5px", color:"#808080", fontSize:"15px"}}>Edite as informações necessárias do pet:</DialogContentText>
                                

                                <DialogContentText sx={{marginLeft:"5px", color:"#808080", fontSize:"15px"}}>Nome:</DialogContentText>
                                <TextField onChange={(e) => setName(e.target.value)} margin="dense" id="name" type="text" fullWidth variant="outlined" sx={{margin:"0.2px 5px 0.2px 5px"}} defaultValue={pet.name}/>
                                

                                <RadioButtonsGroupGender changeGender={changeGender} gender={gender} defaultGender={pet.gender} sx={{margin:"0.2px 5px 0.2px 5px"}}/>
                                

                                <DialogContentText sx={{marginLeft:"5px", color:"#808080", fontSize:"15px"}}>Idade:</DialogContentText>
                                <TextField onChange={(e) => setAge(e.target.value)} margin="dense" id="age" type="number" fullWidth variant="outlined" defaultValue={pet.age} sx={{margin:"0.2px 5px 0.2px 5px"}} />
                                

                                <RadioButtonsGroupCastration changeCastrated={changeCastrated} castrated={castrated} defaultCastration={pet.castrated} stile={{backgroundColor:"orange"}}/>
                                

                                <SelectSize changeSize={changeSize} defaultSize={pet.size} />
                                

                                <DialogContentText sx={{marginLeft:"5px", color:"#808080", fontSize:"15px"}}>Vacinas:</DialogContentText>
                                <TextField onChange={(e) => setVaccine(e.target.value)} margin="dense" sx={{margin:"1px 5px 10px 5px"}} id="vaccines" type="text" fullWidth variant="outlined" defaultValue={pet.vaccine} />
                                
                                <DialogContentText sx={{marginLeft:"5px", color:"#808080", fontSize:"15px"}}>Descrição:</DialogContentText>
                                <TextField onChange={(e) => setDescription(e.target.value)} multiline rows={4} margin="dense" id="desc" type="text" sx={{margin:"0.2px 5px 0.2px 5px"}} fullWidth variant="outlined" defaultValue={pet.description} />

                            </DialogContent>
                            <DialogActions sx={{paddingRight: 3}}>
                                <Button variant="contained" sx={{fontFamily: "Comfortaa", fontSize: 18, textTransform: 'none', backgroundColor: "#09237D"}} startIcon={<SaveIcon />} onClick={handleSubmit}>Salvar alterações</Button>
                                <DeletePet id={id} />
                            </DialogActions>
                    </Grid>
                </Grid>
            </Dialog>
        </>
    );
}