import React, {useState, useEffect} from 'react'

import {Container, Typography, Grid} from '@material-ui/core';
import {CssBaseline, Button, Switch, Box, Hidden} from '@material-ui/core';


import useStyles from './style'

import { LIGHT } from '../../components/color/LightMode';

import DarkInput from '../../components/forms/DarkInput';
import LightInput from '../../components/forms/LightInput';
import AlertMSG from '../../components/alerts/AlertMSG';

import api from '../../api'
import { useHistory } from 'react-router-dom';

const errormsg = "Error! please contact your administrator"

const Register = ({dark, handleDark}) => {
    const classes = useStyles()
    const history = useHistory()

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const [id, setID] = useState()
    const [firstname, setFirstName] = useState()
    const [lastname, setLastName] = useState()
    const [dob, setDOB] = useState()

    const handleID = (e) => {
        setID(e.target.value)
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleDOB = (e) => {
        setDOB(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        api.post('/api/register/', {id, firstname, lastname, dob}).then(resp => {
            setLoading(false)
            // console.log(resp.data)
            if(resp.data.msg === 'success'){
                localStorage.setItem('getoken', resp.data.access_token)
                history.push('/activate/newpwd?gesd=npd1')
            }
            else {
                setError(true)
                setLoading(false)
            }
        })
    }
    // const query = new URLSearchParams(window.location.search)
    // const ssd = query.get('ssd')

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
            
          <Hidden smUp>
            <Container maxWidth="sm" style={{marginBottom: "-21px"}}>
                <Box mt={3}>
                    {error ? <AlertMSG severity="error" msg={errormsg} dark={dark}/> : null}
                </Box>
            </Container>
          </Hidden>

            <Container maxWidth="xs">
                <div className={classes.paper}>
                    <Typography 
                        component="h1" 
                        variant="h5"
                        style={{color: dark && "white"}}
                    >
                        Account Creation
                    </Typography>

                    <form className={classes.form} noValidate onSubmit={onSubmit}>
                        {dark ? 
                            <DarkInput 
                                id="schoolid"
                                name="schoolid"
                                label="School ID"
                                onChange={handleID}
                                autoFocus={true}
                            /> :
                            <LightInput 
                                id="schoolid"
                                name="schoolid"
                                label="School ID"
                                onChange={handleID}
                                autoFocus={true}
                            />
                        }

                        {dark ? 
                            <DarkInput 
                                id="firstname"
                                name="firstname"
                                label="First Name"
                                onChange={handleFirstName}
                            /> :
                            <LightInput 
                                id="firstname"
                                name="firstname"
                                label="First Name"
                                onChange={handleFirstName}
                            />
                        }

                        {dark ? 
                            <DarkInput 
                                id="lastname"
                                name="lastname"
                                label="Last Name"
                                onChange={handleLastName}
                            /> :
                            <LightInput 
                                id="lastname"
                                name="lastname"
                                label="Last Name"
                                onChange={handleLastName}
                            />
                        }

                        {dark ? 
                            <DarkInput 
                                id="dob"
                                name="dob"
                                label="Date Of Birth"
                                placeholder="Example: 12/31/1986"
                                onChange={handleDOB}
                            /> :
                            <LightInput 
                                id="dob"
                                name="dob"
                                label="Date Of Birth"
                                placeholder="Example: 12/31/1986"
                                onChange={handleDOB}
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
                            {loading ? "Please wait, verifying..." : "Submit"}
                        </Button>
                    </form>

                   <div className={classes.action}>
                        <Button
                            style={{color: dark && "white"}}
                            className={classes.actionBTN}
                            href="/"
                        >
                            Already register? Login
                        </Button>

                        {/* <Button
                            style={{color: dark && "white"}}
                            className={classes.actionBTN}
                        >
                            Am a parent?
                        </Button> */}
                   </div>
                </div>
            </Container>
            <Hidden xsDown>
            <Container maxWidth="sm" style={{marginBottom: "10px"}}>
                <Box mt={3}>
                    {error ? <AlertMSG severity="error" msg={errormsg} dark={dark}/> : null}
                </Box>
            </Container>
          </Hidden>
           
        </Box>
    )
}

export default Register
