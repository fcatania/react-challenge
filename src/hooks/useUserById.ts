import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useUserById = (id: number | undefined) => {
  const users = useSelector((state: RootState) => state.users.data);
  const userFound = useMemo(() => {
    return id ? users.find(user => user.id === id) : undefined;
  }, [users]);
  return userFound;
};