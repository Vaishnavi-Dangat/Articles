import React from "react";
import './App.css';
import Article from "./components/Article";
import ArticleList from "./components/ArticleList";
import ArticleDetails from "./components/ArticleDetails";
import ArticleLogin from "./components/ArticleLogin";
import Navbar from "./components/Navbar";
import {Route, Switch} from  "react-router-dom";

function App() {
  return (
    <div className="container mainContainer d-flex flex-column">
      <div className="row">
       <Navbar/>
      </div>
      <div className="row my-auto">
        <Switch>
          <Route exact path="/"   component={ArticleLogin}></Route>
          <Route exact path="/Article"  component={Article}></Route>
          <Route exact path="/ArticleList"  component={ArticleList}></Route>
          <Route exact path="/ArticleDetails/:id"  component={ArticleDetails}></Route>
   
        </Switch>
      </div>
   </div>
  );
}

export default App;


