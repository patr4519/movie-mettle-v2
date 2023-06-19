// `http://www.omdbapi.com/?t=q&apikey=9fc0fef8`
// jero96@mail.ru https://63dbfd55c45e08a04352c66d.mockapi.io/users

import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { SingleFilm } from "./components/SimgleFilm";
import { Favorites } from "./components/Favorites";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <div className="wrapper-app">
        <div className="app">
          <Header />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/movie/:movieTitle" element={<SingleFilm />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/forum" element={<div>forum</div>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<div>No such page</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
