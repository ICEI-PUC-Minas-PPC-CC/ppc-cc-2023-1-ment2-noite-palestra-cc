import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import Rotas from '../api';
import AlertComponent from './Alerts';

export default function FormDelDirectDonation({ userId, onDeleteSuccess, onCancel, updateGrid }) {
    const routes = new Rotas();
    const [showComponent, setShowComponent] = React.useState(true);
    const [alertProps, setAlertProps] = React.useState(null);

    const deleteUser = (userId) => {
        routes.delete('/direct-donation', userId)
            .then(response => {
                if (response.status === 200) {
                    onDeleteSuccess();
                    updateGrid();
                    setAlertProps({ severity: 'success', content: 'usuário excluído com sucesso!' });
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

    const handleAlertClose = () => {
        setAlertProps(null);
    }

    if (!showComponent) {
        return null;
    }

    return (
        <>
            {alertProps && (
                <AlertComponent
                    severity={alertProps.severity}
                    content={alertProps.content}
                    onClose={handleAlertClose}
                />
            )}
            <Box sx={{
                border: '1px solid #D9D9D9',
                alignItems: 'center',
                padding: '16px',
                margin: '8px',
                marginBottom:'8%'
            }}>
                <Typography variant="p" component="span" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    Você está prestes a realizar uma ação irreversível.
                </Typography>
                <Typography variant="p" component="span" sx={{ fontWeight: 'bold', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '8%' }}>
                    Tem certeza que deseja continuar?
                </Typography>
            </Box>

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
