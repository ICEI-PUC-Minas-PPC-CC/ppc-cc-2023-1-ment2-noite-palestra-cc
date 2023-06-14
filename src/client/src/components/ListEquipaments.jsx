import { DataGrid, ptBR } from '@mui/x-data-grid';
import { useState, useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Checkbox, FormControlLabel, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import Rotas from '../api';
import ModalForm from './modal_form';
import { useRef } from 'react';
import FormDelUser from './formDelUser';
import FormCreateUser from './form_createUser';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FormEditUser from './formEditUser';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';
import PrintIcon from '@mui/icons-material/Print';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FormDelDonation from './formDelDonation';
import FormCreateDonation from './formCreateDonation';
import FormEditDonation from './formEditDonation';
import ImpressoEquipamentos from './impressoEquipament';
import { useReactToPrint } from 'react-to-print';

export function ListEquipament() {
  const [usuarios, setUsuarios] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isTextFieldEmpty, setIsTextFieldEmpty] = useState(true);
  const [openPopup, setOpenPopup] = useState(false);
  const [openCreateUserPopup, setOpenCreateUserPopup] = useState(false);
  const [openUpdateUserPopup, setOpenUpdateUserPopup] = useState(false);
  const [isPerishableChecked, setIsPerishableChecked] = useState(false);
  const [userId, setUserId] = React.useState(null);
  const routes = new Rotas()
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'teste',
    onAfterPrint: () => alert("Impresso gerado!")
  });
  const getUsers = () => {
    routes.get('/equipament/all')
      .then(response => setUsuarios(response.data))
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const updateTable = () => {
    routes.get('/equipament/all')
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
          .get(`/equipament/search-equipament-name?letter=${searchValue}`)
          .then((response) => {
            setUsuarios(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, 1000);
    } else {
      routes
        .get('/equipament/all')
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
    { field: 'code', headerName: 'Cód. Equip', width: 90 },
    {
      field: 'lend',
      headerName: 'Emprestado',
      width: 100,
      align: 'center',
      renderCell: (params) => {
        const value = params.value;
        const displayValue = value ? 'Sim' : 'Não';
        return <div>{displayValue}</div>;
      },
    },
    { field: 'lendedTo', headerName: 'Beneficiário', width: 180 },
    { field: 'phone', headerName: 'Telefone', width: 100 },
    { field: 'address', headerName: 'Endereço', width: 210 },
    {
      field: 'lendedAt',
      headerName: 'Data de Empréstimo',
      width: 180,
      type: 'Date',
      valueGetter: (params) => {
        const date = new Date(params.value);
        return date.toLocaleDateString("pt-BR");
      }
    },
    {
        field: 'createdAt',
        headerName: 'Data de Devolução',
        width: 140,
        type: 'Date',
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
          <div style={{ height: 600, width: '100%', overflow: 'auto' }}>
            <div>
              <div style={{ height: 280, width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <Typography variant="h5" component="span" sx={{ mx: 1 }}>
                    Equipamentos
                  </Typography>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', marginTop: '50px' }}>
                  <TextField
                    id="outlined-basic"
                    label="Pesquise pelo nome do equipamento"
                    variant="outlined"
                    size="medium"
                    sx={{ marginRight: '20px', width: '40%' }}
                    InputProps={{
                      startAdornment: <InputAdornment position="start"><SearchIcon fontSize="small" /></InputAdornment>,
                    }}
                    value={searchValue}
                    onChange={handleSearchTextChange}
                  />
                  <div style={{ margin: '0 10px', display: 'flex', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <FormControlLabel
                        control={<Checkbox checked={isPerishableChecked} onChange={(e) => setIsPerishableChecked(e.target.checked)} />}
                        label="Emprestado"
                      />

                      <div style={{ margin: '0 10px' }}></div>
                      <div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker size="small" label="Data de devolução" />
                        </LocalizationProvider>

                      </div>
                    </div>
                  </div>
                  <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    sx={{
                      backgroundColor: '#00992E',

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
                  checkboxSelection
                />
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2%' }}>

                <div style={{ display: 'none' }}>
                    <ImpressoEquipamentos ref={componentRef} title="Teste" data={usuarios}/>
                  </div>
                  <Button
                    variant="contained"
                    startIcon={<PrintIcon />}
                    sx={{
                      backgroundColor: '#1465bb',

                    }}
                    onClick={handlePrint}
                  >
                    Imprimir
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </div>

      <ModalForm title="APAGAR EQUIPAMENTO" openPopup={openPopup} setOpenPopup={setOpenPopup} >
        <FormDelDonation userId={userId} onDeleteSuccess={handleDelete} onCancel={handleCancel} updateGrid={() => getUsers()} />
      </ModalForm>

      <ModalForm title="ADICIONAR EQUIPAMENTO" openPopup={openCreateUserPopup} setOpenPopup={setOpenCreateUserPopup} >
        <FormCreateDonation onContinueClick={handleContinueClick} onCancelClick={handleCancelClick} updateGrid={() => getUsers()} />
      </ModalForm>

      <ModalForm title="EDITAR EQUIPAMENTO" openPopup={openUpdateUserPopup} setOpenPopup={setOpenUpdateUserPopup}>
        <FormEditDonation userId={userId} onContinueClick={handleUpdateContinueClick} onCancelClick={handleUpdateCancelClick} updateGrid={() => getUsers()} />
      </ModalForm>
    </>
  );
}
