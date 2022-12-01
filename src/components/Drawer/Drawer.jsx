import React from 'react';
import clsx from 'clsx';
import MUIDrawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import { useStyles } from './styles';

export default function Drawer({ children, content }) {
  const classes = useStyles();
  const open = true

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MUIDrawer
        className={open ? classes.drawer : classes.clossedDrawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
        </div>
        <Divider />
        {children}
      </MUIDrawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {content}
      </main>
    </div>
  );
}
