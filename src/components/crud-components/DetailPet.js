import * as React from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { storage } from '../../firebase';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {
  ref as refStorage,
  getDownloadURL,
  list
} from "firebase/storage";
import { Grid } from '@mui/material';

export default function DetailPet({ id, pet }) {
    const [open, setOpen] = React.useState(false);
    const [imgUrl, setImgUrl] = useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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

    return (
        <>
    <Button onClick={handleClickOpen} variant="contained" size="small" sx={{backgroundColor: "#EC7E31", fontFamily: "Comfortaa", fontSize: 15, width: 120, textTransform: 'none', borderRadius: "12px"}}>Detalhes</Button>
    <Dialog open={open} onClose={handleClose} fullWidth="md" maxWidth="md">
    <Box sx={{flexGrow:2}}>
        <Grid container direction="row" justifyContent="center" alignItems="flex-start">
            <Grid item xs={5}>
                <img src={imgUrl} style={{width: "380px", height: "100%", objectFit: "cover", position:"absolute"}}/>
            </Grid>
            <Grid item xs>    
                <Grid container alignItems="center" sx={{marginBottom:"0.2px"}}>
                    <Grid>
                        <DialogTitle sx={{color:"#09237D", fontFamily:"Comfortaa", fontSize:"30px"}}>{pet.name}</DialogTitle>
                    </Grid>
                    <Grid sx={{ marginLeft: "auto"}} xs={1}>
                        <IconButton onClick={handleClose}><CloseIcon /></IconButton>
                    </Grid>
                </Grid> 
            <DialogContent>  
                <Grid item xs={6} sx={{display: "inline-block"}}>
                    <Typography sx={{marginLeft:"1px", color:"black", fontSize:"15px", fontFamily:"Comfortaa"}}>Nome:</Typography>
                    <TextField size="small" InputProps={{ readOnly: true,}} margin="dense" id="name" type="text" fullWidth variant="outlined" sx={{margin:"5px 5px 5px 1px", color:"red"}} defaultValue={pet.name}/>
                </Grid>
                <Grid item xs={6} sx={{display: "inline-block", float:"right", fontFamily:"Comfortaa"}}>
                    <Typography sx={{marginLeft:"1px", color:"#black", fontSize:"15px", fontFamily:"Comfortaa"}}>Idade:</Typography>
                    <TextField size="small" InputProps={{ readOnly: true,}} margin="dense" id="age" type="text" fullWidth variant="outlined" sx={{margin:"5px 5px 5px 1px"}} defaultValue={pet.age}/>
                </Grid>
                <Grid item xs={6} sx={{display:"inline-block", marginLeft:"1px", fontFamily:"Comfortaa"}}>
                    <Typography sx={{marginLeft:"1px", color:"#black", fontSize:"15px", fontFamily:"Comfortaa"}}>Sexo:</Typography>
                    <TextField size="small" InputProps={{ readOnly: true,}} margin="dense" id="name" type="text" fullWidth variant="outlined" sx={{margin:"5px 5px 5px 1px"}} defaultValue={pet.gender}/>
                </Grid> 
                <Grid item xs={6} sx={{display:"inline-block", float:"right"}}>
                    <Typography sx={{marginLeft:"1px", color:"#black", fontSize:"15px", fontFamily:"Comfortaa"}}>Castrado?</Typography>
                    <TextField size="small" InputProps={{ readOnly: true,}} margin="dense" id="castrated" type="text" fullWidth variant="outlined" sx={{margin:"5px 5px 5px 1px"}} defaultValue={pet.castrated}/>
                </Grid>     
                <Grid item xs={6} sx={{display:"inline-block"}}>
                    <Typography sx={{marginLeft:"1px", color:"#black", fontSize:"15px", fontFamily:"Comfortaa"}}>Tamanho:</Typography>
                    <TextField size="small" InputProps={{ readOnly: true,}} margin="dense" id="size" type="text" fullWidth variant="outlined" sx={{margin:"5px 5px 5px 1px"}} defaultValue={pet.size}/>
                </Grid>   
                <Grid item xs={6} sx={{display:"inline-block", float:"right"}}>
                    <Typography sx={{marginLeft:"1px", color:"#black", fontSize:"15px", fontFamily:"Comfortaa"}}>Vacinas:</Typography> 
                    <TextField size="small" InputProps={{ readOnly: true,}} margin="dense" id="vaccine" type="text" fullWidth variant="outlined" sx={{margin:"5px 5px 5px 1px"}} defaultValue={pet.vaccine}/>
                </Grid>   
                <Grid item xs> 
                    <Typography sx={{marginLeft:"1px", color:"#black", fontSize:"15px", fontFamily:"Comfortaa"}}>Descrição: </Typography> 
                    <TextField multiline rows={4} InputProps={{ readOnly: true,}}margin="dense" id="desc" type="text" sx={{margin:"5px 5px 5px 1px"}} fullWidth variant="outlined" defaultValue={pet.description} />
                </Grid>   
                
            </DialogContent>
            <DialogActions sx={{justifyContent:"center", alignItems:"flex-start"}}>
                <Button variant="contained" sx={{fontFamily: "Comfortaa", fontSize: 15, textTransform: 'none', backgroundColor: "#09237D", padding: "1% 50px 1% 50px"}}>
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfU5kVmut0bpIO8CXSBYNNsAbIV3xD_Id5M2041SJfavx0m5w/viewform">Adotar</Link>
                </Button>
                <Button variant="contained" sx={{fontFamily: "Comfortaa", fontSize: 15, textTransform: 'none', backgroundColor: "#09237D", padding: "1% 50px 1% 50px"}}>
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeZQNnp7uHCu27DdWsfj4c1Y6VTro8ETGTRopeZrNJBA1aOdw/viewform">Apadrinhar</Link>
                </Button>
            </DialogActions>
            </Grid>
        </Grid>
    </Box>       
    </Dialog>
</>
);
}