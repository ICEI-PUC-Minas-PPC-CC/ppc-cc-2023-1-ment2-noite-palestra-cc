import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Rotas from '../api';

export default function FormDelUser({userId, onDeleteSuccess, onCancel}) {
    const routes = new Rotas();
    const [showComponent, setShowComponent] = React.useState(true);
 

    const deleteUser = (userId) => {
        routes.delete('/users', userId)
          .then(response => {
            if (response.status === 200) {
         
              onDeleteSuccess();
            } else if (response.status === 401) {
              console.log("Usuário não autorizado para exclusão.");
              onDeleteSuccess();
            } else {
              console.log("Ocorreu um erro na exclusão do usuário.");
              console.log(userId)
            }
          })
          .catch(error => {
            console.log(error);
          });
    };

    const handleCancelClick = () => {
        onCancel();
    };

    const handleContinueClick = () => {
        deleteUser(userId);
        onCancel();
    };
    
    if (!showComponent) {
        return null;
    }
      
    return (
        <>
            <Typography variant="p" component="span" sx={{ mx: 1 }} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                Você está prestes a realizar uma ação irreversível.
            </Typography>
            <Typography variant="p" component="span" sx={{ mx: 1 }} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '8%'}}>
                Tem certeza que deseja continuar?
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
                <Button variant="outlined" color="success" onClick={handleContinueClick}>
                    Continuar
                </Button>
                <Button variant="outlined" color="error" onClick={handleCancelClick}>
                    Cancelar
                </Button>
            </Stack>
        </>
    );
}
