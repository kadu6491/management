import React, {useState} from 'react'

import clsx from 'clsx';
import {Box, Typography, InputBase, Paper, Switch, FormControlLabel, InputLabel, Input, FormHelperText, FormLabel} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';

import useStyles from './style'

import { LIGHT } from '../../components/color/LightMode';
import { DARK } from '../../components/color/DarkMode';

const Login = () => {
    const [dark, setDark] = useState(false)

    const classes = useStyles()

    return (
        <div 
            className={[clsx(classes.lRoot, {[classes.dRoot]: dark})]}
        >
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                className={[clsx(classes.lRoot, {[classes.dRoot]: dark}), classes.rootBox]}
            >
                <Box
                    className={[clsx(classes.lBox, {[classes.dBox]: dark}), classes.mBox]}
                    m={2}
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                >

                    <Box className={classes.rightBox}>
                        <Box
                            // bgcolor="green"
                            pl={3}
                            pt={2}
                            width="90%"
                        >
                            <FormControlLabel
                                control={
                                    <Switch 
                                        checked={dark}
                                        onChange={() => setDark(!dark)}
                                    />
                                }
                                // label="Light"
                                className={classes.switch}
                                // style={{color: dark ? DARK.secColor : "black"}}
                            />
                        </Box>

                        <Box 
                            // bgcolor="red"
                            className={classes.formBox}
                        >
                            <FormControl className={classes.formContronl}>
                                <Typography 
                                    className={classes.labelText}
                                    style={{color: dark && "#D2D3D6" }}
                                >
                                    User ID
                                </Typography>
                                <Paper 
                                    elevation={0} 
                                    className={classes.paper}
                                    style={{backgroundColor: dark ? "#2C303F" : "whitesmoke"}}
                                >
                                    <InputBase 
                                        className={classes.input}
                                        style={{color: dark && "#D2D3D6"}} 
                                        id="my-input" 
                                        aria-describedby="my-helper-text" 
                                        placeholder="Enter login ID"
                                        autoFocus
                                    />
                                </Paper>
                                <FormHelperText 
                                    id="my-helper-text"
                                    style={{color: dark && "#E6EFFC", padding: '3px 7px',}}
                                >
                                    Enter your school login ID.
                                </FormHelperText>
                            </FormControl>

                            <FormControl className={classes.formContronl}>
                                <Typography 
                                    className={classes.labelText}
                                    style={{color: dark && "#D2D3D6" }}
                                >
                                    Password
                                </Typography>
                                <Paper 
                                    elevation={0} 
                                    className={classes.paper}
                                    style={{backgroundColor: dark && "#2C303F" }}
                                >
                                    <InputBase 
                                        className={classes.input}
                                        style={{color: dark && "#D2D3D6"}} 
                                        id="my-input" 
                                        aria-describedby="my-helper-text" 
                                        placeholder="Enter Password"
                                    />
                                </Paper>
                                <FormHelperText 
                                    id="my-helper-text"
                                    style={{color: dark && "#E6EFFC", padding: '3px 7px',}}
                                    
                                >
                                    Enter your password.
                                </FormHelperText>
                            </FormControl>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default Login
