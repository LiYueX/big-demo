import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const AppBarExampleIcon = () => (
  <MuiThemeProvider>
    <RaisedButton label="Home" />
  </MuiThemeProvider>
);

export  {AppBarExampleIcon};
