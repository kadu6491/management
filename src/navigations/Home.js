
import React, {useState} from 'react'

import { Box } from '@material-ui/core'

import SideBarNav from '../system/sidebar/SideBarNav'
import NavAppBar from '../system/header/NavAppBar'
import PanelBar from '../system/sidebar/PanelBar'

const Home = ({dark, handleDark}) => {
    const [mobile, setMobile] = useState(false)

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
            <Box bgcolor="green">
                <PanelBar dark={dark} handleDark={handleDark}/>
            </Box>
            
        </div>
    )
}

export default Home
