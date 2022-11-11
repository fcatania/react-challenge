import React, { useCallback } from 'react';
import styles from './ErrorPage.module.css';
import { Header } from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export const ErrorPage = () => {
  const navigate = useNavigate();
  const onClickHeadBack = useCallback(() => {
    navigate('/');
  }, []);

  return (
    <div className={styles.container}>
      <Header title="Error" />
      <div className={styles.contentContainer}>
        <span className={styles.errorMsg}>Error occured! Head back?</span>
        <Button variant="contained" color='error' onClick={onClickHeadBack}>BACK TO HOME</Button>
      </div>
    </div >
  );
}
