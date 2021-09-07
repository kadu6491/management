import React from 'react'

import { Box, CssBaseline, Divider, Drawer, Paper, Typography} from '@material-ui/core'
import {Avatar, Button, IconButton, List, ListItem, ListItemIcon, ListItemText, Badge} from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { useTheme } from '@material-ui/core/styles';

import useStyles from './style'
import DisplayToggle from '../../components/buttons/DisplayToggle'
import ListMenu from '../../components/list/ListMenu';

const SideBarNav = ({dark, handleDark, mobile, handleClose}) => {
    const classes = useStyles()
    const theme = useTheme();

    const drawer = (
        <div>
            {/* <Box p={2}>
                <DisplayToggle dark={dark} handleDark={handleDark} />
            </Box> */}

            <List>
                <ListItem button style={{ color: dark && "#7a7a7a"}}>
                    <ListItemIcon>
                        <HomeIcon style={{ color: dark && "#7a7a7a"}} fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>

                <ListItem button style={{ color: dark && "#7a7a7a"}}>
                    <ListItemIcon>
                        <ListAltRoundedIcon style={{ color: dark && "#7a7a7a"}} fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>

                <ListItem button style={{ color: dark && "#7a7a7a"}}>
                    <ListItemIcon>
                        <AddCircleOutlinedIcon style={{ color: dark && "#7a7a7a"}} fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText primary="Add Parent" />
                </ListItem>

                <ListItem button style={{ color: dark && "#7a7a7a"}}>
                    <ListItemIcon>
                        <SettingsOutlinedIcon style={{ color: dark && "#7a7a7a"}} fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItem>

                <ListItem button style={{ color: dark && "#7a7a7a"}}>
                    <ListItemIcon>
                        <ExitToAppIcon style={{ color: dark && "#7a7a7a"}} fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText primary="Log Out" />
                </ListItem>
                
                <br />
                <Divider style={{backgroundColor: dark && "#7a7a7a"}}/>

                <Box 
                    // bgcolor="red"
                    pt={1}
                    display="flex"
                    justifyContent="space-evenly"
                    alignItems="center"
                >

                    <IconButton>
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsOutlinedIcon style={{ color: dark && "#7a7a7a"}} fontSize="medium" />
                        </Badge>
                    </IconButton>
                    
                    <IconButton>
                        <DisplayToggle dark={dark} handleDark={handleDark} />
                    </IconButton>
                </Box>
            </List>
        </div>
    )

    return (
        <div className={classes.root}>
            <CssBaseline />
            <nav className={classes.drawer} aria-label="mailbox folders">
                    <Drawer
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobile}
                        variant="temporary"
                        classes={{
                            paper: dark ? classes.sidePaperD : classes.drawerPaper,
                        }}
                        onClose={handleClose}
                    >
                        <Box
                            bgcolor={dark ? "#292929" : "#eee"}
                            p={1}
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Avatar 
                                className={classes.small} 
                                component={Paper} 
                                elevation={3}
                                style={{backgroundColor: dark && "#000"}}
                            >
                                PG
                            </Avatar>

                            <Typography variant="body2" className={classes.text} style={{color: dark && "white"}}>
                                Peter Griffin
                            </Typography>

                            <Box
                                // bgcolor="red"
                                
                            >
                                {/* <Button 
                                    variant="outlined" 
                                    className={classes.btn}
                                    size="small"
                                >
                                    Log Out
                                </Button>
                                
                                <IconButton>
                                    <DisplayToggle dark={dark} handleDark={handleDark} />
                                </IconButton> */}
                            </Box>
                        </Box>
                        <Divider />
                        {drawer}
                    </Drawer>
            </nav>
        </div>
    )
}

export default SideBarNav
