import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Header, Footer } from "../components";

import {
  AcademicInsert,
  PersonalInsert,
  Payment,
  DocumentUpload,
  SignUp,
  Quiz,
} from "../pages/pages";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={SignUp} />
        <Route path="/personal" exact component={PersonalInsert} />
        <Route path="/academic" exact component={AcademicInsert} />
        <Route path="/payment" exact component={Payment} />
        <Route path="/docs" exact component={DocumentUpload} />
        <Route path="/quiz" exact component={Quiz} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
