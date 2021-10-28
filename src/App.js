import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import PrivateRoute from "./Components/PrivateRoute";
import AuthProvider from "./context/AuthProvider";
import Donation from "./Pages/Donation";
import Form from "./Pages/Form";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import MyEvents from "./Pages/MyEvents";
import Registration from "./Pages/Registration";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <main>
            {/* -------------------------------------------------------------------------- */
            /*                                 OPEN ROUTES                                */
            /* -------------------------------------------------------------------------- */}
            <Header></Header>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/donation">
              <Donation></Donation>
            </Route>

            {/* -------------------------------------------------------------------------- */
            /*                               PRIVATE ROUTES                               */
            /* -------------------------------------------------------------------------- */}
            <PrivateRoute exact path="/register/:event">
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
    </AuthProvider>
  );
}

export default App;
