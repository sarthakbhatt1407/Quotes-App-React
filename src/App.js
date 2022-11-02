import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import AddQuote from "./pages/AddQuote";
import AllQuotes from "./pages/AllQuotes";
import OnlineQuoteFullscreen from "./pages/OnlineQuoteFullscreen";
import OnlineQuotes from "./pages/OnlineQuotes";
import QuoteFullscreen from "./pages/QuoteFullscreen";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/all-quotes" />
        </Route>
        <Route path="/all-quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/add-new-quote">
          <AddQuote />
        </Route>
        <Route path="/online-quotes" exact>
          <OnlineQuotes />
        </Route>
        <Route path="/all-quotes/:quoteId">
          <QuoteFullscreen />
        </Route>
        <Route path="/online-quotes/:quoteId">
          <OnlineQuoteFullscreen />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
