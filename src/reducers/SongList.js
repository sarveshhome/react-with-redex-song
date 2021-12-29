import React from 'react';
import { connect } from 'react-redux';

const SongList = (props) => {
  console.log('song list components ');
  console.log(props);

  return props.songs.map((song) => {
    return (
      <div className="item" key={song.title}>
        <div className="right floated content">
          <div className="ui button primary">Select</div>
        </div>
        <div className="content">{song.title}</div>
      </div>
    );
  });
};

const mapStateToProps = (state) => {
  console.log(state);
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
