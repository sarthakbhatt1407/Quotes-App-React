import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import AddQuote from "./pages/AddQuote";
import AllQuotes from "./pages/AllQuotes";
import OnlineQuotes from "./pages/OnlineQuotes";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/all-quotes" />
        </Route>
        <Route path="/all-quotes">
          <AllQuotes />
        </Route>
        <Route path="/add-new-quote">
          <AddQuote />
        </Route>
        <Route path="/online-quotes">
          <OnlineQuotes />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
