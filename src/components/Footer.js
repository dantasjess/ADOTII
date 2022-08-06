import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer() {
  return (
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#86D5CF"
        color="#09237D"
        sx={{ marginTop: 10 }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>

            <Grid item xs={12} sm={3}>
              <Box marginBottom={1}>
                <Typography sx={{ fontFamily: 'Comfortaa', fontWeight: "bolder" }}>ADOÇÃO</Typography>
                
              </Box>
              <Box>
                <Link href="/" color="inherit" sx={{textDecoration: 'none'}}>
                  Quero adotar
                </Link>
              </Box>
            </Grid>


            <Grid item xs={12} sm={3}>
              <Box marginBottom={1}>
                <Typography sx={{ fontFamily: 'Comfortaa', fontWeight: "bolder" }}>APADRINHAMENTO</Typography>
              </Box>
              <Box> 
                <Link href="/" color="inherit" sx={{textDecoration: 'none'}}>
                  Quero apadrinhar
                </Link>
              </Box>
            </Grid>


            <Grid item xs={12} sm={3}>
              <Box marginBottom={1}>
                <Typography sx={{ fontFamily: 'Comfortaa', fontWeight: "bolder" }}>QUEM SOMOS</Typography>
              </Box>
              <Box>
                <Link href="/quem_somos" color="inherit" sx={{textDecoration: 'none'}}>
                  Conheça o coletivo
                </Link>
              </Box>
            </Grid>


            <Grid item xs={12} sm={3}>
              <Box marginBottom={1}>
                <Typography sx={{ fontFamily: 'Comfortaa', fontWeight: "bolder" }}>CONTATO</Typography>
              </Box>
              <Box>
                <Box>

                  <Link href="/" color="inherit" sx={{textDecoration: 'none'}}>
                    <Button startIcon={<InstagramIcon />}>
                      Instagram
                    </Button>
                  </Link>
                </Box>

                <Box>
                  
                <Link href="/" color="inherit" sx={{textDecoration: 'none'}}>
                  <Button startIcon={<WhatsAppIcon />}>
                    Whatsapp
                  </Button>
                </Link>
                </Box>


              </Box>
            </Grid>

          </Grid>

        </Container>
      </Box>
  );
}