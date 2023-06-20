import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import * as React from 'react';
import Box from '@mui/material/Box';
import { CircularProgress, FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import 'dayjs/locale/br';
import Rotas from '../api';
import dayjs from 'dayjs';

export default function FormEditDirectDonation({ userId, onContinueClick, onCancelClick, updateGrid }) {
  const routes = new Rotas();

  const [DirectDonationData, setDirectDonationData] = React.useState(null);
  const [beneficiaries, setBeneficiaries] = React.useState([]);
  const [selectedBeneficiary, setSelectedBeneficiary] = React.useState('');

  //Variaveis responsaveis pela doação
  const [donations, setDonations] = React.useState([]);
  const [selectedDonation, setSelectedDonation] = React.useState('');
  const [donationId, setDonationId] = React.useState('');

  const [donationName, setDonationName] = React.useState('');

  const [amountReceive, setAmountReceive] = React.useState(0);
  const [deliveryDate, setDeliveryDate] = React.useState(null);

  const [updateLoading, setUpdateLoading] = React.useState(false);



  const handleContinueClick = () => {
    console.log(donationName);
    const updateDirectDonation = {
      nameBeneficiary: selectedBeneficiary,
      donationName,
      donationId,
      amountReceive,
      deliveryDate
    };

    console.log(userId, selectedDonation);

      //userId e selectedDonation estão iguais não
    routes
      .patch(`/direct-donation/${userId}/update-direct-donation/`, updateDirectDonation)
      .then((response) => {
        if (response.status === 200) {
          setUpdateLoading(true);
          routes.patch(`/donation/${donationId}/update-donation-amount`, { amountReceive })
          .then(() => {
            onContinueClick(DirectDonationData);
            onCancelClick();
            updateGrid();
          })
          .finally(() => {
            setUpdateLoading(false);
          });
        } else {
          console.log('Ocorreu um erro na atualização do direcionamento');
        }
      })
      .catch((error) => {
        console.error(error);
        console.log('Ocorreu um erro na atualização do direcionamento');
      });
  };

  const getBeneficiaries = () => {
    routes.get('/beneficiary/all')
      .then(response => setBeneficiaries(response.data))
      .catch(error => {
        console.log(error);
      });
  };

  const getDonations = () => {
    routes.get('/direct-donation/all')
      .then(response => {
        setDonations(response.data)
      })
      .catch(error => {
        console.log(error);
      })
  };

  React.useEffect(() => {
    if (beneficiaries.length > 0 || donations.length > 0) {
      fetchUserData();
    }
  }, [beneficiaries, donations]);

  React.useEffect(() => {
    getBeneficiaries();
  }, []);

  React.useEffect(() => {
    getDonations();
  }, []);

  const handleBeneficiaryChange = (e) => {
    const selectedBeneficiary = e.target.value;

    if (selectedBeneficiary === "") {
      setSelectedBeneficiary('');
    } else {
      const selectedBeneficiaryData = beneficiaries.find(
        (beneficiary) => beneficiary.name === selectedBeneficiary
      );

      if (selectedBeneficiaryData) {
        setSelectedBeneficiary(selectedBeneficiary);
      } else {
        setSelectedBeneficiary('');
      }
    }
  };

  const handleDonationChange = (e) => {

    const selectedDonationId = e.target.value;

    if (selectedDonationId === "") {
      setSelectedDonation('');
    } else {
      const selectedDonationData = donations.find(
        (donation) => donation._id === selectedDonationId
      );

      if (selectedDonationData) {
        setSelectedDonation(selectedDonationData._id);
        setDonationName(selectedDonationData.donationName)
      } else {
        setSelectedDonation('');
      }
    }
  };


  const fetchUserData = () => {
    routes.get(`/direct-donation/${userId}/find`).then((response) => {
      setDirectDonationData(response.data);
      setSelectedBeneficiary(response.data.nameBeneficiary)
      setSelectedDonation(response.data._id)
      setDonationId(response.data.donationId)
      setDonationName(response.data.donationName)
      setAmountReceive(response.data.amountReceive)
      setDeliveryDate(dayjs(response.data.deliveryDate))
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

            <FormControl sx={{ width: 230, marginLeft: '5px', marginTop: '8px' }}>
              <InputLabel id="demo-simple-select-label">Beneficiado</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="beneficiary"
                value={selectedBeneficiary}
                label="Beneficiário"
                inputProps={{
                  startadornment: <InputAdornment position="start"><PersonIcon fontSize="small" /></InputAdornment>,
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
                id="donation"
                value={selectedDonation}
                label="Doação"
                inputProps={{
                  startadornment: <InputAdornment position="start"><PersonIcon fontSize="small" /></InputAdornment>,
                }}
                onChange={handleDonationChange}
              >
                <MenuItem> Escolha uma opção</MenuItem>
                {donations.map((donation) => (
                  <MenuItem key={donation._id} value={donation._id}>{donation.donationName}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div style={{ marginTop: "2%" }}>
            <TextField
              label="Quantidade"
              variant="outlined"
              type='number'
              value={amountReceive}
              inputProps={{
                startadornment: <InputAdornment position="start"><TrendingUpIcon fontSize="small" /></InputAdornment>,
              }}
              onChange={(e) => setAmountReceive(Number(e.target.value))}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='pt-br'>
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
