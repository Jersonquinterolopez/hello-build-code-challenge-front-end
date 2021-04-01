const types = {
  authLogin: 'auth - login',
  authLogout: 'auth - logout',
  getRepos: 'repo - get repositories',
  getUpComingEvents: 'event - get upcoming events',
  addFavorite: 'repo - add to favorites',
  removeFavorite: 'repo - remove to favorites',
  updateUser: 'user - update user',
};

const initialStore = {
  user: [
    {
      id: 1,
      firstName: 'Jerson',
      lastName: 'Quintero',
      email: 'dev@jersonquintero.com',
    },
  ],
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
  favoriteRepos: [
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

    default:
      return state;
  }
};

export { initialStore, types };
export default storeReducer;
