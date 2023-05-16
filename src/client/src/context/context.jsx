import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import * as Auth from '../services/auth';

const storage = sessionStorage;

const AuthContext = createContext({
  user: null,
  signIn: async () => {},
  signOut: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const history = useNavigate();

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = storage.getItem('@Auth:user');

      if (storagedUser) {
        const userJson = JSON.parse(storagedUser);
        api.defaults.headers.common = {
          Authorization: `${userJson.tokenType} ${userJson.accessToken}`,
        };
        setUser(userJson);
      }
    }

    loadStorageData();
  }, []);

  const signIn = async ( username, password ) => {
    return new Promise((_resolve, reject) => {
      Auth.signIn(username, password )
        .then((response) => {
          api.defaults.headers.common = {
            Authorization: `${response.user.tokenType} ${response.user.accessToken}`,
          };

          setUser(response.user);
          storage.setItem('@Auth:user', JSON.stringify(response.user));
        })
        .catch((err) => {
          if (err?.response?.data?.code) {
            reject({ code: err?.response?.data?.code, message: err?.response?.data?.message });
          } else {
            reject({ code: 0, message: 'Unknow error, contact the administrator.' });
          }
        });
    });
  };

  const signOut = async () => {
    storage.clear();
    setUser(null);
    history('/');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
