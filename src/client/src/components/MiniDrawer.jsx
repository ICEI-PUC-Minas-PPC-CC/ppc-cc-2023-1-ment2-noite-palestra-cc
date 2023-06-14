import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { LogoDefault } from './LogoDefault';
import { Header } from './Header';
import { Footer } from './footer';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Link } from 'react-router-dom';
import { FiHome, MdSettingsAccessibility, IoSettingsOutline, BsChevronBarLeft, MdOutlineGroupAdd, BiDonateHeart, MdEmojiPeople, TbWheelchair } from 'react-icons/all';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer(props) {
  const { children, logo } = props
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const PinkListItemIcon = styled(ListItemIcon)(({ theme }) => ({
    minWidth: 0,
    marginRight: open ? theme.spacing(3) : 'auto',
    justifyContent: 'center',
    color: '#eb2690', 
  }));

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ backgroundColor: "#f4f4f4", color: "#2f2f2f" }} open={open}>
          <Toolbar>
            <IconButton
              style={{ color: '#eb268f' }}
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              <Link to="/">
                <IconButton aria-label="delete" size="small">
                  <LogoDefault />
                </IconButton>
              </Link>
            </Typography>
            <Typography variant="h6" noWrap component="div" sx={{ marginLeft: 'auto' }}>
              <Link to="/login">
                <IconButton aria-label="delete" size="small" style={{ color: '#eb268f' }}>
                  <ExitToAppOutlinedIcon />
                </IconButton>
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose} sx={{ color: '#eb2690'}}>
              {theme.direction === 'rtl' ? <BsChevronBarLeft /> : <BsChevronBarLeft />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List disablePadding>
            <ListItem sx={{ display: 'block' }}>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <PinkListItemIcon sx={{ fontSize: 24 }}>
                    <FiHome />
                  </PinkListItemIcon>
                  <ListItemText primary="Início" sx={{ color: '#eb2690', m1: open ? 0 : -24, display: open ? 'initial' : 'none'}} />
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem sx={{ display: 'block' }}>
              <Link to="/beneficiarios" style={{ textDecoration: 'none' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <PinkListItemIcon sx={{ fontSize: 24 }}>
                    <MdSettingsAccessibility />
                  </PinkListItemIcon>
                  <ListItemText primary="Beneficiados" sx={{ color: '#eb2690', m1: open ? 0 : -24, display: open ? 'initial' : 'none'}} />
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem sx={{ display: 'block' }}>
              <Link to="/donations" style={{ textDecoration: 'none' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <PinkListItemIcon sx={{ fontSize: 24 }}>
                    <BiDonateHeart />
                  </PinkListItemIcon>
                  <ListItemText primary="Doações" sx={{ color: '#eb2690', m1: open ? 0 : -24, display: open ? 'initial' : 'none'}} />
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem sx={{ display: 'block' }}>
              <Link to="/donators" style={{ textDecoration: 'none' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <PinkListItemIcon sx={{ fontSize: 24 }}>
                    <MdEmojiPeople />
                  </PinkListItemIcon>
                  <ListItemText primary="Doadores" sx={{ color: '#eb2690', m1: open ? 0 : -24, display: open ? 'initial' : 'none'}} />
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem sx={{ display: 'block' }}>
              <Link to="/equipamentos" style={{ textDecoration: 'none' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <PinkListItemIcon sx={{ fontSize: 24 }}>
                    <TbWheelchair />
                  </PinkListItemIcon>
                  <ListItemText primary="Equipamentos" sx={{ color: '#eb2690', m1: open ? 0 : -24, display: open ? 'initial' : 'none'}} />
                </ListItemButton>
              </Link>
            </ListItem>
            <Divider />
            <ListItem sx={{ display: 'block' }}>
              <Link to="/users" style={{ textDecoration: 'none' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <PinkListItemIcon sx={{ fontSize: 24 }}>
                    <AssignmentIndIcon />
                  </PinkListItemIcon>
                  <ListItemText primary="Usuários" sx={{ color: '#eb2690', m1: open ? 0 : -24, display: open ? 'initial' : 'none'}} />
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem sx={{ display: 'block' }}>
              <Link to="/config" style={{ textDecoration: 'none' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <PinkListItemIcon sx={{ fontSize: 24 }}>
                    <IoSettingsOutline />
                  </PinkListItemIcon>
                  <ListItemText primary="Configurações" sx={{ color: '#eb2690', m1: open ? 0 : -24, display: open ? 'initial' : 'none'}} />
                </ListItemButton>
              </Link>
            </ListItem>
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Header />
          <div>{children}</div>

        </Box>
      </Box>
      <Footer />
    </>
  );
}