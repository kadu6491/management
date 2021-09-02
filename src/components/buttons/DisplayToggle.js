import React from 'react'

import { Box, IconButton } from '@material-ui/core';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const DisplayToggle = ({dark, handleDark}) => {
    return (
        <div>
            <Box 
                m={1}
                p={1}
                style={{marginBottom: "-30px"}}
                display="flex"
                justifyContent="center"
            >
                <IconButton 
                    style={{backgroundColor: dark ? "#515199" : "#eee"}}
                    onClick={handleDark}
                >
                    <DarkModeSwitch 
                            size={15}
                            onChange={handleDark}
                            checked={dark}
                        />
                </IconButton>
            </Box>
        </div>
    )
}

export default DisplayToggle
