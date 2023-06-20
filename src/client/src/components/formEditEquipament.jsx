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
import { Alert, CircularProgress, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import AccessibleIcon from '@mui/icons-material/Accessible';
import PersonIcon from '@mui/icons-material/Person';
import HouseIcon from '@mui/icons-material/House';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';
import 'dayjs/locale/pt-br'
import Rotas from '../api';


export default function FormEditEquipament({ userId, onContinueClick, onCancelClick, updateGrid }) {
    const routes = new Rotas();
    const [EquipamentData, setEquipamentData] = React.useState(null);
    const [beneficiaries, setBeneficiaries] = React.useState([]);
    const [selectedBeneficiary, setSelectedBeneficiary] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [name, setName] = React.useState('');
    const [code, setCode] = React.useState('')
    const [lend, setLend] = React.useState('')
    const [lendedAt, setLendedAt] = React.useState(null);
    const [createdAt, setCreatedAt] = React.useState(null);
    const [address, setAddress] = React.useState('');
    const [updateLoading, setUpdateLoading] = React.useState(false);


    
    const handleContinueClick = () => {
        const updateEquipament = {
            code,
            name,
            lend,
            lendedAt,
            beneficiary: selectedBeneficiary,
            phone,
            address,
            createdAt
        };
        
        setUpdateLoading(true);
        routes
            .patch(`equipament/${userId}/update-equipament`, updateEquipament)
            .then((response) => {
                if (response.status === 200) {
                    onContinueClick(EquipamentData);
                    onCancelClick();
                    updateGrid();
                } else {
                    console.log('Ocorreu um erro na atualização do usuário');
                }
            })
            .catch((error) => {
                console.error(error);
                console.log('Ocorreu um erro na atualização do usuário');
            })
            .finally(() => {
                setUpdateLoading(false);
              });
    };

    const getBeneficiaries = () => {
        routes.get('/beneficiary/all')
            .then(response => setBeneficiaries(response.data))
            .catch(error => {
                console.log(error);
            });
    };

    React.useEffect(() => {
if(beneficiaries.length > 0){
    fetchUserData();
}
    }, [beneficiaries])

    React.useEffect(() => {
        getBeneficiaries();
    }, []);

    const handleBeneficiaryChange = (e) => {
        const selectedBeneficiary = e.target.value;
      
        if (selectedBeneficiary === "") {
          setSelectedBeneficiary('');
          setPhone('');
          setAddress('');
        } else {
          const selectedBeneficiaryData = beneficiaries.find(
            (beneficiary) => beneficiary.name === selectedBeneficiary
          );
      
          if (selectedBeneficiaryData) {
            setSelectedBeneficiary(selectedBeneficiary);
            setPhone(selectedBeneficiaryData.phone);
            setAddress(selectedBeneficiaryData.address);
          } else {
            setSelectedBeneficiary('');
            setPhone('');
            setAddress('');
          }
        }
      };
      

    const fetchUserData = () => {
        routes.get(`/equipament/${userId}/find`).then((response) => {
            setEquipamentData(response.data);
            setCode(response.data.code);
            setName(response.data.name);
            setLend(response.data.lend);
            setLendedAt(response.data.lendedAt);
            setSelectedBeneficiary(response.data.beneficiary);
            setPhone(response.data.phone);
            setAddress(response.data.address);
            setLendedAt(dayjs(response.data.lendedAt));
            setCreatedAt(dayjs(response.data.createdAt));

        });
    };

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
                            label="Cód. Equipamento"
                            variant="outlined"
                            value={code}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><FingerprintIcon fontSize="small" /></InputAdornment>,
                            }}
                            onChange={(e) => setCode(e.target.value)}
                        />
                        <TextField
                            label="Nome do equipamento"
                            variant="outlined"
                            value={name}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><AccessibleIcon fontSize="small" /></InputAdornment>,
                            }}
                            onChange={(e) => setName(e.target.value)}
                        />
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
                                <MenuItem value=''> Escolha uma opção</MenuItem>
                                {beneficiaries.map((beneficiary) => (
                                    <MenuItem key={beneficiary.name} value={beneficiary.name}>{beneficiary.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
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
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='pt-br'>
                            <DatePicker size="small" label="Data de emprestimo"
                                value={lendedAt}
                                onChange={(e) => setLendedAt(e)}
                            />
                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='pt-br'>
                            <DatePicker size="small" label="Data de devolução"
                                value={createdAt}
                                onChange={(e) => setCreatedAt(e)} />
                        </LocalizationProvider>
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
