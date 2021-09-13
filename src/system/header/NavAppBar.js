import React from 'react'

import { AppBar, IconButton, Badge, Toolbar, Typography, Hidden } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';

import { LIGHT } from '../../components/color/LightMode';
import { DARK } from '../../components/color/DarkMode';
import DisplayToggle from '../../components/buttons/DisplayToggle';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appBar: {
        [theme.breakpoints.up('sm')]: {
        //   width: `calc(100% - ${drawerWidth}px)`,
        //   marginLeft: drawerWidth,
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
    action: {
        flexGrow: 1,
    },
    iconBtn: {
        '&:hover': {
            color: "white",
            backgroundColor: "#1c1c21",
            // marginTop: "5px",
        }
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
}))
const NavAppBar = ({handleOpen, title, dark, handleDark}) => {
    const classes = useStyles();

    return (
        <AppBar 
            position="static"
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
                
                <div className={classes.action}/>

               <Hidden smUp implementation="js">
                    <IconButton color="inherit" className={classes.iconBtn}>
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsOutlinedIcon />
                        </Badge>
                    </IconButton>
                    <IconButton onClick={handleDark} className={classes.iconBtn}>
                        <DisplayToggle dark={dark} handleDark={handleDark} />
                    </IconButton>
               </Hidden>
            </Toolbar>
        </AppBar>
    )
}

export default NavAppBar
