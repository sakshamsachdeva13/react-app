import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Step from './steps' 
import logo from './logo.svg';
import './App.css';
import steps from './steps';

class App extends Component {
  render() {
   
    const {data = {}} = this.props ; 
    
    const {title = 'Forms' , steps = []} = data 
   
    return (
      <div>

      <AppBar position="static">
       <Toolbar>
       <Typography variant="title" color="inherit">
         {title}
     </Typography>
       </Toolbar>
      </AppBar>
      
      <Step data = {steps} />

      </div>


    );
  }
}

export default App;
