import Home from "./components/Home";
import Layout from "./components/Layout";
import Checkout from "./components/Checkout";
import Login from "./components/Login"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useEffect } from "react"
import { auth } from "./firebase";
import { useStateValue } from "./components/Context/StateProvider";
function App() {
  const [{ }, dispath] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispath({
          type: "SET_USER",
          user
        })
      } else {
        dispath({
          type: "SET_USER",
          user: null
        })

      }

    })
  }, [])
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path='/'>
          <Layout>
            <Home />
          </Layout>
        </Route>
        <Route path="/checkout">
          <Layout>
            <Checkout />
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
