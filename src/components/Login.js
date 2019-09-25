import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import white_logo from './white_logo.png';
import clsx from 'clsx';


const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: '#512da8',
        },
    },
    paper: {
        marginTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(3),
        backgroundColor: 'white',
        height: '100%',
        width: '15%',

    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        width: 300,
        textDecoration: 'none',
        // backgroundColor: '#7c4dff',
        // color: '#fff'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 300,
    },
    dense: {
        marginTop: 30,
    },
}));

const Login = () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <img src={white_logo} alt="logo-1" />
                </Avatar>

                <Typography color="white" component="h1" variant="h5">
                    Welcome back!
                </Typography>

                <form>


                    {/* <TextField
                        variant="outlined"
                        margin="normal"

                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    /> */}

                    <TextField
                        id="standard-dense"
                        label="username"
                        className={clsx(classes.textField, classes.dense)}
                        margin="dense"
                    />

                    <TextField
                        id="standard-dense"
                        label="password"
                        className={clsx(classes.textField, classes.dense)}
                        margin="dense"
                    />


                    <Link href="/dashboard">
                        <Button
                            fullWidth
                            variant="contained"
                            className={classes.submit}
                        >
                            Login
                    </Button>

                    </Link>

                    <Grid container>
                        {/* <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid> */}
                        <Grid item>
                            <Link href="#" style={{ color: '#fff', marginLeft: 220 }} variant="body2">
                                {"forgot password?"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default Login;