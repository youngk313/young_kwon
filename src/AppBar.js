import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';

import AnchorLink from 'react-anchor-link-smooth-scroll'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'sticky',
    top: 0,
    zIndex: 1,
  },
  avatar: {
    marginRight: "10px",
    width: "35px",
    height: "35px"
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
    color: 'black',
    marginRight: "15px",
    textDecoration: 'none'
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
          <Typography  variant="h6" align='center' color ="textPrimary" >
            <AnchorLink href="#about_section" className={classes.headers}>About Me</AnchorLink>
            <AnchorLink href="#projects" className={classes.headers}>Projects</AnchorLink>
          </Typography>
          <Link href="https://www.linkedin.com/in/youngkwon313" color="textPrimary" rel="noopener" target="_blank"> <LinkedInIcon className={classes.social}/></Link>
          <Link href="https://github.com/youngk313/" color="textPrimary" rel="noopener" target="_blank"> <GitHubIcon className={classes.social}/></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
