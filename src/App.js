
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useEffect, lazy, Suspense } from "react"
import { auth } from "./firebase";
import { useStateValue } from "./components/Context/StateProvider";
import Spiner from "./components/Spiner";
import { asciLogo } from "./lib/asciLogo";
const Home = lazy(() => import("./pages/Home"))
const Login = lazy(() => import("./pages/Login"))
const Register = lazy(() => import("./pages/Register"))
const Checkout = lazy(() => import("./pages/Checkout"))
const About = lazy(() => import("./pages/About"))
const ProductPage = lazy(() => import("./pages/ProductPage"))
const NotFound = lazy(() => import("./pages/NotFound"))
const DetailProduct= lazy(() => import("./pages/DeatailProduct"))
console.log(`%c${asciLogo}`,"color:#FF0000");
function App() {
  //context
  const state = useStateValue()
  const [, dispath] = state
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
      <Suspense fallback={<Spiner />}>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path='/' exact >
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
          <Route path="/products/:id">
                  <DetailProduct/>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
