import React, { useMemo } from 'react';
import styles from './ProjectList.module.css';
import { ProjectTable } from '../../components/ProjectTable/ProjectTable';
import { Header } from '../../components/Header/Header';
import { useControlledInput } from '../../hooks/useControlledInput';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';


export const ProjectList = () => {
  const projects = useSelector((state: RootState) => state.projects.data);
  const [searchValue, onChangeSearchValue] = useControlledInput('');

  const filteredProjects = useMemo(() => {
    if (!searchValue || searchValue.length === 0) return projects;
    return projects.filter(project =>
      project.name.includes(searchValue) || project.description.includes(searchValue));
  }, [projects, searchValue]);

  return (
    <div className={styles.container}>
      <Header
        title="Project List"
        showButtons
        searchValue={searchValue}
        onChangeSearchValue={onChangeSearchValue}
      />
      <div className={styles.tableContainer}>
        <ProjectTable projects={filteredProjects} />
      </div>
    </div >
  );
}
