import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createRef, useState } from "react";
import { useAuth } from '../src/contexts/AuthContext';
import { useRouter } from 'next/router';

export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setLoading(true);
    await login(email, password);
    //router.push("/");


    setLoading(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {JSON.stringify(currentUser)}
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={loading}
            onClick={(e) => handleSubmit(e)}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}




// import { Typography } from '@mui/material';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// export default function Home() {
//   return (
//     <>
//       <Box
//         sx={{
//           bgcolor: "#86D5CF",
//           boxShadow: 1,
//           borderRadius: 2,
//           p: 2,
//           minWidth: 300,
//           maxWidth:800,
//           margin: "auto",
//         }}
//       >
//         <Typography align="center" sx={{ fontFamily: 'Comfortaa', fontSize: 42, color: '#09237D'}}>Acesso administrativo</Typography>

//         <form style={{"margin": "30px 50px", display: "flex", justifyContent: "center"}}>
//             <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
//         </form>     
        
//       </Box>
//     </>
//   );
// }