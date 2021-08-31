import { TextField } from '@material-ui/core'
import React from 'react'

const LightInput = ({id, label, name, autoFocus, type, placeholder, onChange}) => {
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
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}

export default LightInput
