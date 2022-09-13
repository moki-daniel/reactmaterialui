import React from 'react';
import './App';
import SideMenu from '../Components/SideMenu';
import { makeStyles } from '@mui/styles';
import Header from '../Components/Header';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@mui/material';

const theme = createMuiTheme ({
  palette: {
    primary:{
      main: '#33396',
      light: '#3c44b126',
    },
  secondary: {
    main: '#f83245',
    light:'#f8324526',
  },
  background:{
    default:'f4f5fd'
  }
  }
})

const useStyles = makeStyles ({
  appMain: {
    paddingLeft: '100px',
    width: '100%',
    backgroundColor: 'white'
  }
})
  
const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      
    <div className={classes.appMain}>
    <Header />
    </div>
    <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
