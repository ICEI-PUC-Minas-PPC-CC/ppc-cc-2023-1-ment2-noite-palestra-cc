import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';


export function ListUsers() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
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
  }, []);
  

  const columns = [
    { field: '_id', headerName: 'ID', width: 250 },
    { field: 'name', headerName: 'NOME', width: 250 },
    { field: 'username', headerName: 'USER', width: 180 },
    { field: 'created', headerName: 'DATA', width: 180 },
    {
      field: 'actions',
      headerName: 'Ações',
      width: 130,
      renderCell: (params) => {
        return (
          <div>
            <IconButton aria-label="edit" size="small">
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" size="small">
              <DeleteIcon />
            </IconButton>
          </div>
        );
      },
    },
  ];
  
  
  const getRowId = (row) => row._id;

  return (
    <div style={{height: 400, width: '80%', margin: '10% auto'}}>    
    
      <DataGrid
        rows={usuarios}
        columns={columns}
        getRowId={getRowId} 
        paginationModel={{ page: 0, pageSize: 5 }}
        checkboxSelection
      />
    </div>
  );
}
