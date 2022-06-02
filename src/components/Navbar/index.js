import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import rasm from '../Navbar/download.webp'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button';

import './style.css'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import SearchIcon from '@mui/icons-material/Search';

import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


const drawerWidth = 320;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <List>
          <Link sx={{cursor:'pointer'}}>
              <img style={{padding:'50px 0px 50px 0px'}} src={rasm}/>
          </Link>
            <ListItem>
              <ListItemButton className='a'>
               <span className='span'></span> Home
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton className='a'>
              <span className='span'></span> Shop
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton className='a'>
              <span className='span'></span> Product
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton className='a'>
              <span className='span'></span>  Cart
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton className='a'>
              <span className='span'></span>  Checkout
              </ListItemButton>
            </ListItem>

            <Button sx={{width:'100%',borderRadius:'0px',padding:'15px 0px 15px 0px',background:'#FBB710',color:'white',fontWeight:'600',mt:'20px',':hover':{background:'#131212'}}}>%Discount%</Button>
            <Button sx={{width:'100%',borderRadius:'0px',padding:'15px 0px 15px 0px',background:'#131212',color:'white',fontWeight:'600',mt:'20px',':hover':{background:'#FBB710'}}}>New this week</Button>
            
            <Box sx={{mt:'90px'}}>
                <ListItem>
                  <ListItemButton sx={{fontWeight:'600',margin:'-10px 0px -10px 0px'}}>
                   <ShoppingCartIcon/> Cart (0)
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton sx={{fontWeight:'600',margin:'-10px 0px -10px 0px'}}>
                   <StarBorderPurple500Icon/> FAVOURITE
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton sx={{fontWeight:'600',margin:'-10px 0px -10px 0px'}}>
                   <SearchIcon/> SEARCH
                  </ListItemButton>
                </ListItem>
            </Box>
            <Box sx={{display:'flex', alignItems:'center',justifyContent:'space-evenly', mt:'70px'}}>
                <Link sx={{color:'#B5B5B5',':hover':{color:'#FBB710'}}}><PinterestIcon/></Link>
                <Link sx={{color:'#B5B5B5',':hover':{color:'#FBB710'}}}><InstagramIcon/></Link>
                <Link sx={{color:'#B5B5B5',':hover':{color:'#FBB710'}}}><FacebookIcon/></Link>
                <Link sx={{color:'#B5B5B5',':hover':{color:'#FBB710'}}}><TwitterIcon/></Link>
            </Box>
        </List>
      </Box>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          background:'white',
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between',
        }}
      >
        <Link sx={{cursor:'pointer', display: { md: 'none' }, m:'15px 0px 10px 15px'}}>
              <img style={{width:'80px'}} src={rasm}/>
        </Link>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' },color:'#FBB710' }}
          >
            <MenuIcon />
          </IconButton>
      </AppBar>
      
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
