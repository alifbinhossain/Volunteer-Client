import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import PrivateRoute from "./Components/PrivateRoute";
import Form from "./Pages/Form";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import MyEvents from "./Pages/MyEvents";
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
          <PrivateRoute path="/register/:event">
            <Form>
              <Registration></Registration>
            </Form>
          </PrivateRoute>
          <PrivateRoute exact path="/myevents">
            <MyEvents></MyEvents>
          </PrivateRoute>
          <Route exact path="/login">
            <Form>
              <Login></Login>
            </Form>
          </Route>
        </main>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
