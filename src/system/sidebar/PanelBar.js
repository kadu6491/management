import React, {useState} from 'react'

import { Badge, Box, Button, Divider, IconButton, Tooltip, Typography, List } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import HomeIcon from '@material-ui/icons/Home';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import DisplayToggle from '../../components/buttons/DisplayToggle';
import ListMenu from '../../components/list/ListMenu';
const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: "pink",
        height: "80%",
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    box1: {
        borderRadius: 10,
        width: drawerWidth,
        whiteSpace: "nowrap",
        overflow: 'hidden',
        display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        flexDirection: "column"
    },
    box1L: {
        backgroundColor: "#eeeeee",
    },
    box1D: {
        backgroundColor: "#353535",
    },
    actionBtn: {
        backgroundColor: "white",
        minWidth: "21px",
        maxWidth: "21px",
        minHeight: "21px",
        maxHeight: "21px",
        marginBottom: "15px",
        // marginTop: "10px",
        borderRadius: 3,
        '&:hover': {
            color: "white",
            backgroundColor: "#1c1c21"
        }
    },
    iconBtn: {
        '&:hover': {
            color: "white",
            backgroundColor: "#1c1c21",
            // marginTop: "5px",
        }
    },
    menuTxt: {
        paddingTop: "10px",
        fontSize: "10px",
        letterSpacing: "1px"
    }
}))

const openStyle = {
    width: drawerWidth,
    transition: 'width 0.5s'
}

const closeStyle = {
    width: 40,
    transition: 'width 0.5s',
}

function ButtonIcon({dark, title, icons, onClick}) {
    const classes = useStyles()
    return (
        <Tooltip title={title} placement="right" arrow>
            <IconButton className={dark && classes.iconBtn} onClick={onClick}>
                {icons}
                {/* <HomeIcon style={{ color: dark && "white"}} fontSize="medium" /> */}
            </IconButton>
        </Tooltip>
    )
}

const PanelBar = ({dark, handleDark}) => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    return (
        <div className={classes.root}>
            <Box 
                ml={4} p={2}
                className={[classes.box1, dark ? classes.box1D : classes.box1L]}
                style={open ? openStyle : closeStyle}
                alignItems={!open && "center"}
            >
                <Box 
                    // bgcolor="pink"
                    display="flex"
                    alignItems="flex-end"
                    justifyContent="flex-end"
                >
                    <Button 
                        className={classes.actionBtn}
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <ArrowBackOutlinedIcon style={{fontSize: "10px"}}/> : <ArrowForwardOutlinedIcon style={{fontSize: "13px"}}/>}
                    </Button>
                </Box>

                <Divider style={{width: "100%", backgroundColor: dark && "#7a7a7a", marginBottom: "6px"}}/>

                <Typography 
                    className={classes.menuTxt} 
                    variant="body2"
                    style={{color: dark && "#eeeeee"}}
                >
                    MENU
                </Typography>

                {open ? 
                    <ListMenu 
                        icon={<HomeIcon style={{ color: dark && "white"}} fontSize="small"/>}
                        text="Home"
                        dark={dark}
                    /> : 
                    <ButtonIcon 
                        title="Home"
                        icons={<HomeIcon style={{ color: dark && "white"}} fontSize="medium" />}
                        dark={dark}
                    />
                }

                {open ? 
                    <ListMenu 
                        icon={<ListAltRoundedIcon style={{ color: dark && "white"}} fontSize="small"/>}
                        text="List Services"
                        dark={dark}
                    /> : 
                    <ButtonIcon 
                        title="list services"
                        icons={<ListAltRoundedIcon style={{ color: dark && "white"}} fontSize="medium" />}
                        dark={dark}
                    />
                }

                {open ? 
                    <ListMenu 
                        icon={<AddCircleOutlinedIcon style={{ color: dark && "white"}} fontSize="small"/>}
                        text="Add Parent"
                        dark={dark}
                    /> : 
                    <ButtonIcon 
                        title="Add Parent"
                        icons={<AddCircleOutlinedIcon style={{ color: dark && "white"}} fontSize="medium" />}
                        dark={dark}
                    />
                }

                <Divider 
                    style={{width: "100%", backgroundColor: dark && "#7a7a7a", marginTop: "6px"}}
                />
                <Typography 
                    className={classes.menuTxt} 
                    variant="body2"
                    style={{color: dark && "#eeeeee", paddingTop: "14px"}}
                >
                    ACTIONS
                </Typography>

                {open ? 
                    <ListMenu 
                        icon={<SettingsOutlinedIcon style={{ color: dark && "white"}} fontSize="small"/>}
                        text="Settings"
                        dark={dark}
                    /> : 
                    <ButtonIcon 
                        title="Settings"
                        icons={<SettingsOutlinedIcon style={{ color: dark && "white"}} fontSize="medium" />}
                        dark={dark}
                    />
                }

                {open ? 
                    <ListMenu 
                        icon={
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsOutlinedIcon style={{ color: dark && "white"}} fontSize="medium" />
                            </Badge>
                        }
                        text="Notifications"
                        dark={dark}
                    /> : 
                    <ButtonIcon 
                        title="Notifications"
                        icons={
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsOutlinedIcon style={{ color: dark && "white"}} fontSize="medium" />
                            </Badge>
                        }
                        dark={dark}
                    />
                }

                {open ? 
                    <ListMenu 
                        icon={
                            <ExitToAppIcon style={{ color: dark && "white"}} fontSize="medium" />
                        }
                        text="Log Out"
                        dark={dark}
                    /> : 
                    <ButtonIcon 
                        title="Log Out"
                        icons={
                            <ExitToAppIcon style={{ color: dark && "white"}} fontSize="medium" />
                        }
                        dark={dark}
                    />
                }

                {open ? 
                    <ListMenu 
                        icon={<DisplayToggle dark={dark} handleDark={handleDark} />}
                        text="Display"
                        dark={dark}
                        handleClick={handleDark}
                    /> : 
                    <ButtonIcon 
                        title="Display"
                        icons={<DisplayToggle dark={dark} handleDark={handleDark} />}
                        dark={dark}
                        onClick={handleDark}
                    />
                }
                {/* <Tooltip title="Display Mode" placement="right" arrow>
                    <DisplayToggle dark={dark} handleDark={handleDark}/>
                </Tooltip> */}
                <br />
            </Box>
        </div>
    )
}

export default PanelBar
