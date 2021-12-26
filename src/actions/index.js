//Action creater

const SelectSong = (song) => {
  //Retrun

  return {
    type: 'Song_SELECTED',
    payload: song,
  };
};

export default SelectSong;
