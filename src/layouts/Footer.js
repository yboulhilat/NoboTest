import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/logos/logo_nobo_black.svg';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: '#282c34',
    alignItems: 'center',
    padding: 10,
    bottom : 0,
    position: "absolute",
    borderTopRightRadius : 30,
    flexDirection:"column"
  },
  p: {
    color:'#FFF'
  }
 

}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={logo} alt={'Logo'} className='logo' />
      <p className={classes.p}>Nobo Movies</p>
    </div>
    
  );
}