import React from 'react'

import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    listItem: {
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.3)',
            paddingLeft: "5px"
        }
    },
    listItemL: {
        '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.5)',
            paddingLeft: "5px"
        }
    }
}))

const ListMenu = ({icon, text, dark, handleClick}) => {
    const classes = useStyles()

    return (
        <List dense={true}>
            <ListItem 
                button 
                disableGutters
                onClick={handleClick} 
                className={ dark ? classes.listItem : classes.listItemL}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={text} style={{color: dark && "white"}}/>
            </ListItem>
        </List>
    )
}

export default ListMenu
