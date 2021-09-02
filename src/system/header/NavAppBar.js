import React from 'react'

import { AppBar, IconButton, Paper, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

import { LIGHT } from '../../components/color/LightMode';
import { DARK } from '../../components/color/DarkMode';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appBar: {
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
        },
        borderRadius: 0,
        color: 'black',
        boxShadow: '0px 0px 0px 0px',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
}))
const NavAppBar = ({handleOpen, title, dark}) => {
    const classes = useStyles();

    return (
        <AppBar 
            className={classes.appBar}
            style={{backgroundColor: dark ? DARK.boxColor : LIGHT.navColor, color: dark && "#e9ecef"}}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleOpen}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavAppBar
