import React, { useState, useCallback } from 'react';
import styles from './CreateProject.module.css';
import { Header } from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import { Stack, TextField, Autocomplete, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { User } from '../../models/User';
import { create } from '../../store/projectsSlice';
import { useControlledInput } from '../../hooks/useControlledInput';

export const CreateProject = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state: RootState) => state.users.data);
  const projects = useSelector((state: RootState) => state.projects.data);
  const [ownerValue, setOwnerValue] = useState<User | undefined>();
  const [nameValue, onChangeName] = useControlledInput();
  const [descriptionValue, onChangeDescription] = useControlledInput();

  const onSubmit = useCallback(() => {
    if (!ownerValue) return;
    dispatch(create({
      id: projects.length + 1, // not ideal but since the list is ordered and incrementing, this works
      name: nameValue,
      description: descriptionValue,
      owner: ownerValue.id,
    }));
    navigate(-1);
  }, [projects, nameValue, descriptionValue, ownerValue]);

  return (
    <div className={styles.container}>
      <Header title="New Project" />
      <Stack spacing={4} className={styles.tableContainer}>
        <span>Complete all fields</span>
        <TextField
          id="id-field"
          variant="outlined"
          disabled
          label="ID"
          value={projects.length + 1}
          fullWidth
        />
        <TextField
          id="name-field"
          variant="outlined"
          label="Name"
          fullWidth
          value={nameValue}
          onChange={onChangeName}
        />
        <TextField
          id="description-field"
          variant="outlined"
          label="Description"
          fullWidth
          value={descriptionValue}
          onChange={onChangeDescription}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={users}
          disableClearable
          getOptionLabel={option => option.name}
          isOptionEqualToValue={(option, value) => option?.id === value?.id}
          value={ownerValue}
          onChange={(event: any, newValue: User) => {
            setOwnerValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} label="Owner" />}
        />
        <Button variant="contained" onClick={onSubmit}>SUBMIT</Button>
      </Stack>
    </div >
  );
}
