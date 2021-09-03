import React from 'react'

import { Box, IconButton, Tooltip } from '@material-ui/core';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const DisplayToggle = ({dark, handleDark}) => {
    return (
        // <div>
        //     <Box 
        //         m={1}
        //         p={1}
        //         style={{marginBottom: "-30px"}}
        //         display="flex"
        //         justifyContent="center"
        //     >
        //         <Tooltip title="Display Mode" placement="right" arrow>
        //             <IconButton 
        //                 style={{backgroundColor: dark && "#1c1c1c"}}
        //                 onClick={handleDark}
        //             >
        //                 <DarkModeSwitch 
        //                         size={15}
        //                         onChange={handleDark}
        //                         checked={dark}
        //                 />
        //             </IconButton>
        //         </Tooltip>
        //     </Box>
        // </div>

        <DarkModeSwitch 
            size={19}
            onChange={handleDark}
            checked={dark}
        />
    )
}

export default DisplayToggle
