import Menu from "./components/Menu";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Checkout from "./components/Checkout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path="/checkout">
           <Checkout/>
          </Route>
        </Switch>

      </Layout>
    </Router>
  );
}

export default App;
