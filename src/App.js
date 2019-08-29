import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import MenuIcon from '@material-ui/icons/Menu';
import HelpIcon  from '@material-ui/icons/Help';

const styles = theme => ({
  root: { flexGrow: 1 },
  flex: { flex: 1 },
  menuButton: { marginLeft: -12, marginRight: 20 }
});

const options = [
  'I just want to say I LOVE this app',
  'Show all notification content',
  'Hide sensitive notification content',
  'Hide all notification content',
];
export default withStyles(styles)(({classes})=> {
  const [anchorEl,setAnchorEl]=React.useState(null);
  const [openDrawer,setOpenDrawer]=React.useState(false);
  return  (
    
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" className={classes.menuButton} onClick={()=>{setOpenDrawer(!openDrawer)}}>
            <MenuIcon />
          </IconButton>
          <Typography className={classes.flex}>Docker Dashbord</Typography>
          <Button color="inherit" onClick={(e=>setAnchorEl(e.currentTarget))}>
            Help&nbsp;
            <HelpIcon />
            </Button>
            <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={()=>{setAnchorEl(null)}}>
              {options.map(op=><MenuItem onClick={()=>{console.log("Chosen: ",op);setAnchorEl(null)}} key={op}>{op}
              </MenuItem>)}
            </Menu>
        </Toolbar>
      </AppBar>
      <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
        <List>
          <ListItem button onClick={()=>{console.log("Pie");setOpenDrawer(false)}}>
            <ListItemText>Pierwszy</ListItemText>
          </ListItem>
        </List>

      </Drawer>
      <Button variant="contained" color="primary">
        Click me
      </Button>
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Docker Dashbord App
          </Typography>
          <p>Welcome to our website.</p>
          <ul>
          {new Array(500).fill(null).map((el,i)=><li key={i}>{i}</li>)}
          </ul>
        </Box>
      </Container>
    </div>
)
}
);

