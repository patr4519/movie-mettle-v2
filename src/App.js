// `http://www.omdbapi.com/?t=q&apikey=9fc0fef8`

import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { Film } from "./components/Film";
import { SingleFilm } from "./components/SimgleFilm";

function App() {
  return (
    <Router>
      <div className="wrapper-app">
        <div className="app">
          <Header />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/movie/:movieTitle" element={<SingleFilm />} />
            <Route path="/favorites" element={<div>favorites</div>} />
            <Route path="/forum" element={<div>forum</div>} />
            <Route path="*" element={<div>No such page</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
