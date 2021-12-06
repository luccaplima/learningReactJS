import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { mainNavbarItems } from '../consts/navbarListItems';
import { useParams, useNavigate } from 'react-router';

import './Navbar.css';


const Navbar = () => {
  const drawerWidth = 220;

  const navigate = useNavigate();

  return (
    <>
    <div className="navbar">
    <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#4682B4',
            color: '#DCDCDC',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {mainNavbarItems.map((item, index) => (
            <ListItem 
            button 
            key={item.id}
            {...console.log(item.route)}
            onClick={() => navigate(item.route)}
            >
              <ListItemIcon 
              sx={{ color: '#DCDCDC' }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText 
              primary={item.label} 
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
      </div>
    </>
  );
}

export default Navbar;
