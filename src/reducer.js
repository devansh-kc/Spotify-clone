export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,

  // I have to set back to null after making
  token:null
};

const reducer = (state, action) => {
  // console.log(state)
  console.log(action.playlists);
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };

    case "SET_TOKEN":
      return { ...state, token: action.token };

    case "SET_PLAYLIST":
      return { ...state, playlists: action.playlists };

    case "SET_DISCOVER_WEEKLY":
      return { ...state, discover_weekly: action.discover_weekly };

    default:
      return state;
  }
};

export default reducer;
