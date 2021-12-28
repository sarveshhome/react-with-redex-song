const songReducer = () => {
  return [
    { title: 'Shaam Shaandaar', duration: '4:09' },
    { title: 'Jiyo Re Bahubali', duration: '3:89' },
    { title: 'Rock On', duration: '3:19' },
    { title: 'Toh Dishoom', duration: '5:89' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};
