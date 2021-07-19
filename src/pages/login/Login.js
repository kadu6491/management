import React, {useState} from 'react'

import {Container, Typography, Grid} from '@material-ui/core';
import {Checkbox, FormControlLabel} from '@material-ui/core';
import {CssBaseline, Button, Switch, Box, Hidden} from '@material-ui/core';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


import useStyles from './style'

import { LIGHT } from '../../components/color/LightMode';

import DarkInput from '../../components/forms/DarkInput';
import LightInput from '../../components/forms/LightInput';

const Login = ({dark, handleDark}) => {
    const classes = useStyles()

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <Box 
            // component="main" 
            // maxWidth="xs"
            display="flex"
            flexDirection="column"
            alignItems="center"
            className={classes.container}
            style={{backgroundColor: dark && "#0a0a0a"}}
        >
            <CssBaseline />

           <Hidden xsDown>
                <Box 
                    bgcolor={dark ? "#242424" : "#e2e2e2"}
                    display="flex"
                    justifyContent="space-between"
                    className={classes.header}
                    width="80%"
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
                                    <Switch
                                        checked={dark}
                                        onChange={handleDark}
                                        name="checkedA"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                </Grid>
                                <Grid item>Dark Mode</Grid>
                            </Grid>
                        </Typography>
                    </Box>
                </Box>
           </Hidden>

            <Container maxWidth="xs">
                <div className={classes.paper}>
                    <Typography 
                        component="h1" 
                        variant="h5"
                        style={{color: dark && "white"}}
                    >
                        Sign in
                    </Typography>

                    <form className={classes.form} noValidate onSubmit={onSubmit}>
                        {dark ? 
                            <DarkInput 
                                id="username"
                                name="Username"
                                label="Username"
                                autoFocus={true}
                            /> :
                            <LightInput 
                                id="username"
                                name="Username"
                                label="Username"
                                autoFocus={true}
                            />
                        }

                        {dark ? 
                            <DarkInput 
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                autoFocus={false}
                            /> :
                            <LightInput 
                                id="password"
                                name="password"
                                label="Password"
                                autoFocus={false}
                            />
                        }


                        <FormControlLabel
                            control={<Checkbox value="remember" style={{color: dark && "white"}}/>}
                            label="Remember me"
                            style={{color: dark && "white"}}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            endIcon={<ArrowForwardIcon fontSize="small" />}
                        >
                            Sign In
                        </Button>
                    </form>
                </div>
            </Container>
        </Box>
    )
}

export default Login
