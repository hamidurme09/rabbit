import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from '@material-ui/core/Avatar';

import { mainListItems, secondaryListItems } from './listItems';
import { Link } from "react-router-dom";

import CardMedia from '@material-ui/core/CardMedia';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(0),
        },
    },
    avatar: {
        margin: 10,
    },
    media: {
        height: 250,
        paddingTop: '56.25%', // 16:9
    },

}));

const UserProfile = (

    <div>
        <ListItem button>
            <ListItemIcon>
                <Grid container justify="center" alignItems="center">
                    <Avatar alt="User Profile" src="https://cdn.quasar.dev/img/avatar.png" className={useStyles.avatar} />
                </Grid>
            </ListItemIcon>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/my/profile">
                <Typography variant="h6" display="block" gutterBottom>
                    User Name
            </Typography>
            </Link>
        </ListItem>
    </div>
)


const DrawerSide = (props) => {
    const classes = useStyles();

    return (
        <div style={{ overflow: 'auto' }}>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !props.open && classes.drawerPaperClose),
                }}
            // open={props.open}
            >

                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/logo.jpg"
                    title="Paella dish"
                />

                <Divider />
                <List>{UserProfile}</List>
                <Divider />
                <List>{mainListItems}</List>
                <Divider />
                <List>{secondaryListItems}</List>
            </Drawer>
        </div>
    )
}

export default DrawerSide
