import React, {useState} from 'react'

import {Container, Typography, Box, Button, CssBaseline} from '@material-ui/core';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import useStyles from './style'

import { LIGHT } from '../../components/color/LightMode';

import DarkInput from '../../components/forms/DarkInput';
import LightInput from '../../components/forms/LightInput';
import AlertMSG from '../../components/alerts/AlertMSG';
import Boards from '../../components/board/Boards';

const errormsg = "Invalid username or password"

const Login = ({dark, handleDark}) => {
    const classes = useStyles()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setError(false)
    }

    return (
        <Box 
            // component="main" 
            // maxWidth="xs"
            display="flex"
            flexDirection="column"
            alignItems="center"
            className={classes.container}
            // style={{backgroundColor: dark && "#0a0a0a"}}
        >
            <CssBaseline />

           <Boards dark={dark} handleDark={handleDark} classes={classes} LIGHT={LIGHT}/>

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
                            endIcon={<ArrowForwardIcon fontSize="small" />}
                        >
                            {loading ? "Please wait, logging in...." : "Sign In" }
                        </Button>
                    </form>

                   <div className={classes.action}>
                        <Button
                            style={{color: dark && "white"}}
                            className={classes.actionBTN}
                            href="/activate"
                        >
                            Create Account?
                        </Button>

                        <Button
                            style={{color: dark && "white"}}
                            className={classes.actionBTN}
                            href="/forgotpwd"
                        >
                            Forgot Password?
                        </Button>

                        <Button
                            style={{color: dark && "white"}}
                            className={classes.actionBTN}
                            href="/forgotuser"
                        >
                            Forgot Username?
                        </Button>
                   </div>
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

export default Login
