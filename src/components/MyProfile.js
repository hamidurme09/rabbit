import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

import DrawerSide from './layout/DrawerSide';
import AppBarSide from './layout/AppBarSide'


const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

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

export default function MyProfile() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const handleToggle = () => {
      setOpen(!open);
  };


  return (
      <div className={classes.root}>
          <CssBaseline />



          <AppBarSide title="MyProfile" open={open} handleToggle={handleToggle} />



<DrawerSide open={open} />
          



      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* <Grid container justify="center" alignItems="center"> */}
            <Grid item xs={12}>
              <Avatar sizes="200" alt="User Profile" src="https://www.gravatar.com/avatar/a67dfbfd65826941d6b6570de13272f3?s=200&d=mp&r=g" className={useStyles.avatar} />
            </Grid>
          </Grid>

          <div>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField id="input-with-icon-grid" label="first name" />
              </Grid>
            </Grid>
          </div>

          <div>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField id="input-with-icon-grid" label="last name" />
              </Grid>
            </Grid>
          </div>

          <div>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <TextField id="input-with-icon-grid" label="username" />
              </Grid>
            </Grid>
          </div>

          <div>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <Lock />
              </Grid>
              <Grid item>
                <TextField id="input-with-icon-grid" label="password" />
              </Grid>
            </Grid>
          </div>

          <div>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <Lock />
              </Grid>
              <Grid item>
                <TextField id="input-with-icon-grid" label="confirm password" />
              </Grid>
            </Grid>
          </div>

          <Button variant="contained" color="primary" >
            <CloudUploadIcon style={{ marginRight: "10" }} />
            save change
          </Button>

          <ColorButton variant="contained" color="primary" className={classes.margin}>
            <CloudUploadIcon style={{ marginRight: "10" }} className={classes.rightIcon} />
            password change
          </ColorButton>
        </Container>
      </main>


    </div>
  );
}

