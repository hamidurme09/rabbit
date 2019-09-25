import React from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {Link} from 'react-router-dom'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({

    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },

    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },

}));

const AppBarSide = (props) => {
    const classes = useStyles();

    return (
        <div style={{ overflow: 'auto' }} >
            <AppBar position="absolute" className={clsx(classes.appBar, props.open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={props.handleToggle}
                        className={clsx(classes.menuButton)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap>
                        {props.title}
                    </Typography>
                    
                    <Typography component="h1" style={{flexGrow: 1}} variant="h6" color="inherit" noWrap>
                        <Link to="/" style={{textDecoration: 'none', color: '#fff'}}>Login</Link>         
                    </Typography>
                    
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default AppBarSide
