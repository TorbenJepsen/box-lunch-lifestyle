import React, { Component } from 'react';
import Header from '../Header/Header';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

function CompletedPage(props) {
  const { classes } = props;

  const handleClick = (pageLink) => () => {
    props.history.push(pageLink);
  }


  return (
    <div>
      <div className='header'>
        <Header />
      </div>
      {/* function for date would go here*/}
      <div className='completedMessage'>
        <h1>Nicely Done!</h1>
      </div>
      <div className='completedImg'>
        {/* <img src='' alt='boxingBoy' /> */}
      </div>
      <div className='encouragementMessage'>
        <h1>Everyday Matters. Keep it up!</h1>
      </div>
      <div className='completedButton'>
        <Button onClick={handleClick('/home')} variant="contained" color="secondary" className={classes.button}>Home</Button>
      </div>
    </div>

  )
}



export default withStyles(styles)(CompletedPage);