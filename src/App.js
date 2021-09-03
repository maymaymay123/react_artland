import React from 'react'
import {Redirect, Route} from "react-router-dom";
import Home from "./pages/Home";
import Inspirations from "./pages/Inspirations";
import Contact from "./pages/Contact";
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import SearchResult from "./components/SearchResult"
import Highlight from "./components/Highlight"

export default function App() {
  return (
    <div className="container">
      <NavBar />


      <main>
      <Route path="/home">
      <Home />
      </Route>
      <Route path="/inspirations">
      <Inspirations />
      </Route>
      <Route path="/contact">
      <Contact />
      </Route>
      <Route path="/searchResult">
      <SearchResult />
      </Route>
      <Route path="/highlight">
      <Highlight />
      </Route>
      </main>
      <Footer />
    </div>
  )
}

