import { DataGrid, ptBR } from '@mui/x-data-grid';
import { useState, useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';
import React, { useRef } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Checkbox, FormControlLabel, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import Rotas from '../api';
import ModalForm from './modal_form';
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
import MovingIcon from '@mui/icons-material/Moving';
import { useReactToPrint } from 'react-to-print';
import FormCreateDirection from './formCreateDirectDonation';
import FormDelDirectDonation from './formDelDirectDonation';
import FormEditDirectDonation from './formEditDirectDonation';
import ImpressoDirDonation from './impressoDirectedDonation'


export function ListDirectingDonation() {

  const [donations, setDonation] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isTextFieldEmpty, setIsTextFieldEmpty] = useState(true);
  const [openPopup, setOpenPopup] = useState(false);
  const [openCreateUserPopup, setOpenCreateUserPopup] = useState(false);
  const [openUpdateUserPopup, setOpenUpdateUserPopup] = useState(false);
  const [isPerishableChecked, setIsPerishableChecked] = useState(false);
  const [donationId, setDonationId] = React.useState(null);
  const routes = new Rotas()

  const getDonations = () => {
    routes.get('/direct-donation/all')
      .then(response => setDonation(response.data))
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getDonations();
  }, []);

  const updateTable = () => {
    routes.get('/direct-donation/all')
      .then(response => setDonation(response.data))
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


  const deleteUser = (donationId) => {
    setDonationId(donationId);
    setOpenPopup(true);
  }

  const updateUser = (donationId) => {
    setDonationId(donationId);
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
          .get(`/direct-donation/search-direct-donation?letter=${searchValue}`)
          .then((response) => {
            setDonation(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, 1000);
    } else {
      routes
        .get('/direct-donation/all')
        .then((response) => {
          setDonation(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return () => clearTimeout(timerId);
  }, [searchValue, isTextFieldEmpty]);



  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'teste',
    onAfterPrint: () => alert("Impresso gerado!")
  });

  const columns = [
    { field: 'nameBeneficiary', headerName: 'BENEFICIADO', width: 200 },
    { field: 'donationName', headerName: 'DOAÇÃO', width: 180, editable: true },
    { field: 'amountReceive', headerName: 'QUANTIDADE', width: 110, align: 'center', type: 'number', editable: true },
    {
      field: 'deliveryDate',
      headerName: 'DATA DE ENTREGA',
      width: 150,
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
              <EditIcon sx={{ color: '#ffb14b' }} />
            </IconButton>
            <IconButton onClick={() => deleteUser(params.row._id)} aria-label="delete" size="small">
              <DeleteIcon sx={{ color: '#f83515' }} />
            </IconButton>
          </div>
        );
      },
    },
  ];


  const getRowId = (row) => row._id;

  return (
    <>
      <div style={{ marginTop: '5%' }}>
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
                    Direcionamento de Doações
                  </Typography>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', marginTop: '50px' }}>
                  <TextField fullWidth id="outlined-basic" label="Pesquise o nome do beneficiario" variant="outlined" size="small" sx={{
                    marginRight: '25px'
                  }}
                    InputProps={{
                      startAdornment: <InputAdornment position="start"><SearchIcon fontSize="small" /></InputAdornment>,
                    }}
                    value={searchValue}
                    onChange={handleSearchTextChange}
                  />
                  <Button
                    variant="contained"
                    startIcon={<MovingIcon />}
                    sx={{
                      backgroundColor: '#00992E',

                    }}
                    onClick={() => {
                      console.log('Botão "Adicionar" clicado');
                      setOpenCreateUserPopup(true);
                    }}
                  >
                    DIRECIONAR
                  </Button>
                </div>


                <DataGrid
                  sx={{
                    marginTop: '3%',
                    minHeight: '350px'

                  }}
                  rows={donations}
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
                    <ImpressoDirDonation ref={componentRef} title="Teste" data={donations}/>
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

      <ModalForm title="APAGAR DOAÇÃO" openPopup={openPopup} setOpenPopup={setOpenPopup} >
        <FormDelDirectDonation userId={donationId} onDeleteSuccess={handleDelete} onCancel={handleCancel} updateGrid={() => getDonations()} />
      </ModalForm>

      <ModalForm title="DIRECIONAR NOVA DOAÇÃO" openPopup={openCreateUserPopup} setOpenPopup={setOpenCreateUserPopup} >
        <FormCreateDirection onContinueClick={handleContinueClick} onCancelClick={handleCancelClick} updateGrid={() => getDonations()} />
      </ModalForm>

      <ModalForm title="EDITAR DE DOAÇÃO" openPopup={openUpdateUserPopup} setOpenPopup={setOpenUpdateUserPopup}>
        <FormEditDirectDonation userId={donationId} onContinueClick={handleUpdateContinueClick} onCancelClick={handleUpdateCancelClick} updateGrid={() => getDonations()} />
      </ModalForm>
    </>
  );
}
