import React from 'react';
import styles from './Header.module.css';
import { Typography, Button, Stack } from '@mui/material';

type HeaderProps = {
  title: string,
  showButtons?: boolean,
}

export const Header = ({ title, showButtons }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <Typography variant="h1" mt={2} gutterBottom fontSize={32}>
        {title}
      </Typography>
      {showButtons &&
        <Stack direction="row" spacing={2}>
          <Button variant="contained">NEW PROJECT</Button>
          <Button variant="contained">NEW USER</Button>
        </Stack>
      }
    </header>
  );
}
