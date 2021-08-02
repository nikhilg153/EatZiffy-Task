import React, { useState, useEffect } from "react";
import "./App.css";
import Categories from "./Components/Categories";
import Header from "./Components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bookmark from "./Components/Bookmark";
import BookmarkMusic from "./Components/BookmarkMusic";
import BookmarkProgram from "./Components/BookmarkProgram";
import BookmarkIdea from "./Components/BookmarkIdea";
import BookmarkAll from "./Components/BookmarkAll";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header name={"Hi John"} greeting={"Welcome Back !!!"} />
            <Categories />
          </Route>
          <Route exact path="/cooking">
            <Header greeting={"Cooking"} />
            <Bookmark />
          </Route>
          <Route exact path="/Music">
            <Header greeting={"Music"} />
            <BookmarkMusic />
          </Route>
          <Route exact path="/Programming">
            <Header greeting={"Programming"} />
            <BookmarkProgram />
          </Route>
          <Route exact path="/Ideas">
            <Header greeting={"Ideas"} />
            <BookmarkIdea />
          </Route>
          <Route exact path="/cooking/all">
            <Header greeting={"Cooking"} />
            <BookmarkAll />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
