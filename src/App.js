import React from 'react'
import {Redirect, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Classification from "./pages/Classification"
import Inspirations from "./pages/Inspirations";
import Contact from "./pages/Contact";
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import SearchResult from "./components/SearchResult"
import HighlightItem from './components/HighlightItem';

export default function App() {
  return (
    <div className="container">
      <NavBar />


      <main>
          <Switch>
              <Route exact path="/home">
              <Home />
              </Route>
              <Route exact path="/classification">
              <Classification />
              </Route>
              <Route exact path="/inspirations">
              <Inspirations />
              </Route>
              <Route exact path="/contact">
              <Contact />
              </Route>
              <Route exact path="/searchResult/">
              <SearchResult />
              </Route>
              <Route exact path="/highlight">
              <HighlightItem />
              </Route>
          </Switch>
      </main>
      <Footer />
    </div>
  )
}

