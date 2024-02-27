import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Netflix from './pages/netflix-home/Netflix';
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';
import Player from './pages/player';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
import UserLiked from './pages/UserLiked';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Netflix />} />
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/tv" element={<TvShows />} />
        <Route exact path="/mylist" element={<UserLiked />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

