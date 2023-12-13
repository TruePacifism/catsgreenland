import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from 'redux/store';
import loginUser from 'utils/api/auth/loginUser';

export default function DevAccess() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    let prompt = '';
    while (prompt !== 'simplePassword') {
      prompt = window.prompt('Введите пароль для доступа');
    }
    const fetchDev = async () => {
      const devUser = await loginUser('QbOTN4ektM6ecCoMl2azlZYSZtUzxnOXwNdi0utUQKz');
      dispatch(auth(devUser));
      navigate('/');
    }
    fetchDev();
  }, [dispatch, navigate]);
  return <></>;
}
