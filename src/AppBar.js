import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
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
    backgroundColor: "#F6F6F6"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  social: {
    marginRight: "10px",
  },
  headers: {
    marginRight: "15px",
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.bar}>
        <Toolbar>
          <Typography variant="h5" className={classes.title} color ="textPrimary">
            <Box fontWeight="fontWeightBold" letterSpacing={0}>
                Young Kwon
            </Box>
          </Typography>
          <Typography  variant="h6" align='center' color ="textPrimary" className={classes.headers}>
            <Link href="#projects" color="textPrimary">Projects</Link>
          </Typography>
          <Link href="https://www.linkedin.com/in/youngkwon313" color="textPrimary" rel="noopener" target="_blank"> <LinkedInIcon className={classes.social}/></Link>
          <Link href="https://github.com/youngk313/" color="textPrimary" rel="noopener" target="_blank"> <GitHubIcon className={classes.social}/></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
