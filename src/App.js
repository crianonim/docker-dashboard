import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import MenuIcon from '@material-ui/icons/Menu';
import HelpIcon  from '@material-ui/icons/Help';

const styles = theme => ({
  root: { flexGrow: 1 },
  flex: { flex: 1 },
  menuButton: { marginLeft: -12, marginRight: 20 }
});
export default withStyles(styles)(({classes})=> 
  (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography className={classes.flex}>Docker Dashbord</Typography>
          <Button color="inherit">
            Help&nbsp;
            <HelpIcon />
            </Button>
        </Toolbar>
      </AppBar>
      <Button variant="contained" color="primary">
        Click me
      </Button>
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Docker Dashbord App
          </Typography>
          <p>Welcome to our website.</p>
        </Box>
      </Container>
    </div>
));

