import React from 'react';
import { connect } from 'react-redux';

const SongList = (props) => {
  console.log('song list components ');
  console.log(props);
  return <div>SongList</div>;
};

const mapStateToProps = (state) => {
  console.log(state);
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
