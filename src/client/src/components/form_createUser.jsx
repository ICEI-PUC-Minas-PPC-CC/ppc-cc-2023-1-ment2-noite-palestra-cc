import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { CircularProgress, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LockIcon from '@mui/icons-material/Lock';
import Rotas from '../api';

export default function FormCreateUser({ onContinueClick, onCancelClick, updateGrid }) {
    const routes = new Rotas();
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [updateLoading, setUpdateLoading] = React.useState(false);

    const handleContinueClick = () => {
        const userData = {
            name,
            email,
            username,
            password,
            confirmPassword,
        };
        setUpdateLoading(true);
        routes
            .post('/users', userData)
            .then((response) => {
                if (response.status === 201) {
                    onContinueClick(userData);
                    updateGrid()
                } else {
                    console.log('Ocorreu um erro na criação do usuário');
                }
            })
            .catch((error) => {
                console.error(error);
                console.log('Ocorreu um erro na criação do usuário');
            })
            .finally(() => {
                setUpdateLoading(false);
              });
    };

    const handleCancelClick = () => {
        onCancelClick();
    };

    return (
        <div>
            <div>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                        border: '1px solid #D9D9D9',
                        alignItems: 'center',
                        padding: '16px',
                        margin: '8px',
                        marginBottom: '8%'
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            label="Nome"
                            variant="outlined"
                            value={name}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><PersonIcon fontSize="small" /></InputAdornment>,
                            }}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            label="E-mail"
                            variant="outlined"
                            value={email}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><EmailIcon fontSize="small" /></InputAdornment>,
                            }}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <TextField
                            label="Usuário"
                            variant="outlined"
                            value={username}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><AssignmentIndIcon fontSize="small" /></InputAdornment>,
                            }}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            label="Senha"
                            variant="outlined"
                            type="password"
                            value={password}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><LockIcon fontSize="small" /></InputAdornment>,
                            }}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <TextField
                            label="Confirmar senha"
                            variant="outlined"
                            type="password"
                            value={confirmPassword}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><LockIcon fontSize="small" /></InputAdornment>,
                            }}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                </Box>
            </div>
            <div style={{ marginTop: '16px', borderTop: '15%' }}>
              <Stack direction="row" spacing={2} justifyContent="center">
                <Button
                  variant="outlined"
                  color="success"
                  onClick={handleContinueClick}
                  disabled={updateLoading}
                  startIcon={updateLoading && <CircularProgress size={20} color="success" />}
                >
                  {updateLoading ? '' : 'Confirmar'}
                </Button>
                <Button variant="outlined" color="error" onClick={handleCancelClick}>
                  Cancelar
                </Button>
              </Stack>
            </div>
        </div>
    );
}