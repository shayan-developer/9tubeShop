import Menu from "./components/Menu";
import Home from "./components/Home";
import Layout from "./components/Layout";
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
            <h1>sss</h1>
          </Route>
        </Switch>

      </Layout>
    </Router>
  );
}

export default App;
