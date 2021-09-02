import React from 'react'

import {Container, Typography, Grid, Box,Button, Hidden} from '@material-ui/core';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Boards = ({dark, handleDark, classes, LIGHT}) => {
    return (
        <Container maxWidth="md">
            <Hidden xsDown>
                <Box 
                    bgcolor={dark ? "#242424" : "#e2e2e2"}
                    display="flex"
                    justifyContent="space-between"
                    width="100%"
                    m={4}
                    p={4}
                    borderRadius={10}
                >
                    <Box display="flex" alignItems="center">
                        <Typography 
                            variant="h6" 
                            color="textSecondary" 
                            component="p" 
                            className={classes.title}
                            style={{color: dark ? "#d5d5d5" : LIGHT.textColor}}
                        >
                            GFN Education
                        </Typography>
                    </Box>

                    <Box display="flex" alignItems="center" pr={2}>
                        <Typography 
                            component="div" 
                            style={{color: dark ? "white" : LIGHT.textColor}}
                        >
                            <Grid component="label" container alignItems="center" spacing={1}>
                                {/* <Grid item>Off</Grid> */}
                                <Grid item>
                                    {/* <Switch
                                        checked={dark}
                                        onChange={handleDark}
                                        name="checkedA"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    /> */}

                                    <Button
                                        startIcon={
                                            <DarkModeSwitch 
                                                size={22}
                                                onChange={handleDark}
                                                checked={dark}
                                            />
                                        }
                                        onClick={handleDark}
                                        style={{color: dark && "white"}}
                                        variant='outlined'
                                    >
                                        Display
                                    </Button>
                                </Grid>
                            </Grid>
                        </Typography>
                    </Box>
                </Box>
           </Hidden>

           <Hidden smUp>
                <Box 
                    m={1}
                    p={1}
                    style={{marginBottom: "-30px"}}
                    display="flex"
                    justifyContent="center"
                >
                    <Button
                        startIcon={
                            <DarkModeSwitch 
                                size={22}
                                onChange={handleDark}
                                checked={dark}
                            />
                        }
                        onClick={handleDark}
                        style={{color: dark && "white"}}
                        variant='outlined'
                    >
                        Display
                    </Button>
                    {/* <Grid item style={{paddingTop: "1px", paddingLeft: "10px", color: dark && "white"}}>Display</Grid> */}
                </Box>
           </Hidden>
        </Container>
    )
}

export default Boards
