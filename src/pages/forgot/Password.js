import React, {useState} from 'react'

import {Container, Typography, CssBaseline, Button, Box} from '@material-ui/core';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import useStyles from './style'

import { LIGHT } from '../../components/color/LightMode';

import DarkInput from '../../components/forms/DarkInput';
import LightInput from '../../components/forms/LightInput';
import AlertMSG from '../../components/alerts/AlertMSG';
import Boards from '../../components/board/Boards';

const errormsg = "Invalid username or password"

const Password = ({dark, handleDark}) => {
    const classes = useStyles()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        setError(false)
        setLoading(false)
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
                        Forgot Password
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
                                id="schooldid"
                                name="schooldid"
                                label="School ID"
                                autoFocus={true}
                            /> :
                            <LightInput 
                                id="schooldid"
                                name="schooldid"
                                label="School ID"
                                autoFocus={true}
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
                            { loading ? "Checking...." : "Next" }
                        </Button>
                    </form>

                   <div className={classes.action}>
                        <Button
                            style={{color: dark && "white"}}
                            className={classes.actionBTN}
                            href="/"
                        >
                            Cancel
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

export default Password
