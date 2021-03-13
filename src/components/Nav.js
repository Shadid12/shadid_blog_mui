import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../styles/nav';
import { Link } from "gatsby-theme-material-ui";
import Container from '@material-ui/core/Container';

export default function DefaultAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="h6" className={classes.title} >
            <Link to="/" className={classes.link}>Shadid's Blog</Link>
          </Typography>
          <Typography>
            <Link to="/about" className={classes.link}>About</Link>
          </Typography>
        </Toolbar>
        </Container>
      </AppBar>
    </div>
    
  );
}