import React, {useState, useEffect} from 'react'

import {Container, Typography, Grid} from '@material-ui/core';
import {CssBaseline, Button, Switch, Box, Hidden} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';


import useStyles from './style'

import { LIGHT } from '../../components/color/LightMode';

import DarkInput from '../../components/forms/DarkInput';
import LightInput from '../../components/forms/LightInput';
import AlertMSG from '../../components/alerts/AlertMSG';

const errormsg = "Error! please contact your administrator"

const NewPWD = ({dark, handleDark}) => {
    const classes = useStyles()

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    const onSubmit = (e) => {
        e.preventDefault()
    }
    const query = new URLSearchParams(window.location.search)
    const ssd = query.get('ssd')

    console.log(ssd)

    useEffect(() => {
        document.title = "GFN - New Account"
    }, [])

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
                        Create a New Password
                    </Typography>

                    <form className={classes.form} noValidate onSubmit={onSubmit}>

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
                                type="password"
                                autoFocus={false}
                            />
                        }

                        {dark ? 
                            <DarkInput 
                                id="repeat"
                                name="repeat"
                                label="Confirm Password"
                                type="password"
                                autoFocus={false}
                            /> :
                            <LightInput 
                                id="repeat"
                                name="repeat"
                                label="Confirm Password"
                                type="password"
                                autoFocus={false}
                            />
                        }
                        {/* <FormControlLabel
                            control={<Checkbox value="remember" style={{color: dark && "white"}}/>}
                            label="Remember me"
                            style={{color: dark && "white"}}
                        /> */}

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            disabled={loading}
                            style={{backgroundColor: loading ? "#333533" : null, color: "white"}}
                        >
                            {loading ? "Registering....." : "Register"}
                        </Button>
                    </form>
                </div>
            </Container>

            <Container maxWidth="sm">
                <Box mt={3}>
                    {error ? <AlertMSG severity="error" msg={errormsg} dark={dark}/> : null}
                </Box>
            </Container>
        </Box>
    )
}

export default NewPWD
