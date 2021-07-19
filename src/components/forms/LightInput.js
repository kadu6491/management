import { TextField } from '@material-ui/core'
import React from 'react'

const LightInput = ({id, label, name, autoFocus, type}) => {
    return (
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id={id}
            label={label}
            name={name}
            autoFocus={autoFocus}
            type={type}
        />
    )
}

export default LightInput
