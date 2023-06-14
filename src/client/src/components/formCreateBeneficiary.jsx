import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Grid, InputAdornment, TextField, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LockIcon from '@mui/icons-material/Lock';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import HouseIcon from '@mui/icons-material/House';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ArticleIcon from '@mui/icons-material/Article';
import Rotas from '../api';

export default function FormCreateBeneficiary({ onContinueClick, onCancelClick, updateGrid }) {
    const routes = new Rotas();
    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState('');
    const [obs, setObs] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [address, setAddress] = React.useState('');

    const handleContinueClick = () => {
        const userData = {
            name,
            age,
            obs,
            phone,
            email,
            address
        };

        routes
            .post('/beneficiary/create', userData)
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
                            label="Idade"
                            variant="outlined"
                            value={age}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><ContactPageIcon fontSize="small" /></InputAdornment>,
                            }}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <div>
                        <TextField
                            label="Observação"
                            variant="outlined"
                            value={obs}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><ArticleIcon fontSize="small" /></InputAdornment>,
                            }}
                            onChange={(e) => setObs(e.target.value)}
                        />
                        <TextField
                            label="Telefone"
                            variant="outlined"
                            value={phone}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><PhoneAndroidIcon fontSize="small" /></InputAdornment>,
                            }}
                            onChange={(e) => setPhone(e.target.value)}
                        />

                    </div>
                    <div>
                        <TextField
                            sx={{ width: '300px' }}
                            label="Email"
                            variant="outlined"
                            value={email}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><EmailIcon fontSize="small" /></InputAdornment>,
                            }}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            sx={{ width: '300px' }}
                            label="Endereço"
                            variant="outlined"
                            value={address}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><HouseIcon fontSize="small" /></InputAdornment>,
                            }}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                </Box>
            </div>
            <div style={{ marginTop: '16px', borderTop: '15%' }}>
                <Stack direction="row" spacing={2} justifyContent="center">
                    <Button variant="outlined" color="success" onClick={handleContinueClick}>
                        Confirmar
                    </Button>
                    <Button variant="outlined" color="error" onClick={handleCancelClick}>
                        Cancelar
                    </Button>
                </Stack>
            </div>
        </div>
    );
}