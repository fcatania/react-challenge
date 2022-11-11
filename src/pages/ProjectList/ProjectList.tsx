import React from 'react';
import styles from './ProjectList.module.css';
import { ProjectTable } from '../../components/ProjectTable/ProjectTable';
import { Header } from '../../components/Header/Header';

export const ProjectList = () => {
  return (
    <div className={styles.container}>
      <Header title="Project List" showButtons />
      <div className={styles.tableContainer}>
        <ProjectTable />
      </div>
    </div >
  );
}
