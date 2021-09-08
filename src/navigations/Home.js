
import React, {useState} from 'react'

import { Box, Hidden } from '@material-ui/core'

import SideBarNav from '../system/sidebar/SideBarNav'
import NavAppBar from '../system/header/NavAppBar'
import PanelBar from '../system/sidebar/PanelBar'
import ChestBoard from '../components/board/ChestBoard'

const Home = ({dark, handleDark}) => {
    const [mobile, setMobile] = useState(false)
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setMobile(true)
    }

    const handleClose = () => {
        setMobile(false)
    }
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <Box bgcolor="red">
                <NavAppBar handleOpen={handleOpen} title={"Home"} dark={dark}/>
            </Box>
            <Box>
                <Hidden xsDown>
                    <PanelBar 
                        dark={dark} 
                        handleDark={handleDark}
                        open={open}
                        handleOpen={() => setOpen(!open)}
                    />
                </Hidden>

                <Hidden smUp implementation="js">
                    <SideBarNav 
                        dark={dark}
                        mobile={mobile}
                        handleDark={handleDark}
                        handleClose={handleClose}
                    />
                </Hidden>

                <ChestBoard open={open} dark={dark}/>
            </Box>
            
        </div>
    )
}

export default Home
