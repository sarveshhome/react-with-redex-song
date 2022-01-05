//Action creater

const selectSong = (song) => {
  //Retrun

  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};

export default selectSong;
