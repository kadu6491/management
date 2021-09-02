import React, {useState} from 'react'

import {Container, Typography, Box, Button, CssBaseline} from '@material-ui/core';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import useStyles from './style'

import { LIGHT } from '../../components/color/LightMode';

import DarkInput from '../../components/forms/DarkInput';
import LightInput from '../../components/forms/LightInput';
import AlertMSG from '../../components/alerts/AlertMSG';
import DisplayBoard from './DisplayBoard';

import api from '../../api'
import Boards from '../../components/board/Boards';

let errormsg = ""

const Username = ({dark, handleDark}) => {
    const classes = useStyles()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [show, setShow] = useState(false)

    const [sid, setSID] = useState()
    const [lastname, setLastName] = useState()
    const [dob, setDOB] = useState()
    const [user, setUser] = useState()

    const onSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        if(sid === undefined || lastname === "" || dob === "")
        {
            errormsg = "Please fill in the boxes"
            setError(true)
        }
        else {
            api.post('/api/forgot/user/', {sid, lastname, dob}).then(resp => {
                if(resp.data.msg === "success")
                {
                    setUser(resp.data.user)
                    setShow(true)
                    setLoading(false)
                    setError(false)
                }
                else {
                    errormsg = "One of the field is invalid. Contact system admin"
                    setError(true)
                    setLoading(false)
                }
            })
        }
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
                        Forgot Username
                    </Typography>

                    <form 
                        className={classes.form} 
                        noValidate onSubmit={onSubmit}
                        style={{display: show && "none"}}
                    >
                        
                        {dark ? 
                            <DarkInput 
                                id="schooldid"
                                name="schooldid"
                                label="School ID"
                                autoFocus={true}
                                onChange={(e) => setSID(e.target.value)}
                            /> :
                            <LightInput 
                                id="schooldid"
                                name="schooldid"
                                label="School ID"
                                autoFocus={true}
                                onChange={(e) => setSID(e.target.value)}
                            />
                        }

                        {dark ? 
                            <DarkInput 
                                id="lastname"
                                name="lastname"
                                label="Last Name"
                                onChange={(e) => setLastName(e.target.value)}
                            /> :
                            <LightInput 
                                id="lastname"
                                name="lastname"
                                label="Last Name"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        }

                        {dark ? 
                            <DarkInput 
                                id="dob"
                                name="dob"
                                label="Date Of Birth"
                                placeholder="Example: 12/31/1986"
                                onChange={(e) => setDOB(e.target.value)}
                            /> :
                            <LightInput 
                                id="dob"
                                name="dob"
                                label="Date Of Birth"
                                placeholder="Example: 12/31/1986"
                                onChange={(e) => setDOB(e.target.value)}
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
                            onSubmit={onSubmit}
                        >
                            {loading ? "Checking....." : "Next" }
                        </Button>
                    </form>

                    {show && <DisplayBoard dark={dark} msg={`username: ${user}`}/>}
                   <div className={classes.action}>
                        <Button
                            style={{color: dark && "white"}}
                            className={classes.actionBTN}
                            href="/"
                        >
                            { show ? "Login" : "Cancel" }
                        </Button>

                   </div>
                </div>
            </Container>
            <Container maxWidth="sm">
                <Box mt={3} mb={4}>
                    {error ? <AlertMSG severity="error" msg={errormsg} dark={dark}/> : null}
                </Box>
            </Container>
        </Box>
    )
}

export default Username
