import React from 'react'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';

const RegularTable = ({component, head, rows, dark}) => {
    return (
        <TableContainer 
            component={component} 
            style={{backgroundColor: "transparent"}} 
            elevation={0}
        >
            <Table size="medium" aria-label="table">
                <TableHead>
                    {head}
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow 
                            key={row.id}
                            
                        >
                           <TableCell 
                                align="left"
                                style={{color: dark ? "#adb5bd" : "#232323"}}
                                padding="none"
                            >{row.n}</TableCell>
                            <TableCell 
                                align="left"
                                padding="none"
                                style={{color: dark ? "#adb5bd" : "#232323"}}
                            >{row.l}</TableCell>
                            <TableCell 
                                align="left"
                                padding="none"
                                style={{color: dark ? "#adb5bd" : "#232323"}}
                            >{row.s}</TableCell>
                            <TableCell 
                                align="left"
                                style={{color: dark ? "#adb5bd" : "#232323"}}
                                
                            >{row.e}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default RegularTable
