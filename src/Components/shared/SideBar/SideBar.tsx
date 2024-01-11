import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router';
import { useAppStore } from '../../../appStore';

const drawerWidth = 240;
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});
const closedMixin = (theme: Theme): CSSObject => ({
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

export default function SideBar() {
  const theme = useTheme();
  const itemsList=[
    {text:"Home",icon:<HomeIcon/>,onClick:()=>navigate('/dashboard')},
    {text:"Users",icon:<PeopleOutlineIcon/>,onClick:()=>navigate('/dashboard/user')},
    {text:"Rooms",icon:<RoomServiceIcon/>,onClick:()=>navigate('/dashboard/room')},
    {text:"Ads",icon:<CalendarMonthIcon/>,onClick:()=>navigate('/dashboard/ads')},
    {text:"Booking",icon:<PeopleOutlineIcon/>,onClick:()=>navigate('/dashboard/book')},
    {text:"ChangePassword",icon:<LockOpenIcon/>,onClick:()=>navigate('/forget-pass')},
    {text:"LogOut",icon:<LogoutIcon/>},]
 const navigate=useNavigate();
 const open=useAppStore((state)=>state.dopen)

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
    <Box height={80}/>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton >
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {itemsList.map((item) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem key={text} onClick={onClick} >
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            )
          })}
        </List>
      </Drawer>
    </Box>
  );
}