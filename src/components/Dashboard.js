import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


import ButtonGroup from '@material-ui/core/ButtonGroup';

import AppBarSide from './layout/AppBarSide';
import DrawerSide from './layout/DrawerSide';

import { Link } from 'react-router-dom'


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
    card: {
        // maxWidth: 345,
        height: 140,
        
    },
}));

export default function Dashboard() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(true);

    const handleToggle = () => {
        setOpen(!open);
    };


    return (
        <div className={classes.root}>
            <CssBaseline />

            <AppBarSide title="Dashboard" open={open} handleToggle={handleToggle} />

            {/* Drawer dashboard from listItem.... */}
            <DrawerSide open={open} />

            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>

                    <Grid container spacing={3}>
                        <Grid item sm={5}>

                        <Link style={{textDecoration: 'none', color: 'black'}} to="/my/changephone">
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            FORWARD CALLS TO:
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            (971) 231-5912
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>

                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item sm={5}>
                            <ButtonGroup color="primary" variant="contained" fullWidth aria-label="full width outlined button group">
                                {/* <Link to="/my/createnewlead"> */}
                                <Button>CREATE NEW LEAD</Button>
                                {/* </Link> */}
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item sm={5}>
                            <ButtonGroup color="secondary" fullWidth aria-label="full width outlined button group">
                                <Button>REQUEST A LEAD</Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </Container>
            </main>


        </div>
    );
}

