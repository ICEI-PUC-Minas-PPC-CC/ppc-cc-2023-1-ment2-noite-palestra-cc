import { DataGrid, ptBR } from '@mui/x-data-grid';
import { useState, useEffect } from "react";
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import Rotas from '../api';
import ModalForm from './modal_form';
import FormDelUser from './formDelUser';
import FormCreateUser from './form_createUser';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FormEditUser from './formEditUser';

export function ListUsers() {
  const [usuarios, setUsuarios] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isTextFieldEmpty, setIsTextFieldEmpty] = useState(true);
  const [openPopup, setOpenPopup] = useState(false);
  const [openCreateUserPopup, setOpenCreateUserPopup] = useState(false);
  const [openUpdateUserPopup, setOpenUpdateUserPopup] = useState(false);
  const [userId, setUserId] = React.useState(null);
  const routes = new Rotas()

  const getUsers = () => {
    routes.get('/users')
      .then(response => setUsuarios(response.data))
      .catch(error => {
        console.log(error);
      });
  };
  
  useEffect(() => {
    getUsers();
  }, []);
  
  const updateTable = () => {
    routes.get('/users')
      .then(response => setUsuarios(response.data))
      .catch(error => {
        console.log(error);
      });
  };
  

  const handleDelete = () => {
    setOpenPopup(false);
  }

  const handleCancel = () => {
    setOpenPopup(false);
  }


  const deleteUser = (userId) => {
    setUserId(userId);
    setOpenPopup(true);
  }

  const updateUser = (userId) => {
    setUserId(userId);
    setOpenUpdateUserPopup(true);
  }

  const handleContinueClick = () => {
    setOpenCreateUserPopup(false);
  };

  const handleCancelClick = () => {
    setOpenCreateUserPopup(false);
  };

  const handleUpdateContinueClick = () => {
    setOpenUpdateUserPopup(false);
  };
  
  const handleUpdateCancelClick = () => {
    setOpenUpdateUserPopup(false);
  };
  
  const handleSearchTextChange = (event) => {
    const searchValue = event.target.value;
    setSearchValue(searchValue);
    if (searchValue === "") {
      setIsTextFieldEmpty(true);
    } else {
      setIsTextFieldEmpty(false);
    }
  };

  useEffect(() => {
    let timerId;
    if (!isTextFieldEmpty) {
      timerId = setTimeout(() => {
        routes
          .get(`/users/search-users?letter=${searchValue}`)
          .then((response) => {
            setUsuarios(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, 1000);
    } else {
      routes
        .get('/users')
        .then((response) => {
          setUsuarios(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return () => clearTimeout(timerId);
  }, [searchValue, isTextFieldEmpty]);


  const columns = [
    { field: '_id', headerName: 'ID', width: 250 },
    { field: 'name', headerName: 'NOME', width: 250 },
    { field: 'username', headerName: 'USER', width: 180 },
    { field: 'email', headerName: 'EMAIL', width: 300 },
    {
      field: 'createdAt',
      headerName: 'DATA',
      width: 180,
      valueGetter: (params) => {
        const date = new Date(params.value);
        return date.toLocaleDateString("pt-BR");
      }
    },
    {
      field: 'actions',
      headerName: 'AÇÕES',
      width: 130,
      renderCell: (params) => {
        return (
          <div>
            <IconButton aria-label="edit" size="small" onClick={() => updateUser(params.row._id)}>
              <EditIcon sx={{color: '#ffb14b'}} />
            </IconButton>
            <IconButton onClick={() => deleteUser(params.row._id)} aria-label="delete" size="small">
              <DeleteIcon sx={{color:'#f83515'}} />
            </IconButton>
          </div>
        );
      },
    },
  ];


  const getRowId = (row) => row._id;

  return (
    <>
      <div style={{ marginTop: '3%' }}>
        <Box
          sx={{
            height: '100%',
            width: '100%',
            padding: '16px',
            border: '1px solid #D9D9D9',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '80%',
            margin: '0 auto',
            boxSizing: 'border-box',
            borderRadius: '5px',

          }}
        >
          <div style={{ height: 550, width: '100%', overflow: 'auto' }}>
            <div>
              <div style={{ height: 280, width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <Typography variant="h5" component="span" sx={{ mx: 1 }}>
                    Usuários Ativos
                  </Typography>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', marginTop: '50px' }}>
                  <TextField fullWidth id="outlined-basic" label="Pesquise o nome do usuário" variant="outlined" size="small" sx={{
                    marginRight: '25px'
                  }} InputProps={{
                    startAdornment: <InputAdornment position="start"><SearchIcon fontSize="small" /></InputAdornment>,
                  }} value={searchValue} onChange={handleSearchTextChange} />

                  <Button variant="contained" startIcon={<PersonAddIcon />} sx={{
                    backgroundColor: '#00992E',
                    marginLeft: 'auto'
                  }}
                    onClick={() => {
                      console.log('Botão "Adicionar" clicado');
                      setOpenCreateUserPopup(true);
                    }}
                  >
                    Adicionar
                  </Button>
                </div>

                <DataGrid
                  sx={{
                    marginTop: '3%',
                    minHeight: '350px'

                  }}
                  rows={usuarios}
                  columns={columns}
                  localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
                  getRowId={getRowId}
                  initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 5,
                      },
                    },
                  }}
                  pageSizeOptions={[5]}
                />
              </div>
            </div>
          </div>
        </Box>
      </div>
      <ModalForm title="APAGAR USUÁRIO" openPopup={openPopup} setOpenPopup={setOpenPopup} >
        <FormDelUser userId={userId} onDeleteSuccess={handleDelete} onCancel={handleCancel} updateGrid={() => getUsers()} />
      </ModalForm>

      <ModalForm title="CRIAR NOVO USUÁRIO" openPopup={openCreateUserPopup} setOpenPopup={setOpenCreateUserPopup} >
        <FormCreateUser onContinueClick={handleContinueClick} onCancelClick={handleCancelClick} updateGrid={() => getUsers()} />
      </ModalForm>

      <ModalForm title="EDIÇÃO DO USUÁRIO" openPopup={openUpdateUserPopup} setOpenPopup={setOpenUpdateUserPopup}>
        <FormEditUser userId={userId} onContinueClick={handleUpdateContinueClick} onCancelClick={handleUpdateCancelClick} updateGrid={() => getUsers()}/>
      </ModalForm>


    </>
  );
}
