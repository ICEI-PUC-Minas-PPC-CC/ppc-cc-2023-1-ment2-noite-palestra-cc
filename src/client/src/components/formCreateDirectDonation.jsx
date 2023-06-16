import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Rotas from '../api';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/br';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';



export default function FormCreateDirection({ onContinueClick, onCancelClick, updateGrid }) {
    const routes = new Rotas();

    const [beneficiaries, setBeneficiaries] = React.useState([]);
    const [listDonation, setListDonation] = React.useState([]);
    const [selectDonationData, setSelectedDonationData] = React.useState('')
    const [selectedBeneficiary, setSelectedBeneficiary] = React.useState([]);
    const [donation, setDonation] = React.useState([]);
    const [selectedDonation, setSelectedDonation] = React.useState('');
    const [amountReceive, setAmountReceive] = React.useState(0);
    const [deliveryDate, setDeliveryDate] = React.useState(null);

    const getBeneficiaries = () => {
        routes.get('/beneficiary/all')
            .then(response => setBeneficiaries(response.data))
            .catch(error => {
                console.log(error);
            });
    };

    const getAllDonation = () => {
        routes.get('/donation')
            .then(response => setListDonation(response.data))
            .catch(error => {
                console.log(error);
            });
    };

    const getDirectedDonation = () => {
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
        getDirectedDonation();
    }, []);

    React.useEffect(() => {
        getAllDonation();
    }, []);


    const handleContinueClick = () => {
        const deliveryDonation = {
            nameBeneficiary: selectedBeneficiary,
            amountReceive,
            deliveryDate,
            donationName: selectedDonation.name
        };
        console.log(selectedDonation.name)

        routes
            .post('/direct-donation', deliveryDonation)
            .then((response) => {
                if (response.status === 201) {
                    onContinueClick(deliveryDonation);
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
            .patch(`${selectedDonation}/update-donation-amount`, amountReceive)
            .then((response) => {
                if (response.status === 201) {
                    onContinueClick(deliveryDonation.amountReceive);
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

    const handleDonationChange = (e) => {
        const selectedDonationId = e.target.value;
    
        const selectedDonationData = listDonation.find(
            (donation) => donation._id === selectedDonationId
        );
        if (selectDonationData) {
            setSelectedDonation(selectedDonationId);
            setSelectedDonationData(selectedDonation);
        } else {
            setSelectedDonation('')
            setSelectedDonationData([]);
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
                            <InputLabel id="demo-simple-select-label">Beneficiado</InputLabel>
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
                            <InputLabel id="demo-simple-select-label">Doação</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selectedDonation}
                                label="Beneficiário"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><PersonIcon fontSize="small" /></InputAdornment>,
                                }}
                                onChange={handleDonationChange}
                            >
                                <MenuItem> Escolha uma opção</MenuItem>
                                {listDonation.map((donation) => (
                                    <MenuItem key={donation._id} value={donation._id}>{donation.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div style={{marginTop: "2%"}}>
                    <TextField
                            label="Quantidade"
                            variant="outlined"
                            type='number'
                            value={amountReceive}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><TrendingUpIcon fontSize="small" /></InputAdornment>,
                            }}
                            onChange={(e) => setAmountReceive(Number(e.target.value))}
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='br'>
                            <DatePicker size="small" label="Data de entrada"
                                value={deliveryDate}
                                onChange={(e) => setDeliveryDate(e)}
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
