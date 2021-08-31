import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Login from "./pages/login/Login";
import Register from "./pages/signup/Register";

import "./App.css"
import Password from "./pages/forgot/Password";
import Username from "./pages/forgot/Username";
import NewPWD from "./pages/new/NewPWD";

function App() {
  const result = localStorage.getItem("dark")
  const [dark, setDark] = React.useState(JSON.parse(result))

  const handleDark = () => {
    setDark(!dark)
    localStorage.setItem("dark", !dark)
  }

  if(dark)
  {
    document.body.style = 'background: #0a0a0a'
  }
  else {
    document.body.style = 'background: white'
  }
    // Test this comments

  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Login dark={dark} handleDark={handleDark} />
        </Route>

        <Route exact path="/activate">
            <Register dark={dark} handleDark={handleDark} />
        </Route>

        <Route exact path="/activate/newpwd">
            <NewPWD dark={dark} handleDark={handleDark} />
        </Route>

        <Route exact path="/forgotpwd">
            <Password dark={dark} handleDark={handleDark} />
        </Route>

        <Route exact path="/forgotuser">
            <Username dark={dark} handleDark={handleDark} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
