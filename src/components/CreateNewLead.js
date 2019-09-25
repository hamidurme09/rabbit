import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';


import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';

import AppBarSide from './layout/AppBarSide';
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
  textfield: {
    width: 500
  },
  formcontrol: {
    width: 500,
    marginLeft: 30
  },
  addleadbutton: {
    marginTop: 30,
    marginLeft: 400
  },
  zipcode: {
    marginLeft: 30,
    width: 500
  }

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

      <AppBarSide title="Create New Lead" open={open} handleToggle={handleToggle} />
      {/* Drawer dashboard from listItem.... */}
      <DrawerSide open={open} />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>

          <form>
            <div>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <InsertInvitationIcon />
                </Grid>
                <Grid item>
                  <TextField
                    id="input-with-icon-grid"
                    label="MoveDate"
                    className={classes.textfield}
                  />
                </Grid>
              </Grid>
            </div>

            <div>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <PersonOutlineIcon />
                </Grid>
                <Grid item>
                  <TextField
                    id="input-with-icon-grid"
                    label="Name"
                    className={classes.textfield}

                  />
                </Grid>
              </Grid>
            </div>

            <div>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <MailOutlineIcon />
                </Grid>
                <Grid item>
                  <TextField
                    id="input-with-icon-grid"
                    label="Email"
                    className={classes.textfield}

                  />
                </Grid>
              </Grid>
            </div>

            <div>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <PhoneIcon />
                </Grid>
                <Grid item>
                  <TextField
                    id="input-with-icon-grid"
                    label="Phone"
                    className={classes.textfield}

                  />
                </Grid>
              </Grid>
            </div>

            <div>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>

                  <FormControl className={classes.formcontrol}>
                    <InputLabel
                      htmlFor="age-simple"
                    >Move Size</InputLabel>
                    <Select
                      inputProps={{
                        name: 'age',
                        id: 'age-simple',
                      }}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

              </Grid>
            </div>

            <div>
              <Typography variant="h5" style={{ float: "left", marginTop: 40 }}>
                Moving From:
              </Typography>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <TextField
                    id="input-with-icon-grid"
                    className={classes.zipcode}
                    label="Zipcode" />
                </Grid>
              </Grid>
            </div>

            <div>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>

                  <FormControl className={classes.formcontrol}>
                    <InputLabel htmlFor="age-simple">State</InputLabel>
                    <Select
                      inputProps={{
                        name: 'age',
                        id: 'age-simple',
                      }}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </div>

            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <TextField
                  id="input-with-icon-grid"
                  label="City"
                  className={classes.zipcode}
                />
              </Grid>
            </Grid>


            <div>
              <Typography variant="h5" style={{ float: "left", marginTop: 40 }}>
                Moving To:
              </Typography>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <TextField
                    id="input-with-icon-grid"
                    className={classes.zipcode}
                    label="Zipcode" />
                </Grid>
              </Grid>
            </div>

            <div>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>

                  <FormControl className={classes.formcontrol}>
                    <InputLabel htmlFor="age-simple">State</InputLabel>
                    <Select
                      inputProps={{
                        name: 'age',
                        id: 'age-simple',
                      }}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </div>

            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <TextField
                  id="input-with-icon-grid"
                  label="City"
                  className={classes.zipcode}
                />
              </Grid>
            </Grid>


            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <Button variant="contained" color="primary" className={classes.addleadbutton} >
                  Add Lead
                </Button>
              </Grid>
            </Grid>

          </form>
        </Container>
      </main>


    </div>
  );
}

