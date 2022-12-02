import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { database, remove, child, ref } from '../../firebase';

export default function DeletePet({ id }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        remove(child(ref(database), 'pets/' + id ));
        setOpen(false);
    };

    return (
        <>
            <Button variant="contained" color="error" onClick={handleClickOpen} startIcon={<DeleteIcon />}>Deletar</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{'DELETAR'}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">Tem certeza que deseja deletar o gato?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={handleDelete} color='error'>Deletar</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}