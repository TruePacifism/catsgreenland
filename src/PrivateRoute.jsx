import { Route, useNavigate } from 'react-router-dom';

export default function PrivateRoute({ condition, children, ...rest }) {
  const navigate = useNavigate();

  if (!condition) {
    navigate('/login', { replace: true });
  }

  return <Route {...rest}>{children}</Route>;
}
