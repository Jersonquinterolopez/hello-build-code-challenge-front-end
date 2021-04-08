import { useHistory } from 'react-router-dom';
import { useDispatch, useStore } from '../../../store/StoreProvider';
import { types } from '../../../store/StoreReducer';

const AuthOptions = () => {
  const { user } = useStore();
  const dispatch = useDispatch();
  const history = useHistory();

  const signup = () => history.push('./sign-up');
  const login = () => history.push('./login');
  const logout = async () => {
    dispatch({
      type: types.authLogout,
    });
    localStorage.clear();
    history.push('/login');
  };

  return (
    <div className="buttons">
      {user.length === 1 ? (
        <button className="button is-light" onClick={logout}>
          Log out
        </button>
      ) : (
        <div>
          <button className="button is-primary" onClick={signup}>
            <strong>Sign-up</strong>
          </button>
          <button className="button is-light" onClick={login}>
            Log in
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthOptions;
