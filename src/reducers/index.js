import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "No Scrubs",
      duration: "4:05"
    },
    {
      title: "Two Scrubs",
      duration: "3:05"
    },
    {
      title: "Three Scrubs",
      duration: "2:05"
    },
    {
      title: "Four Scrubs",
      duration: "5:05"
    },
    {
      title: "Five Scrubs",
      duration: "4:45"
    }
  ];
};

const selectedSong = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") return action.payload;
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSong
});
