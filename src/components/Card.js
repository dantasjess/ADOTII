import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import Grid from '@mui/material/Grid';
import DeletePet from './crud-components/DeletePet';
import EditPet from './crud-components/EditPet';
import { useState, useEffect } from 'react';
import { storage } from '../firebase';
import {
  ref as refStorage,
  getDownloadURL,
  list
} from "firebase/storage";
import DetailPet from './crud-components/DetailPet';

export default function MediaCard({ name, desc, id, pet, logged }) {
  const [imgUrl, setImgUrl] = useState();
  const endereçoAtual = document.location.pathname;

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
    <Card sx={{ maxWidth: 200, boxShadow: 0, margin: "0 25px", background: "#ECFEFF" }}>
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid item>
            <Avatar sx={{height: 150, width: 150 }} src={imgUrl} />
        </Grid>

        <Grid item sx={{textAlign: "center", paddingTop: "10px"}} >
            <CardContent sx={{padding:"2px 2px 2px 2px"}}>
                <Typography variant="h6" component="div" sx={{ fontFamily: 'Comfortaa', fontWeight: "bolder", color: "#EC7E31"}}>
                {name}
                </Typography>
                {(endereçoAtual != '/pet-list') ? (
                  <Typography variant = "body2" sx={{ fontFamily: 'Comfortaa', color: "#09237D"}}>{desc}</Typography>
                ) : null }
            </CardContent>
        </Grid>
        
        <Grid item>
          <CardActions>
          {/* Se o endereço for "/pet-list", então ele está na página de PETs do Admin.. Portanto, coloque o botão de detalhes. Se não, botão de editar. */}
          {(endereçoAtual == '/pet-list') ? (
            <EditPet id={id} pet={pet} />
          ) : (
            <DetailPet id={id} pet={pet} />
          )}
          </CardActions>
        </Grid>
        </Grid>
    </Card>
  );
}
