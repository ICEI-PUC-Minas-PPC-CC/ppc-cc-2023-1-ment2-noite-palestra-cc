import { useContext } from 'react';
import AuthContext from '../contexts/auth';
import {AppRoutes} from './app.routes';
import {AuthRoutes} from './auth.routes';

const RoutesComponent = () => {
  const authContext = useContext(AuthContext);

  if (authContext.user) {
    return <AppRoutes />;
  } else {
    return <AuthRoutes />;
  }
};

export default RoutesComponent;