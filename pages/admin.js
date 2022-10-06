import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Home() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#86D5CF",
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
          maxWidth:800,
          margin: "auto",
        }}
      >
        <Typography align="center" sx={{ fontFamily: 'Comfortaa', fontSize: 42, color: '#09237D'}}>Acesso administrativo</Typography>

        <form style={{"margin": "30px 50px", display: "flex", justifyContent: "center"}}>
            <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
        </form>     
        
      </Box>
    </>
  );
}