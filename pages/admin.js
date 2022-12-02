import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useAuth } from '../src/contexts/AuthContext';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  input: {
    background: "rgba(255, 255, 255, 0.8)",
    borderRadius: 16
  }
}));

export default function SignIn() {
  const classes = useStyles();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { login, currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setLoading(true);
    await login(email, password);
    router.push("/pet-list");
 
    setLoading(false);
  };

  async function handleLogout(e) {
    e.preventDefault();

    setError("");
    setLoading(true);
    await logout();

    setLoading(false);
  };

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

        <form style={{ marginTop: "5%"}}>
          <div className='div-text-field'>
              <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputLabelProps={{style: {fontFamily: "Comfortaa", fontSize: 14}}}
              sx={{ maxWidth: "593px"}}
              InputProps={{ className: classes.input }}
            />
          </div>
          <div className='div-text-field'>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              InputLabelProps={{style: {fontFamily: "Comfortaa", fontSize: 14}}}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ maxWidth: "593px" }}
              InputProps={{ className: classes.input }}
            />
          </div>

          <div style={{ textAlign: "center", marginTop: 30 }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, maxWidth: 200}}
              disabled={loading}
              onClick={(e) => handleSubmit(e)}
            >
              Entrar
            </Button>
          </div>

          <div style={{ textAlign: "center" }}>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 2, maxWidth: 200}}
                disabled={loading}
                onClick={(e) => handleLogout(e)}
              >
                Sair
              </Button>
            </div>

        </form>  
        
      </Box>
    </>
  );
}
