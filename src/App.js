import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Login from "./pages/login/Login";

function App() {
  const result = localStorage.getItem("dark")
  const [dark, setDark] = React.useState(JSON.parse(result))

  const handleDark = () => {
    setDark(!dark)
    localStorage.setItem("dark", !dark)
  }

  return (
    <Router>
      <Switch>
        <Route path="/login">
            <Login dark={dark} handleDark={handleDark} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
