const types = {
  authLogin: 'auth - login',
  authLogout: 'auth - logout',
  getRepos: 'repo - get repositories',
  getFavoriteRepos: 'repo - get favorite repos',
  updateFavoriteRepos: 'repo - update favorite repos',
  getUpComingEvents: 'event - get upcoming events',
  updateUser: 'user - update user',
};

const initialStore = {
  user: [],
  upcomingEvents: [],
  repos: [],
  favoriteRepos: [],
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case types.getRepos:
      return {
        ...state,
        repos: action.payload,
      };

    case types.getFavoriteRepos:
      return {
        ...state,
        favoriteRepos: action.payload,
      };

    case types.updateFavoriteRepos:
      return {
        ...state,
        favoriteRepos: action.payload,
      };

    case types.getUpComingEvents:
      return {
        ...state,
        upcomingEvents: action.payload,
      };

    case types.updateUser:
      return {
        ...state,
        user: [action.payload],
      };
    case types.authLogin:
      return {
        ...state,
        user: [action.payload],
      };

    case types.authLogout:
      return {
        user: [],
        upcomingEvents: [],
        repos: [],
        favoriteRepos: [],
      };

    default:
      return state;
  }
};

export { initialStore, types };
export default storeReducer;
