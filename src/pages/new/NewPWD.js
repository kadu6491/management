import React, {useState, useEffect} from 'react'

import {Container, Typography, Grid} from '@material-ui/core';
import {CssBaseline, Button, Switch, Box, Hidden} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import PasswordChecklist from "react-password-checklist"

import api from '../../api'


import useStyles from './style'

import { LIGHT } from '../../components/color/LightMode';

import DarkInput from '../../components/forms/DarkInput';
import LightInput from '../../components/forms/LightInput';
import AlertMSG from '../../components/alerts/AlertMSG';
import TimeOut from '../timeout/TimeOut';


let errormsg = ""

const NewPWD = ({dark, handleDark}) => {
    const classes = useStyles()
    const history = useHistory()

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [timeout, setTimeOut] = useState(false)

    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [valid, setValid] = useState(false)
    const [user, setUser] = useState("")


    const query = new URLSearchParams(window.location.search)
    const ssd = query.get('gesd')

    const token = localStorage.getItem('getoken')

    if(token === undefined || token === null || token === "")
    {
        history.push('/activate')
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        if (!valid)
        {
            errormsg="Password did not meet the requirements. Try again"
            setError(true)
            setLoading(false)
        }
        else {
            setError(false)
            if(ssd === "npd1"){
               api.post('/api/newpwd/', {user, password}).then(resp => {
                    setLoading(false)    
                    console.log(resp.data)

                    if(resp.data.msg === 'success')
                    {
                        setLoading(false)
                        localStorage.removeItem("getoken")
                        history.push('/')
                    }
                    else {
                        setLoading(false)
                        errormsg = "There is an issue, please contact your system admin."
                        setError(true)
                    }
               })
            }
            else {
                console.log("Password reset")
            }
        }

    }



    useEffect(() => {
        document.title = "GFN - New Account"

        api.get('/api/userid/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(resp => {
            if(resp.data.msg === "success")
            {
                setUser(resp.data.idx)
            }
            else if (resp.data === 'expired'){
                setTimeOut(true)
                localStorage.removeItem("getoken")
                history.push('/activate')
            }
            else {
                localStorage.removeItem("getoken")
                history.push('/activate')
            }
        })
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
            {timeout && <TimeOut dark={dark}/>}

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
                                onChange={e => setPassword(e.target.value)}
                                autoFocus={false}
                            /> :
                            <LightInput 
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                onChange={e => setPassword(e.target.value)}
                                autoFocus={false}
                            />
                        }

                        {dark ? 
                            <DarkInput 
                                id="repeat"
                                name="repeat"
                                label="Confirm Password"
                                type="password"
                                onChange={e => setConfirm(e.target.value)}
                                autoFocus={false}
                            /> :
                            <LightInput 
                                id="repeat"
                                name="repeat"
                                label="Confirm Password"
                                type="password"
                                onChange={e => setConfirm(e.target.value)}
                                autoFocus={false}
                            />
                        }
                        <br /> <br />
                        <PasswordChecklist 
                            rules={["minLength","specialChar","number","capital","match"]}
                            minLength={9}
                            value={password}
                            valueAgain={confirm}
                            onChange={(isValid) => {setValid(isValid)}}
                            style={{color: dark && "white"}}
                            iconSize={15}
                        />
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
                <Box mt={3} mb={5}>
                    {error ? <AlertMSG severity="error" msg={errormsg} dark={dark}/> : null}
                </Box>
            </Container>
        </Box>
    )
}

export default NewPWD
