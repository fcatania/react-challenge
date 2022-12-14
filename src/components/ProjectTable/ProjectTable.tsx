import React, { useMemo, useCallback } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid, GridValueGetterParams } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Project } from '../../models/Project';
import { GridCellParams } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";

type ProjectTableProps = {
  projects: Array<Project>,
};

export const ProjectTable = ({ projects }: ProjectTableProps) => {
  const users = useSelector((state: RootState) => state.users.data);
  const navigate = useNavigate();

  const onClickEditAction = useCallback((project: Project) => {
    navigate('/edit-project/' + project.id);
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
        rowsPerPageOptions={[20]}
      />
    </Box>
  );
}
