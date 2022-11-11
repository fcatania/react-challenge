import React, { useCallback, useState } from 'react';
import styles from './CreateUser.module.css';
import { Header } from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import { Stack, TextField, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { create } from '../../store/usersSlice';
import { useControlledInput } from '../../hooks/useControlledInput';
import { validateEmail } from '../../utils/form';

export const CreateUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state: RootState) => state.users.data);
  const [nameValue, onChangeName] = useControlledInput();
  const [emailValue, onChangeEmail] = useControlledInput();
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const onSubmit = useCallback(() => {
    let hasError = false;
    if (!nameValue || nameValue.length === 0) {
      setNameError(true);
      hasError = true;
    } else {
      setNameError(false);
    }
    if (!emailValue || emailValue.length === 0 || !validateEmail(emailValue)) {
      setEmailError(true);
      hasError = true;
    } else {
      setEmailError(false);
    }

    if (!hasError) {
      dispatch(create({
        id: users.length + 1, // not ideal but since the list is ordered and incrementing, this works
        name: nameValue,
        email: emailValue,
      }));
      navigate(-1);
    }

  }, [users, nameValue, emailValue]);

  return (
    <div className={styles.container}>
      <Header title="Create User" />
      <Stack spacing={4} className={styles.tableContainer}>
        <span>Complete all fields (need valid email)</span>
        <TextField
          id="id-field"
          variant="outlined"
          disabled
          label="ID"
          value={users.length + 1}
          fullWidth
        />
        <TextField
          id="name-field"
          variant="outlined"
          label="Name"
          fullWidth
          value={nameValue}
          onChange={onChangeName}
          required
          error={nameError}
        />
        <TextField
          id="email-field"
          variant="outlined"
          label="Email"
          fullWidth
          value={emailValue}
          onChange={onChangeEmail}
          required
          error={emailError}
        />
        <Button variant="contained" onClick={onSubmit}>SUBMIT</Button>
      </Stack>
    </div >
  );
}
