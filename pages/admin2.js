import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';

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
          maxWidth: 800,
          height: 523,
          margin: "auto",
          marginTop: "200px",
        }}
      >
        <Typography align="center" sx={{ fontFamily: 'Comfortaa', fontSize: 42, color: '#193987', marginTop: "5%"}}>Acesso</Typography>

        <form style={{ marginTop: "5%" }}>
            <div className='div-text-field'>
              <TextField className='login-text-field' fullWidth id="outlined-basic" label="Login" variant="outlined"
                    InputLabelProps={{style: {fontFamily: "Comfortaa", fontSize: 14}}}
                    sx={{ maxWidth: "593px" }}
              />
            </div>
            <div className='div-text-field'>
              <TextField className='login-text-field' fullWidth id="outlined-basic" label="Senha" variant="outlined" 
                    InputLabelProps={{style: {fontFamily: "Comfortaa", fontSize: 14}}}
                    sx={{ maxWidth: "593px" }}
              />
            </div>
        </form>  
        
      </Box>
    </>
  );
}