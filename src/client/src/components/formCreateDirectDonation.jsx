import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LockIcon from '@mui/icons-material/Lock';
import HouseIcon from '@mui/icons-material/House';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Rotas from '../api';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/br';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import AccessibleIcon from '@mui/icons-material/Accessible';



export default function FormCreateEquipament({ onContinueClick, onCancelClick, updateGrid }) {
    const routes = new Rotas();

    const [beneficiaries, setBeneficiaries] = React.useState([]);
    const [selectedBeneficiary, setSelectedBeneficiary] = React.useState('');
    const [donation, setDonation] = React.useState([]);
    const [selectedDonation, setSelectedDonation] = React.useState('');
    const [amountReceive, setAmountReceive] = React.useState(0);
    const [deliveryDate, setDeliveryDate] = React.useState(null);


    const [address, setAddress] = React.useState('');

    const getBeneficiaries = () => {
        routes.get('/beneficiary/all')
            .then(response => setBeneficiaries(response.data))
            .catch(error => {
                console.log(error);
            });
    };

    const getDonation = () => {
        routes.get('/direct-donation/all')
            .then(response => setDonation(response.data))
            .catch(error => {
                console.log(error);
            });
    };

    React.useEffect(() => {
        getBeneficiaries();
    }, []);

    React.useEffect(() => {
        getDonation();
    }, []);


    const handleContinueClick = () => {
        const userData = {
            nameBeneficiary: selectedBeneficiary,
            amountReceive,
            deliveryDate,
            donationName: donation
        };

        routes
            .post('/direct-donation', userData)
            .then((response) => {
                if (response.status === 201) {
                    onContinueClick(userData);
                    updateGrid();
                } else {
                    console.log('Ocorreu um erro na criação do usuário');
                }
            })
            .catch((error) => {
                console.error(error);
                console.log('Ocorreu um erro na criação do usuário');
            });

        routes
            .post('/donation', userData.amountReceive)
            .then((response) => {
                if (response.status === 201) {
                    onContinueClick(userData.amountReceive);
                    updateGrid();
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

    const handleBeneficiaryChange = (e) => {
        const selectedBeneficiary = e.target.value;

        const selectedBeneficiaryData = beneficiaries.find(
            (beneficiary) => beneficiary.name === selectedBeneficiary
        );

        if (selectedBeneficiaryData) {
            setSelectedBeneficiary(selectedBeneficiary);
        } else {
            setSelectedBeneficiary('');
        }
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
                        <FormControl sx={{ width: 230, marginLeft: '5px', marginTop: '8px' }}>
                            <InputLabel id="demo-simple-select-label">Beneficiario</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selectedBeneficiary}
                                label="Beneficiário"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><PersonIcon fontSize="small" /></InputAdornment>,
                                }}
                                onChange={handleBeneficiaryChange}
                            >
                                <MenuItem> Escolha uma opção</MenuItem>
                                {beneficiaries.map((beneficiary) => (
                                    <MenuItem key={beneficiary.name} value={beneficiary.name}>{beneficiary.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl sx={{ width: 230, marginLeft: '5px', marginTop: '8px' }}>
                            <InputLabel id="demo-simple-select-label">Beneficiario</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selectedDonation}
                                label="Beneficiário"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><PersonIcon fontSize="small" /></InputAdornment>,
                                }}
                                onChange={handleBeneficiaryChange}
                            >
                                <MenuItem> Escolha uma opção</MenuItem>
                                {beneficiaries.map((beneficiary) => (
                                    <MenuItem key={beneficiary.name} value={beneficiary.name}>{beneficiary.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <FormControl sx={{ width: 230, marginLeft: '5px', marginTop: '8px' }}>
                            <InputLabel id="demo-simple-select-label">Situação</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={lend}
                                label="Situação"
                                onChange={(e) => setLend(e.target.value)}
                            >
                                <MenuItem></MenuItem>
                                <MenuItem value={true}>Emprestado</MenuItem>o
                                <MenuItem value={false}>Não Emprestado</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div>

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
                            label="Endereço"
                            variant="outlined"
                            value={address}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><HouseIcon fontSize="small" /></InputAdornment>,
                            }}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div>
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='br'>
                            <DatePicker size="small" label="Data de emprestimo"
                                value={lendedAt}
                                onChange={(e) => setLendedAt(e)}
                            />
                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='br'>
                            <DatePicker size="small" label="Data de devolução"
                                value={createdAt}
                                onChange={(e) => setCreatedAt(e)} />
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
