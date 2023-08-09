import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from 'redux/store';

export default function DevAccess() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    let prompt = '';
    while (prompt !== 'simplePassword') {
      prompt = window.prompt('Введите пароль для доступа');
    }
    dispatch(auth('QbOTN4ektM6ecCoMl2azlZYSZtUzxnOXwNdi0utUQKz'));
    navigate('/');
  }, [dispatch, navigate]);
  return <></>;
}
