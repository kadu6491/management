import React from 'react'

import {Container, Typography, Paper, Box} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3)
    },

    text: {
        letterSpacing: "0.6px",
        fontFamily: 'Helvetica Neue',
        fontWeight: '500'
    }
}));

const DisplayBoard = ({dark, msg}) => {
    const classes = useStyles()

    return (
        <Container maxWidth="xs">
           <Paper 
                elevation={10} 
                variant="outlined"
                className={classes.paper}
                style={{backgroundColor: dark ? "#22333b" : "#eee", color: dark && "#edf2f4"}}
           >
               <Box p={3}>
                   <Typography variant="subtitle1" align="center" className={classes.text}>
                        {msg}
                   </Typography>
               </Box>
           </Paper>
        </Container>
    )
}

export default DisplayBoard
