import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export default function Footer() {
  return (
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#86D5CF"
        color="#09237D"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>


            <Grid item xs={12} sm={3}>
              <Box borderBottom={1}>ADOÇÃO</Box>
              <Box>
                <Link href="/" color="inherit">
                  Quero adotar
                </Link>
              </Box>
            </Grid>


            <Grid item xs={12} sm={3}>
              <Box borderBottom={1}>APADRINHAMENTO</Box>
              <Box> 
                <Link href="/" color="inherit">
                  Quero apadrinhar
                </Link>
              </Box>
            </Grid>


            <Grid item xs={12} sm={3}>
              <Box borderBottom={1}>QUEM SOMOS</Box>
              <Box>
                <Link href="/" color="inherit">
                  Conheça o coletivo
                </Link>
              </Box>
            </Grid>


            <Grid item xs={12} sm={3}>
              <Box borderBottom={1}>CONTATO</Box>
              <Box>
                <Link href="/" color="inherit">
                  icones....
                </Link>
              </Box>
            </Grid>

          </Grid>

          

        </Container>
      </Box>
  );
}