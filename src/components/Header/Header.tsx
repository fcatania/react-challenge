import React, { ChangeEventHandler, useCallback } from 'react';
import styles from './Header.module.css';
import { Typography, Button, Stack, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type HeaderProps = {
  title: string,
  showButtons?: boolean,
  searchValue?: string,
  onChangeSearchValue?: ChangeEventHandler,
}

export const Header = ({ title, showButtons, searchValue, onChangeSearchValue }: HeaderProps) => {
  const navigate = useNavigate();

  const onClickCreateProject = useCallback(() => {
    navigate('/create-project');
  }, []);

  const onClickCreateUser = useCallback(() => {
    navigate('/create-user');
  }, []);

  return (
    <header className={styles.header}>
      <Typography variant="h1" mt={2} gutterBottom fontSize={32}>
        {title}
      </Typography>
      {onChangeSearchValue &&
        <div className={styles.searchBarContainer}>
          <TextField
            id="search-field"
            variant="outlined"
            label="Case sensitive Search"
            value={searchValue}
            onChange={onChangeSearchValue}
            fullWidth
            size='small'
          />
        </div>
      }
      {showButtons &&
        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={onClickCreateProject}>CREATE PROJECT</Button>
          <Button variant="contained" onClick={onClickCreateUser}>CREATE USER</Button>
        </Stack>
      }
    </header>
  );
}
