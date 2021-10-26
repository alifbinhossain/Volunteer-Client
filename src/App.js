import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <main>
          <Header></Header>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
        </main>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
