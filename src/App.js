import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Login from "./pages/login/Login";

function App() {
  const [dark, setDark] = React.useState(false)

  const handleDark = () => {
    setDark(!dark)
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
