import {Routes, Route} from 'react-router-dom';

import Game from './pages/Game.js';
import Title from './pages/Title.js';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </>
  );
}
