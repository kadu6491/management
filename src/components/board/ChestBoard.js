import React from 'react'

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Divider, Paper, Typography } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';

const drawerWidth = 185;
const windowWidth = window.innerWidth

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            float: "right",
        },
        // backgroundColor: "yellow",
    },
    main: {
        width: "100%",
        [theme.breakpoints.up('sm')]: {
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: theme.spacing(7)
            // flexShrink: 0,
        },
        marginTop: theme.spacing(5)
    },

    main2: {
        width: "100%",
        [theme.breakpoints.up('sm')]: {
            display: "flex",
            justifyContent: "space-evenly"
            // flexShrink: 0,
        },
    },
    summary: {
        [theme.breakpoints.up('sm')]: {
            width: "50%",
            marginTop: theme.spacing(1)
            // flexShrink: 0,
        },
        marginTop: theme.spacing(1),
    },
    service: {
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(1)
            // flexShrink: 0,
        },
        marginTop: theme.spacing(1),
    },
    paper1: {
        marginTop: theme.spacing(1),
        borderRadius: 6,
        paddingTop: 20,
        [theme.breakpoints.up('sm')]: {
            width: "90%",
            marginTop: theme.spacing(2),
        },
        backgroundColor: "transparent"
    },
    title: {
        letterSpacing: "1px",
        fontSize: "12px",
        [theme.breakpoints.up('sm')]: {
            fontSize: "14px",
        },
        paddingBottom: "20px"
    },
    text: {
        letterSpacing: "0.8px",
        lineHeight: "35px"
    },
    span: {
        float: "right",
        paddingLeft: "12px",
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: "60%",
        textAlign: 'left',
        fontWeight: '500'
        // backgroundColor: "red"
    },
    divider: {
        marginTop: "5px",
        [theme.breakpoints.up('sm')]: {
            marginTop: "8px",
            marginBottom: "20px"
        },
        marginBottom: "15px"
    }
}))

const openStyle = {
    width: `calc(100% - ${330}px)`,
    transition: 'width 0.5s'
}

const closeStyle = {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: 'width 0.5s',
}
const mobileStyle = {
    width: '100%'
}

const ChestBoard = ({open, dark}) => {
    const classes = useStyles()
    const theme = useTheme()

    return (
        <div 
            className={classes.root}
            style={windowWidth > 600 && open ? openStyle : windowWidth < 600 ? mobileStyle : closeStyle}
        >
            <Box 
                className={classes.main} 
                // bgcolor="red"
            >
                <Box 
                    m={2}
                    p={3} 
                    bgcolor={dark ? "#353535" : "#eeeeee"}
                    className={classes.summary}
                    style={{
                        color: dark && "white", border: `1px solid ${dark ? "#696969" : "#d3d3d3"}`,
                    }}
                >
                    <Typography>
                        User Summary
                    </Typography>
                    
                    <Paper 
                            className={classes.paper1}
                            elevation={0}
                        >
                            <Typography 
                                variant="p"
                                style={{color: dark ? "#adb5bd" : "#232323"}}
                                className={classes.title}
                            >
                                Name <span className={classes.span}>Peter Griffin </span>
                            </Typography>
                            <Divider 
                                className={classes.divider}
                                style={{backgroundColor: dark && "#eee"}}
                            />

                            <br />
                            <Typography 
                                variant="p"
                                style={{color: dark ? "#adb5bd" : "#232323"}}
                                className={classes.title}
                            >
                                Username <span className={classes.span}>pgriff5432</span>
                            </Typography>
                            <Divider 
                                className={classes.divider}
                                style={{backgroundColor: dark && "#eee"}}
                            />
                    </Paper>
                    </Box>

                    <Box 
                        m={2}
                        p={3}  
                        bgcolor={dark ? "#353535" : "#eeeeee"}
                        className={classes.summary}
                        style={{
                            color: dark && "white", border: `1px solid ${dark ? "#696969" : "#d3d3d3"}`,
                        }}
                    >
                    <Typography>
                        Account Summary
                    </Typography>
                    
                    <Paper 
                            className={classes.paper1}
                            elevation={0}
                        >
                            <Typography 
                                variant="p"
                                style={{color: dark ? "#e9ecef" : "#232323"}}
                                className={classes.title}
                            >
                                Email <span className={classes.span}>pgriff5432@vec.edu</span>
                            </Typography>
                            <Divider 
                                className={classes.divider}
                                style={{backgroundColor: dark && "#eee"}}
                            />
                    </Paper>
                </Box>
            </Box>

            <Box
                // bgcolor="pink"
                className={classes.main2}
            >
                <Box 
                    m={2}
                    p={3} 
                    bgcolor={dark ? "#353535" : "#eeeeee"}
                    width={windowWidth > 600 ? "20%" : null}
                    className={classes.service}
                    style={{
                        color: dark && "white", border: `1px solid ${dark ? "#696969" : "#d3d3d3"}`,
                    }}
                >
                    <Typography>
                        Role
                    </Typography>

                    <Typography 
                        align="center"
                        // variant="p"
                        style={{color: dark ? "#e9ecef" : "#232323", paddingTop: "25px"}}
                        className={classes.title}
                    >
                        <SchoolIcon />
                        <p>Student</p>
                    </Typography>
                </Box>

                <Box 
                    m={2}
                    p={3} 
                    bgcolor={dark ? "#353535" : "#eeeeee"}
                    width={windowWidth > 600 ? "66%" : null}
                    className={classes.service}
                    style={{
                        color: dark && "white", border: `1px solid ${dark ? "#696969" : "#d3d3d3"}`,
                    }}
                >
                    <Typography>
                        Services
                    </Typography>

                </Box>
            </Box>
        </div>
    )
}

export default ChestBoard
