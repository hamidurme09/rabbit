import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


import AppBarSide from './layout/AppBarSide'
import DrawerSide from './layout/DrawerSide';




const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    }, 
}));

export default function Layout() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(true);

    const handleToggle = () => {
        setOpen(!open);
    };


    return (
        <div className={classes.root}>
            <CssBaseline />



            <AppBarSide title="Request a Lead" open={open} handleToggle={handleToggle} />



            {/* Drawer dashboard from listItem.... */}
<DrawerSide open={open} />
            




            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <h1>Request a Lead</h1>
                    </Grid>
                </Container>
            </main>


        </div>
    );
}

