import * as React from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { storage } from '../../firebase';
import {
  ref as refStorage,
  getDownloadURL,
  list
} from "firebase/storage";

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
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{pet.name}</DialogTitle>
                <DialogContent>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="auto"
                            image={imgUrl}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                            Gênero: {pet.gender}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                            Idade: {pet.age}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                            Castrado? {pet.castrated}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                            Tamanho: {pet.size}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                            Vacinas: {pet.vaccine}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                            Descrição:  {pet.description}
                            </Typography>

                        </CardContent>
                    </Card>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained"sx={{fontFamily: "Comfortaa", fontSize: 15, textTransform: 'none', backgroundColor: "#EC7E31"}}>Fechar</Button>
                    <Button variant="contained" sx={{fontFamily: "Comfortaa", fontSize: 15, textTransform: 'none', backgroundColor: "#09237D"}}><Link href="https://docs.google.com/forms/d/e/1FAIpQLSfU5kVmut0bpIO8CXSBYNNsAbIV3xD_Id5M2041SJfavx0m5w/viewform">Adotar</Link></Button>
                </DialogActions>
            </Dialog>

            
        </>
    );
}