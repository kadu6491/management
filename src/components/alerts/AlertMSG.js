import React from 'react'

import Alert from '@material-ui/lab/Alert';

const AlertMSG = ({severity, msg, dark}) => {
    return (
        <Alert 
                severity={severity}
                style={{
                    backgroundColor: dark ? "rgba(255, 0, 0, 0.19)" : "#ae2012", 
                    color: "white",

                }}
            >
                {msg}
            </Alert>
    )
}

export default AlertMSG
