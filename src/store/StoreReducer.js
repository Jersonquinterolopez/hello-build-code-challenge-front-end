const types = {
  authLogin: 'auth - login',
  authLogout: 'auth - logout',
  getRepos: 'repo - get repositories',
  getUpComingEvents: 'event - get upcoming events',
  addFavorite: 'repo - add to favorites',
  removeFavorite: 'repo - remove to favorites',
};

const initialStore = {
  user: [{ id: 1, name: 'Jerson' }],
  upcomingEvents: [
    { id: 1, summary: 'TestEvent1' },
    { id: 2, summary: 'TestEvent2' },
  ],
  repos: [
    {
      id: 1,
      name: 'Repo #1',
      url: 'https://facebook.github.io/flux/docs/overview',
    },
    {
      id: 2,
      name: 'Repo #2',
      url: 'https://facebook.github.io/flux/docs/overview',
    },
  ],
  favoriteRepos: [],
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case types.getRepos:
      return {
        ...state,
        repos: action.payload,
      };

    case types.getUpComingEvents:
      return {
        ...state,
        upcomingEvents: action.payload,
      };

    case types.addFavorite:
      return {
        ...state,
        favoriteRepos: [...state.favoriteRepos, action.payload],
      };

    case types.removeFavorite:
      return {
        ...state,
        favoriteRepos: [
          ...state.favoriteRepos.filter(
            (favorite) => favorite.id !== action.payload
          ),
        ],
      };
    default:
      return state;
  }
};

export { initialStore, types };
export default storeReducer;
