//Action creater

export const selectSong = (song) => {
  console.log('act---', song);

  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};
