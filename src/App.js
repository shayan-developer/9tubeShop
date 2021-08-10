
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useEffect, lazy, Suspense } from "react"
import { auth } from "./firebase";
import { useStateValue } from "./components/Context/StateProvider";

import Spiner from "./components/Spiner";
const Home = lazy(() => import("./components/Home"))
const Login = lazy(() => import("./components/Login"))
const Register = lazy(() => import("./components/Register"))
const Checkout = lazy(() => import("./components/Checkout"))
const About = lazy(() => import("./components/About"))
const ProductPage= lazy(() => import("./components/ProductPage"))
function App() {
  const state = useStateValue()
  const dispath = state[1]
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispath({
          type: "SET_USER",
          user: user
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
        <Suspense fallback={<Spiner />}>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path='/'>
              <Home />
          </Route>
          <Route exact path='/products'>
              <ProductPage />
          </Route>
          <Route exact path='/about'>
              <About />
          </Route>
          <Route path="/checkout">
              <Checkout />
          </Route>
        </Suspense>
      </Switch>
    </Router>
  );
}

export default App;
