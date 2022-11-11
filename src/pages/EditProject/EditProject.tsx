import React, { useState, useCallback } from 'react';
import styles from './EditProject.module.css';
import { Header } from '../../components/Header/Header';
import { useNavigate, useParams } from 'react-router-dom';
import { useProjectById } from '../../hooks/useProjectById';
import { Stack, TextField, Autocomplete, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { useUserById } from '../../hooks/useUserById';
import { User } from '../../models/User';
import { edit } from '../../store/projectsSlice';
import { useControlledInput } from '../../hooks/useControlledInput';

export const EditProject = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const project = useProjectById(params.id);
  const users = useSelector((state: RootState) => state.users.data);
  const user = useUserById(project?.owner);
  const [ownerValue, setOwnerValue] = useState(user);
  const [nameValue, onChangeName] = useControlledInput(project?.name);
  const [descriptionValue, onChangeDescription] = useControlledInput(project?.description);

  const onSubmit = useCallback(() => {
    if (!project || !ownerValue) return;
    dispatch(edit({
      id: project.id,
      name: nameValue,
      description: descriptionValue,
      owner: ownerValue.id,
    }));
    navigate('/');
  }, [project, nameValue, descriptionValue, ownerValue]);

  if (!project) {
    return null; // error state?
  }

  return (
    <div className={styles.container}>
      <Header title="Edit Project" />
      <Stack spacing={4} className={styles.tableContainer}>
        <TextField
          id="id-field"
          variant="outlined"
          disabled
          label="ID"
          defaultValue={project.id}
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
