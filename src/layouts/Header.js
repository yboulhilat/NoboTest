import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import logo from '../assets/logos/logo_nobo.svg';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    appBar : {
        background: '#282c34',
        alignItems:'center',
        padding:10
    }
   
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                    <img src={logo} alt={'Logo'} className='logo'/>
            </AppBar>
        </div>
    );
}