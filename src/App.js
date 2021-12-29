import React from 'react';
import './style.css';
import SelectSong from './actions';
import SongList from './reducers/SongList.js';

export default function App() {
  return (
    <div>
      <SongList />
    </div>
  );
}
