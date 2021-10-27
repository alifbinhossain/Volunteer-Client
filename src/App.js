import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Form from "./Pages/Form";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";

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
          <Route exact path="/login">
            <Form>
              <Login></Login>
            </Form>
          </Route>
          <Route exact path="/register">
            <Form>
              <Registration></Registration>
            </Form>
          </Route>
        </main>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
