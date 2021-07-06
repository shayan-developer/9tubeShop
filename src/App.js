import Home from "./components/Home";
import Layout from "./components/Layout";
import Checkout from "./components/Checkout";
import Register from "./components/Register";
import Login from "./components/Login"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useEffect } from "react"
import { auth } from "./firebase";
import { useStateValue } from "./components/Context/StateProvider";
function App() {
  const state = useStateValue()
  const dispath=state[1]
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispath({
          type: "SET_USER",
          user:user
        })
      } else {
        dispath({
          type: "SET_USER",
          user: null
        })

      }

    })
  }, [dispath])
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}>
          <Login />
        </Route>
        <Route path="/register">
          <Register />
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
