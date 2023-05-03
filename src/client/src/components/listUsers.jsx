import { DataGrid } from '@mui/x-data-grid';
import styles from '../css/tableBox.module.css'
import { useState, useEffect } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

export function ListUsers() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const getUsers = () => {
      fetch("http://localhost:8080/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(response => response.json())
        .then(data => {
          setUsuarios(data);
        })
        .catch(error => {
          console.log(error);
        });
    };

    getUsers();

    const interval = setInterval(() => {
      getUsers();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const deleteUser = (id) => {
    fetch(`http://localhost:8080/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => {
        if (response.status === 200) {
          getUsers();
        } else if (response.status === 401) {
          console.log("Usuário não autorizado para exclusão.");
        } else {
          console.log("Ocorreu um erro na exclusão do usuário.");
          console.log(id)
        }
      })
      .catch(error => {
        console.log(error);
      });
  };


  const columns = [
    { field: '_id', headerName: 'ID', width: 250 },
    { field: 'name', headerName: 'NOME', width: 250 },
    { field: 'username', headerName: 'USER', width: 180 },
    { field: 'created', headerName: 'DATA', width: 180 },
    {
      field: 'actions',
      headerName: 'AÇÕES',
      width: 130,
      renderCell: (params) => {
        return (
          <div>
            <IconButton aria-label="edit" size="small">
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => deleteUser(params.row._id)} aria-label="delete" size="small">
              <DeleteIcon />
            </IconButton>
          </div>
        );
      },
    },
  ];

  const getRowId = (row) => row._id;

  return (
    <>
    <div style={{ marginTop: '2%' }}>
      <Box
        sx={{
          height: '50',
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
      </Box>
    </div>
    
    <div style={{ marginTop: '1%' }}>
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
        <div style={{ height: 400, width: '100%', overflow: 'auto' }}>
        <div>
          <div style={{ height: 280, width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px'}}>
              <Typography variant="h5" component="span" sx={{ mx: 1 }}>
                Usuários Ativos
              </Typography>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <Button variant="contained" startIcon={<PersonAddAlt1Icon  />} sx={{
                backgroundColor: '#00992E',
                marginLeft: 'auto'
              }}>
                Adicionar
              </Button>
            </div>
            
            <DataGrid
              rows={usuarios}
              columns={columns}
              getRowId={getRowId}
              paginationModel={{ page: 0, pageSize: 5 }}
              checkboxSelection
            />
          </div>
          </div>
        </div>
      </Box>
    </div>
    </>         
  );
}
