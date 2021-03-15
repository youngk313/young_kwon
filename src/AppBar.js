import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';

import Navigation from './routes/route-nav';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'sticky',
    top: 0,
    zIndex: 1,
  },
  bar: {
    backgroundColor: "#17252A"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  social: {
    marginRight: "10px",
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.bar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Young Kwon
          </Typography>
          <Navigation />
          <Link href="https://www.linkedin.com/in/youngkwon313" color="inherit" rel="noopener" target="_blank"> <LinkedInIcon className={classes.social}/></Link>
          <Link href="https://github.com/youngk313/" color="inherit" rel="noopener" target="_blank"> <GitHubIcon className={classes.social}/></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
