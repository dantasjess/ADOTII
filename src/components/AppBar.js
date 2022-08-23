import * as React from 'react';
import AppBar from '@mui/material/AppBar';
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
import Link from 'next/link';

const pages = ['Quem somos', 'Adotar', 'Apadrinhar '];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static" sx={{ bgcolor: "#86D5CF", marginBottom: 10}}>
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

            <Grid item padding={2}>
              <Link href={"/"}>
                <Image alt='logo-adotii' src={Logo} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              </Link>
            </Grid>         

            <Grid item sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} justifyContent="flex-end">
              <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: '#09237D', display: 'block' }}
              >
                <Link href={"/quem_somos"}>
                  <Typography sx={{ fontFamily: 'Comfortaa', fontWeight: "bolder",textTransform: 'none', fontSize: 20 }}>Quem somos</Typography>
                </Link>
              </Button>

              <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: '#09237D', display: 'block' }}
              >
                <Typography sx={{ fontFamily: 'Comfortaa', fontWeight: "bolder", textTransform: 'none', fontSize: 20 }}>Adotar</Typography>
              </Button>

              <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: '#09237D', display: 'block' }}
              >
                <Typography sx={{ fontFamily: 'Comfortaa', fontWeight: "bolder", textTransform: 'none', fontSize: 20 }}>Apadrinhar</Typography>
              </Button>
            
            </Grid>

          </Grid>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
