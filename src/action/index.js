//Action creater

const selectSong = song =>{
  //Retrun 

  return {
    type: 'Song_SELECTED',
    payload: song
  }
}