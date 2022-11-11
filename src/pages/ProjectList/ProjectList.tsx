import React from 'react';
import { Typography, Button, Stack } from '@mui/material';
import styles from './ProjectList.module.css';
import { ProjectTable } from '../../components/ProjectTable/ProjectTable';

export const ProjectList = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Typography variant="h1" mt={2} gutterBottom fontSize={32}>
          Project List
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="contained">NEW PROJECT</Button>
          <Button variant="contained">NEW USER</Button>
        </Stack>
      </header>
      <div className={styles.tableContainer}>
        <ProjectTable />
      </div>
    </div >
  );
}
