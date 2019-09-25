import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import CallIcon from '@material-ui/icons/Call';
import AssignmentIcon from '@material-ui/icons/Assignment';

import {Link} from "react-router-dom";

export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
        <ListItemText primary="Dashboard" />
    </ListItem>

    <ListItem button component={Link} to="/my/createnewlead">
      <ListItemIcon>
        <CallIcon />
      </ListItemIcon>
        <ListItemText primary="Create New Lead" />
    </ListItem>

    <ListItem button component={Link} to="/requestlead">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
        <ListItemText primary="Request a Lead" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>

        <ListItemText primary="Sign Out" />

    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Admin Controls:</ListSubheader>
    
    <ListItem button component={Link} to="/users">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
        <ListItemText primary="Users" />
    </ListItem>

    <ListItem button component={Link} to="/reports">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
        <ListItemText primary="Reports" />
    </ListItem>
  </div>
);
