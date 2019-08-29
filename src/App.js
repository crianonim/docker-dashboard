import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';


function App() {
  return (
    <div className="App">
      <AppBar position="fixed">
        <Toolbar>
          <IconButton></IconButton>
        </Toolbar>
      </AppBar>
      <Button variant="contained" color="primary">Click me</Button>
      <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v4-beta example
        </Typography>
      </Box>
    </Container>
    </div>
  );
}

export default App;
