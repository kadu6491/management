import React from 'react'

import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';

const ListMenu = ({icon, text, dark}) => {
    return (
        <List dense={true}>
            <ListItem button disableGutters>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={text} style={{color: dark && "white"}}/>
            </ListItem>
        </List>
    )
}

export default ListMenu
