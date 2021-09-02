
import React, {useState} from 'react'

import { Box } from '@material-ui/core'

import SideBarNav from '../system/sidebar/SideBarNav'
import NavAppBar from '../system/header/NavAppBar'

const Home = ({dark, handleDark}) => {
    const [mobile, setMobile] = useState(false)

    const handleOpen = () => {
        setMobile(true)
    }

    const handleClose = () => {
        setMobile(false)
    }
    return (
        <div 
            style={{display: "flex", flexDirection: "row", justifyContent:"space-evenly"}}
        >
            <Box bgcolor="red">
                <NavAppBar handleOpen={handleOpen} title={"Home"} dark={dark}/>
                <SideBarNav 
                    dark={dark} 
                    handleDark={handleDark}
                    mobile={mobile}
                    handleClose={handleClose}
                />
            </Box>
            
        </div>
    )
}

export default Home
