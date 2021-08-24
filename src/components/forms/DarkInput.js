import React from 'react'

import { withStyles} from '@material-ui/core/styles';
import {TextField} from '@material-ui/core';

const DarkInputs = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'white',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#949494',
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white',
        },
      },
    },
  })(TextField);

const DarkInput = ({id, label, name, type, autoFocus, placeholder}) => {
    return (
        <DarkInputs 
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id={id}
            label={label}
            name={name}
            autoFocus={autoFocus}
            type={type}
            InputProps={{
                style: {color: "white"}
            }}
            InputLabelProps={{
                style: { color: 'white'}
            }}
            placeholder={placeholder}
        />
    )
}

export default DarkInput
