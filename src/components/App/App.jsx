import React from "react";
import axios from "axios";
import "./App.css";
import {
  HashRouter as Router,
  Route,
  Link,
} from "react-router-dom/cjs/react-router-dom.min.js";
import FeelingPageOne from "../FeelingPageOne/FeelingPageOne";
import UnderstandingPageTwo from "../UnderstandingPageTwo/UnderstandingPageTwo";
import SupportedPageThree from "../SupportedPageThree/SupportedPageThree";
import CommentsPageFour from "../CommentsPageFour/CommentsPageFour";
import Review from "../Review/Review";
import ThankYouPage from "../ThankYouPage/ThankYouPage";
import Admin from "../Admin/Admin";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route exact path="/">
          <FeelingPageOne />
        </Route>
        <Route exact path="/pageTwo">
          <UnderstandingPageTwo />
        </Route>
        <Route exact path="/pageThree">
          <SupportedPageThree />
        </Route>
        <Route exact path="/pageFour">
          <CommentsPageFour />
        </Route>
        <Route exact path="/review">
          <Review />
        </Route>
        <Route exact path="/thankyou">
          <ThankYouPage />
        </Route>
        <Route exact path='/admin'>
          <Admin />
        </Route>
      </Router>
    </div>
  );
}

export default App;
