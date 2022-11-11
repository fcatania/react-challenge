import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useProjectById = (id: string | undefined) => {
  const projects = useSelector((state: RootState) => state.projects.data);
  const projectFound = useMemo(() => {
    return id ? projects.find(project => project.id === parseInt(id)) : undefined;
  }, [projects]);
  return projectFound;
};