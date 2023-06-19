import { useEffect, useRef, useState } from "react";
import { TextField, Typography, Box, Button, InputAdornment, Stack, CircularProgress } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Rotas from "../api";

export function Configuration() {
    const [expirationDays, setExpirationDays] = useState(0);
    const [stock, setStock] = useState(0);
    const [updateLoading, setUpdateLoading] = useState(false);

    const routes = new Rotas();

    const handleContinueClick = () => {
        const updateDonation = { expirationDays, stock };
        setUpdateLoading(true);
        routes
            .patch(`/config/648d162134b0f5ccf99f3a1b/`, updateDonation)
            .then((response) => {
                if (response.status === 200) {
                    console.log("Config salva")
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

    const fetchUserData = () => {
        routes.get(`/equipament/all`).then((response) => {
            setExpirationDays(response.data.expirationDays);
            setStock(response.data.stock);
        });
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <Box
                sx={{
                    width: "80%",
                    maxWidth: 600,
                    padding: '16px',
                    border: '1px solid #D9D9D9',
                    borderRadius: '5px',
                }}
            >
                <div style={{ height: 600, width: '100%', overflow: 'auto' }}>
                    <div>
                        <div style={{ height: 100, width: '100%' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                <Typography variant="h5" component="span" sx={{ mx: 1 }}>
                                    Configurações do sistema
                                </Typography>
                            </div>
                            <div>
                                <TextField
                                    label="Vencimento"
                                    variant="outlined"
                                    type='number'
                                    value={expirationDays}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><TrendingUpIcon fontSize="small" /></InputAdornment>,
                                    }}
                                    sx={{ paddingRight: '2%' }}
                                    onChange={(e) => setExpirationDays(Number(e.target.value))}
                                />
                                <TextField
                                    label="Estoque mínimo"
                                    variant="outlined"
                                    type='number'
                                    value={stock}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><TrendingUpIcon fontSize="small" /></InputAdornment>,
                                    }}
                                    onChange={(e) => setStock(Number(e.target.value))}
                                />
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
                                </Stack>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </div>
    );
}
