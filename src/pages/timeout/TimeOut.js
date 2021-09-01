import React from 'react'

import {Backdrop, Container, Typography, Paper, Box} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },

    text: {
        letterSpacing: "0.6px",
        fontFamily: 'Helvetica Neue',
        fontWeight: '500'
    }
}));

const TimeOut = ({dark}) => {
    const classes = useStyles();
    
    return (
        <div>
            <Backdrop className={classes.backdrop} open={true}>
                <Container maxWidth="sm">
                    <Paper 
                        elevation={10} 
                        variant="outlined"
                        style={{backgroundColor: dark && "#22333b", color: dark && "#edf2f4"}}
                    >
                        <Box p={3}>
                            <Typography variant="subtitle1" align="center" className={classes.text}>
                                The System has timeout, Please refresh the page
                            </Typography>
                        </Box>
                    </Paper>
                </Container>
            </Backdrop>
        </div>
    )
}

export default TimeOut
