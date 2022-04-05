import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled, experimental_sx as sx } from '@mui/system';
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
import { pageRoutes } from '../App';
import { useNavigate, useLocation } from 'react-router-dom';
import { useIntl } from 'react-intl';
import LanguageSwitcher from '../LanguageSwitcher';
import Jagdhaus_Logo_WHITE from '../pages/logo/Jagdhaus_Logo_WHITE.svg';

interface HeaderProps {
  onChangeLanguage: (locale: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onChangeLanguage }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const intl = useIntl();

  const [anchorElNav, setAnchorElNav] =
    React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = (route?: string) => () => {
    setAnchorElNav(null);
    if (route) {
      navigate(route);
    }
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo src={Jagdhaus_Logo_WHITE} alt="logo white" />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="medium"
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
              onClose={handleCloseNavMenu()}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pageRoutes.map(({ id, route }) => (
                <MenuItem
                  selected={route === pathname}
                  key={id}
                  onClick={handleCloseNavMenu(route)}
                >
                  <Typography textAlign="center">
                    {intl.formatMessage({
                      id: `menu-${id}`,
                      defaultMessage: id,
                    })}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <LogoSmall src={Jagdhaus_Logo_WHITE} alt="logo white" />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pageRoutes.map(({ id, route }) => (
              <Button
                color={route === pathname ? 'secondary' : 'primary'}
                key={id}
                onClick={handleCloseNavMenu(route)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {intl.formatMessage({
                  id: `menu-${id}`,
                  defaultMessage: id,
                })}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <LanguageSwitcher onChangeLanguage={onChangeLanguage} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;

export const Logo = styled('img')(
  sx({
    flexGrow: 1,
    maxHeight: '25px',
    objectFit: 'fill',
    margin: 0,
    mr: 2,
    display: { xs: 'none', md: 'flex' },
  }),
);

export const LogoSmall = styled('img')(
  sx({
    flexGrow: 1,
    margin: 0,
    maxHeight: '25px',
    objectFit: 'fill',
    display: { xs: 'flex', md: 'none' },
  }),
);
