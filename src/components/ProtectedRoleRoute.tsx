import { User, UserType } from '../models/user';
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuthUser, useIsAuthenticated } from 'react-auth-kit';

interface AuthRoleRouteProps {
  allowedRoles: UserType;
}

const AuthRoleRoute = (props: AuthRoleRouteProps) => {
  const isAuthenticated = useIsAuthenticated();
  const auth = useAuthUser()() as User;
  const location = useLocation();

  return (isAuthenticated() && auth.type === props.allowedRoles) 
    ? <Outlet /> 
    : <Navigate to="/" state={{ from: location }} replace />
};

export default AuthRoleRoute;