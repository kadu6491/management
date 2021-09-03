import React, {useEffect} from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  
import Home from './Home';

const NavApp = ({dark, handleDark}) => {
    
    useEffect(() => {
        if(dark)
        {
            document.body.style.backgroundColor = "#000"
        }
        else {
            document.body.style.backgroundColor = "white"
        }

    }, [])
    return (
        <Router>
            <Switch>
                <Route exact path="/accounts">
                    <Home dark={dark} handleDark={handleDark}/>
                </Route>
            </Switch>
      </Router>
    )
}

export default NavApp
