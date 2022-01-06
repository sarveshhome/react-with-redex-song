import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select Song</div>;
  }
  return (
    <div>
      <div> Detail</div>
      <p>Title: {song.title}</p>
      <p>Duration: {song.duration}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
