import React from 'react';
import './style.css';
import SelectSong from './actions';
import SongList from './reducers/SongList.js';

export default function App() {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
      </div>
    </div>
  );
}
