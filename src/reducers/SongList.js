import React from 'react';
import { connect } from 'react-redux';

const SongList = (props) => {
  console.log('song list components ');
  console.log(props);

  return props.songs.map((song) => {
    return (
      <div className="ui divided list">
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      </div>
    );
  });
};

const mapStateToProps = (state) => {
  console.log(state);
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
