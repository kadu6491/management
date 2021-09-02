import React from 'react'

import { Box, CssBaseline, Drawer, Hidden} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';

import useStyles from './style'
import DisplayToggle from '../../components/buttons/DisplayToggle'

const SideBarNav = ({dark, handleDark, mobile, desktop, handleClose}) => {
    const classes = useStyles()
    const theme = useTheme();

    const drawer = (
        <div>
            <Box p={2}>
                <DisplayToggle dark={dark} handleDark={handleDark} />
            </Box>
        </div>
    )

    return (
        <div className={classes.root}>
            <CssBaseline />
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="js">
                    <Drawer
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobile}
                        variant="temporary"
                        classes={{
                            paper: dark ? classes.sidePaperD : classes.drawerPaper,
                        }}
                        onClose={handleClose}
                    >
                        <h4>hiiiiiii</h4>
                        {drawer}
                    </Drawer>
                </Hidden>

                <Hidden xsDown implementation="js">
                    <Drawer
                        classes={{
                            paper: dark ? classes.sidePaperD : classes.drawerPaper,
                        }}
                        variant="permanent"
                        open={desktop}
                    >
                        <h3>lololol</h3>
                        {drawer}
                    </Drawer>
                </Hidden> 
            </nav>
        </div>
    )
}

export default SideBarNav
