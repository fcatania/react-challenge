import React, { useMemo, useCallback } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid, GridValueGetterParams } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Project } from '../../models/Project';
import { GridCellParams } from '@mui/x-data-grid';

export const ProjectTable = () => {
  const projects = useSelector((state: RootState) => state.projects.data);
  const users = useSelector((state: RootState) => state.users.data);

  const onClickEditAction = useCallback((row: Project) => {
    // navigate to new page
  }, []);

  const renderEditAction = useCallback((params: GridCellParams) => {
    return (
      <IconButton size='large' onClick={() => onClickEditAction(params.row)}>
        <EditIcon />
      </IconButton>
    );
  }, []);

  const columns = useMemo(() => [
    {
      field: 'id',
      headerName: 'ID',
    },
    {
      field: 'name',
      headerName: 'Name',
    },
    {
      field: 'description',
      headerName: 'Description',
      flex: 1,
    },
    {
      field: 'owner',
      headerName: 'Owner',
      flex: 0.5,
      valueGetter: (params: GridValueGetterParams) =>
        users.find(user => params.row.owner === user.id)?.name,
    },
    {
      field: 'edit',
      headerName: 'Edit Action',
      renderCell: renderEditAction,
    }
  ], [users]);

  return (
    <Box sx={{ height: 600, width: 800 }}>
      <DataGrid
        rows={projects}
        columns={columns}
        pageSize={20}
      />
    </Box>
  );
}
