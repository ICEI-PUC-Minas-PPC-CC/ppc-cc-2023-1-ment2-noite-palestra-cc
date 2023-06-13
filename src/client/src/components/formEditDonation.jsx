import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import dayjs from 'dayjs';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Alert, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import DescriptionIcon from '@mui/icons-material/Description';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';
import 'dayjs/locale/br';
import Rotas from '../api';


export default function FormEditDonation({ userId, onContinueClick, onCancelClick, updateGrid }) {
    const routes = new Rotas();
    const [DonationData, setDonationData] = React.useState(null);
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [amount, setAmount] = React.useState(0);
    const [perishable, setPerishable] = React.useState(false);
    const [entryDate, setEntryDate] = React.useState(null);
    const [expirationDate, setExpirationDate] = React.useState(null);


    const handleContinueClick = () => {
        const updateDonation = { name, description, amount, perishable, entryDate, expirationDate };
        routes
            .patch(`donation/${userId}/update-donation`, updateDonation)
            .then((response) => {
                if (response.status === 200) {
                    onContinueClick(DonationData);
                    onCancelClick();
                    updateGrid();
                } else {
                    console.log('Ocorreu um erro na atualização do usuário');
                }
            })
            .catch((error) => {
                console.error(error);
                console.log('Ocorreu um erro na atualização do usuário');
            });
    };

    const fetchUserData = () => {
        routes.get(`/donation/${userId}/find`).then((response) => {
            setDonationData(response.data);
            setName(response.data.name);
            setDescription(response.data.description);
            setAmount(response.data.amount);
            setPerishable(response.data.perishable);
            setExpirationDate(dayjs(response.data.expirationDate));
            setEntryDate(dayjs(response.data.entryDate))
            
        });
    };

    React.useEffect(() => {
        fetchUserData();
    }, []);

    const handleCancelClick = () => {
        console.log("Aqui")
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
                                startAdornment: <InputAdornment position="start"><TakeoutDiningIcon fontSize="small" /></InputAdornment>,
                            }}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            label="Descrição"
                            variant="outlined"
                            value={description}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><DescriptionIcon fontSize="small" /></InputAdornment>,
                            }}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div>
                        <TextField
                            label="Quantidade"
                            variant="outlined"
                            type='number'
                            value={amount}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><TrendingUpIcon fontSize="small" /></InputAdornment>,
                            }}
                            onChange={(e) => setAmount(Number(e.target.value))}
                        />
                        <FormControl sx={{width: 230, marginLeft: '5px', marginTop: '8px'}}>
                            <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={perishable}
                                label="Tipo"
                                onChange={(e) => setPerishable(e.target.value)}
                            >
                                <MenuItem value={true}>Perecível</MenuItem>
                                <MenuItem value={false}>Não-Perecível</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='br'>
                            <DatePicker size="small" label="Data de vencimento"
                             value={expirationDate} 
                             onChange={(e) => setExpirationDate(e)} />
                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='br'>
                            <DatePicker size="small" label="Data de entrada" 
                            value={entryDate} 
                            onChange={(e) => setEntryDate(e)} 
                            />
                        </LocalizationProvider>
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
