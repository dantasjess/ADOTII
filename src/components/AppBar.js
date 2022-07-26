import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import Logo from '../../public/logo.png';
import Grid from '@mui/material/Grid';

const pages = ['Quem somos', 'Loja', 'Quero adotar', 'Apadrinhar '];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static" sx={{ bgcolor: "#86D5CF" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >

            <Grid item sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Grid>

            <Grid item>
              <Image src={Logo} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            </Grid>         

            <Grid item sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} justifyContent="flex-end">
              <Button
              key='1'
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: '#09237D', display: 'block' }}
              >
              Quem somos
              </Button>

              <Button
              key='2'
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: '#09237D', display: 'block' }}
              >
              Quero adotar
              </Button>

              <Button
              key='3'
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: '#09237D', display: 'block' }}
              >
              Apadrinhar
              </Button>
            
            </Grid>

          </Grid>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
